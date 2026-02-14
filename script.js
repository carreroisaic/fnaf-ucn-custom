const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270;

const CAM_DATA = {
    1: { name: "DINING AREA" },
    2: { name: "PIRATE COVE" },
    3: { name: "KITCHEN" },
    4: { name: "RESTROOMS" },
    5: { name: "SUPPLY CLOSET" }
};

let roster = new Array(TOTAL_ANIMATRONICS).fill(0);
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;
let currentScore = 0;
let gameInterval, systemInterval, fastInterval;
let lastMouseX = 0;
let lastMouseY = 0;

let state = {
    power: 100.0,
    temp: 60,
    usage: 1,
    fan: false,
    flashlight: false,
    mask: false,
    monitor: false,
    paused: false,
    sensitivity: 1.0,
    currentCam: 1,
    timeSeconds: 0,
    timeDeciseconds: 0,
    doors: { left: false, right: false, top: false, side: false }
};

// Elements
const menuEl = document.getElementById('menu');
const officeEl = document.getElementById('office');
const officeRoom = document.getElementById('office-room');
const rosterGrid = document.getElementById('roster-grid');
const pointValueEl = document.getElementById('point-value');
const highScoreValEl = document.getElementById('high-score-val');
const timerEl = document.getElementById('timer');
const detailedTimerEl = document.getElementById('detailed-timer');
const powerValEl = document.getElementById('power-val');
const usageBarsEl = document.getElementById('usage-bars');
const tempEl = document.getElementById('temperature');
const flashlightOverlay = document.getElementById('flashlight-overlay');
const maskOverlay = document.getElementById('mask-overlay');
const monitorEl = document.getElementById('camera-monitor');
const camLabelEl = document.getElementById('cam-label');
const camImgEl = document.getElementById('cam-img');
const monitorBar = document.getElementById('monitor-toggle-bar');

// Audio
const bgmMenu = document.getElementById('bgm-menu');
const bgmGames = [
    document.getElementById('bgm-game-1'),
    document.getElementById('bgm-game-2'),
    document.getElementById('bgm-game-3')
];
const sfxWinNormal = document.getElementById('sfx-win-normal');
const sfxWinHigh = document.getElementById('sfx-win-high');
let currentBgm = null;

function initMenu() {
    rosterGrid.innerHTML = '';
    highScoreValEl.innerText = highScore;

    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        let slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.style.backgroundImage = `url('char_${i}.png')`;

        let lvDisplay = document.createElement('div');
        lvDisplay.className = 'ai-level';
        lvDisplay.innerText = '0';
        slot.appendChild(lvDisplay);

        slot.onclick = () => adjustLevel(i, 1);
        slot.oncontextmenu = (e) => { e.preventDefault(); adjustLevel(i, -1); };

        slot.onmouseenter = () => showTooltip(i);
        slot.onmouseleave = () => hideTooltip();

        rosterGrid.appendChild(slot);
    }
    updateScore();

    // Auto-play music on first interaction
    const playMenu = () => {
        bgmMenu.play().catch(() => { });
        document.getElementById('audio-hint').classList.add('hidden');
        window.removeEventListener('click', playMenu);
    };
    window.addEventListener('click', playMenu);

    if (monitorBar) monitorBar.onmouseenter = toggleMonitor;
    document.querySelectorAll('.cam-btn').forEach(btn => {
        btn.onclick = () => switchCam(btn.dataset.cam);
    });
}

function adjustLevel(index, amount) {
    roster[index] += amount;
    if (roster[index] > 20) roster[index] = 0;
    if (roster[index] < 0) roster[index] = 20;
    let lvEl = rosterGrid.children[index].querySelector('.ai-level');
    lvEl.innerText = roster[index];
    lvEl.className = 'ai-level' + (roster[index] > 0 ? ' active' : '') + (roster[index] === 20 ? ' max' : '');
    updateScore();
}

function setAll(val) {
    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        roster[i] = val;
        let lvEl = rosterGrid.children[i].querySelector('.ai-level');
        lvEl.innerText = val;
        lvEl.className = 'ai-level' + (val > 0 ? ' active' : '') + (val === 20 ? ' max' : '');
    }
    updateScore();
}

function updateScore() {
    currentScore = roster.reduce((a, b) => a + b, 0) * 10;
    pointValueEl.innerText = currentScore;
}

function showTooltip(i) { /* Opcional: implementar si se desea */ }
function hideTooltip() { /* Opcional */ }

function showInstructions() {
    menuEl.classList.add('hidden');
    document.getElementById('instructions-screen').classList.remove('hidden');
}

function startGame() {
    document.getElementById('instructions-screen').classList.add('hidden');
    officeEl.classList.remove('hidden');
    bgmMenu.pause();

    // Play random game music
    let rnd = Math.floor(Math.random() * bgmGames.length);
    currentBgm = bgmGames[rnd];
    if (currentBgm) {
        currentBgm.currentTime = 0;
        currentBgm.play().catch(() => { });
    }

    state.power = 100;
    state.temp = 60;
    state.timeSeconds = 0;
    state.timeDeciseconds = 0;

    startIntervals();
    document.addEventListener('keydown', handleInput);
    document.addEventListener('keyup', handleRelease);
    document.addEventListener('mousemove', handleOfficeMove);
}

function startIntervals() {
    gameInterval = setInterval(gameTick, 1000);
    systemInterval = setInterval(systemTick, 100);
    fastInterval = setInterval(fastTick, 100);
}

function stopIntervals() {
    clearInterval(gameInterval);
    clearInterval(systemInterval);
    clearInterval(fastInterval);
}

function systemTick() {
    if (state.paused) return;
    let u = 1;
    if (state.fan) u++;
    if (state.flashlight) u++;
    if (state.monitor) u++;
    Object.keys(state.doors).forEach(k => { if (state.doors[k]) u++; });

    state.usage = u;
    state.power -= u * 0.0015;
    if (state.power <= 0) { state.power = 0; location.reload(); }

    powerValEl.innerText = Math.floor(state.power);
    let bars = ""; for (let i = 0; i < u; i++) bars += "█"; usageBarsEl.innerText = bars;

    if (state.fan && state.temp > 60) state.temp -= 0.1;
    else if (!state.fan && state.temp < 120) state.temp += 0.05;
    tempEl.innerText = Math.floor(state.temp);
}

function gameTick() {
    if (state.paused) return;
    state.timeSeconds++;
    let hour = Math.floor((state.timeSeconds / NIGHT_LENGTH_SECONDS) * 6);
    timerEl.innerText = (hour == 0 ? "12" : hour) + " AM";
    if (state.timeSeconds >= NIGHT_LENGTH_SECONDS) win();
}

function fastTick() {
    if (state.paused) return;
    state.timeDeciseconds++;
    let d = state.timeDeciseconds % 10;
    let s = Math.floor(state.timeDeciseconds / 10) % 60;
    let m = Math.floor(state.timeDeciseconds / 600);
    detailedTimerEl.innerText = `${m}:${s < 10 ? '0' + s : s}.${d}0`;
}

function handleInput(e) {
    if (state.paused) return;
    if (e.code === 'Space') {
        state.fan = !state.fan;
        document.getElementById('fan-blades-css').className = state.fan ? 'fan-spinning' : 'fan-stopped';
    }
    if (e.code === 'KeyX') toggleMask();
    if (e.code === 'KeyZ' && !state.monitor) {
        state.flashlight = true;
        updateFlashlight(lastMouseX, lastMouseY);
    }
    if (e.code === 'KeyS') toggleMonitor();

    if (e.code === 'KeyA') toggleDoor('left');
    if (e.code === 'KeyD') toggleDoor('right');
    if (e.code === 'KeyW') toggleDoor('top');
    if (e.code === 'KeyF') toggleDoor('side');
}

function handleRelease(e) {
    if (e.code === 'KeyZ') {
        state.flashlight = false;
        updateFlashlight(0, 0, true);
    }
}

function handleOfficeMove(e) {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    if (state.monitor || state.paused) return;
    let w = window.innerWidth, centerX = w / 2;
    let ratio = Math.max(0, Math.min(1, (e.clientX + (e.clientX - centerX) * state.sensitivity) / w));
    officeRoom.style.transform = `translateX(${-(ratio * (officeRoom.offsetWidth - w))}px)`;

    if (state.flashlight) updateFlashlight(e.clientX, e.clientY);
}

function updateFlashlight(x, y, off = false) {
    if (off) {
        flashlightOverlay.style.background = 'rgba(0, 0, 0, 0.3)';
    } else {
        flashlightOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,200,0.4) 15%, rgba(0,0,0,0.9) 40%)`;
    }
}

function toggleDoor(k) {
    if (state.monitor || state.paused) return;
    state.doors[k] = !state.doors[k];
    document.getElementById(`door-${k}`).classList.toggle('closed', state.doors[k]);
}

function toggleMask() {
    if (state.monitor || state.paused) return;
    state.mask = !state.mask;
    maskOverlay.className = state.mask ? 'mask-on' : 'mask-hidden';
}

function toggleMonitor() {
    if (state.mask || state.paused) return;
    state.monitor = !state.monitor;
    monitorEl.className = state.monitor ? '' : 'monitor-hidden';
}

function switchCam(id) {
    state.currentCam = id;
    camLabelEl.innerText = `CAM 0${id} - ${CAM_DATA[id].name}`;
    document.querySelectorAll('.cam-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cam == id));
}

function win() {
    stopIntervals();
    if (currentBgm) currentBgm.pause();

    let isHigh = currentScore > highScore;
    if (isHigh) {
        highScore = currentScore;
        localStorage.setItem('fnaf_ucn_highscore', highScore);
        document.getElementById('new-highscore-screen').classList.remove('hidden');
        document.getElementById('final-score-disp').innerText = "Score: " + currentScore;
        sfxWinHigh.play().catch(() => { });
    } else {
        document.getElementById('win-screen').classList.remove('hidden');
        document.getElementById('win-score-disp').innerText = "Score: " + currentScore;
        sfxWinNormal.play().catch(() => { });
    }

    // Fireworks effect
    setInterval(createFirework, 300);
}

function createFirework() {
    const fw = document.createElement('div');
    fw.className = 'firework';
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    fw.style.left = x + 'px';
    fw.style.top = y + 'px';
    fw.style.backgroundColor = color;

    for (let i = 0; i < 8; i++) {
        const p = fw.cloneNode();
        const angle = (Math.PI * 2 / 8) * i;
        const dist = 50 + Math.random() * 50;
        p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
}

initMenu();
