// Character Data (50 Animatronics)
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "Approaches from left door." },
    { name: "Bonnie", desc: "Pirate Cove inhabitant." },
    { name: "Chica", desc: "Stays in the kitchen." },
    { name: "Foxy", desc: "Pirate Cove inhabitant." },
    { name: "Toy Freddy", desc: "Parts & Service." },
    { name: "Toy Bonnie", desc: "Right vent slides." },
    { name: "Toy Chica", desc: "Left vent slides." },
    { name: "Mangle", desc: "Vent system climber." },
    { name: "Balloon Boy", desc: "Side vent sneaker." },
    { name: "JJ", desc: "Side vent sneaker." },
    { name: "Withered Chica", desc: "Vent system." },
    { name: "Withered Bonnie", desc: "Office visitor." },
    { name: "Marionette", desc: "Music box owner." },
    { name: "Golden Freddy", desc: "Ghostly presence." },
    { name: "Springtrap", desc: "Vent opening climber." },
    { name: "Phantom Mangle", desc: "Monitor disruption." },
    { name: "Phantom Freddy", desc: "Office apparition." },
    { name: "Phantom BB", desc: "Monitor jumpscare." },
    { name: "Nightmare Freddy", desc: "Freddles on desk." },
    { name: "Nightmare Bonnie", desc: "Right hall hallway." },
    { name: "Nightmare Fredbear", desc: "Left door laugh." },
    { name: "Nightmare", desc: "Right door laugh." },
    { name: "Jack-O-Chica", desc: "Heat sensitive." },
    { name: "Nightmare Mangle", desc: "Right hall plushie." },
    { name: "Nightmarionne", desc: "Cursor sensitive." },
    { name: "Nightmare BB", desc: "Office sitter." },
    { name: "Old Man Consequences", desc: "Catch a fish." },
    { name: "Circus Baby", desc: "Right hall plushie." },
    { name: "Ballora", desc: "Audio sensitive door." },
    { name: "Funtime Foxy", desc: "Showtime check." },
    { name: "Ennard", desc: "Vent squeaks." },
    { name: "Trash and the Gang", desc: "Disruptions." },
    { name: "Helpy", desc: "Desk clicker." },
    { name: "Happy Frog", desc: "Duct crawler." },
    { name: "Mr. Hippo", desc: "Duct crawler." },
    { name: "Pigpatch", desc: "Duct crawler." },
    { name: "Nedd Bear", desc: "Duct crawler." },
    { name: "Orville Elephant", desc: "Duct crawler." },
    { name: "Rockstar Freddy", desc: "Faz-coins." },
    { name: "Rockstar Bonnie", desc: "Guitar finder." },
    { name: "Rockstar Chica", desc: "Wet floor sign." },
    { name: "Rockstar Foxy", desc: "Parrot helper." },
    { name: "Music Man", desc: "Noise sensitive." },
    { name: "El Chip", desc: "Ads interruption." },
    { name: "Funtime Chica", desc: "Pose distraction." },
    { name: "Molten Freddy", desc: "Vent laugh." },
    { name: "Scrap Baby", desc: "Shock her." },
    { name: "William Afton", desc: "Vent clatter." },
    { name: "Lefty", desc: "Global Music Box." },
    { name: "Phone Guy", desc: "Call muter." }
];

const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270;

const CAM_DATA = {
    1: { name: "DINING" },
    2: { name: "COVE" },
    3: { name: "KITCHEN" },
    4: { name: "BATH" },
    5: { name: "CLOSET" }
};

let roster = new Array(TOTAL_ANIMATRONICS).fill(0);
let gameInterval, powerInterval, fastInterval;
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;
let currentScore = 0;
let hoveredIdx = -1;

let state = {
    power: 100,
    temp: 60,
    usage: 1,
    fan: false,
    flashlight: false,
    mask: false,
    monitor: false,
    paused: false,
    sensitivity: 1.0,
    currentCam: 1,
    time: 0,
    deciseconds: 0,
    doors: { left: false, right: false, top: false, side: false }
};

// DOM
const menuEl = document.getElementById('menu');
const officeEl = document.getElementById('office');
const officeRoom = document.getElementById('office-room');
const rosterGrid = document.getElementById('roster-grid');
const pointValEl = document.getElementById('point-value');
const highValEl = document.getElementById('high-score-val');
const timerEl = document.getElementById('timer');
const detailTimerEl = document.getElementById('detailed-timer');
const powerValEl = document.getElementById('power-val');
const usageBarsEl = document.getElementById('usage-bars');
const tempEl = document.getElementById('temperature');
const maskOverlay = document.getElementById('mask-overlay');
const monitorEl = document.getElementById('camera-monitor');
const camLabelEl = document.getElementById('cam-label');
const camImgEl = document.getElementById('cam-img');
const monitorBar = document.getElementById('monitor-toggle-bar');

const doorsEl = {
    left: document.getElementById('door-left'),
    right: document.getElementById('door-right'),
    top: document.getElementById('door-top'),
    side: document.getElementById('door-side')
};

function initMenu() {
    rosterGrid.innerHTML = '';
    highValEl.innerText = highScore;

    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        let slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.style.backgroundImage = `url('char_${i}.png')`;

        let lv = document.createElement('div');
        lv.className = 'ai-level';
        lv.innerText = '0';
        slot.appendChild(lv);

        slot.onclick = () => adjustLevel(i, 1);
        slot.oncontextmenu = (e) => { e.preventDefault(); adjustLevel(i, -1); };
        slot.onmouseenter = () => { hoveredIdx = i; if (document.getElementById('char-info-toggle').checked) showTooltip(i); };
        slot.onmouseleave = () => { hoveredIdx = -1; hideTooltip(); };

        rosterGrid.appendChild(slot);
    }
    updateScore();

    if (monitorBar) monitorBar.onmouseenter = toggleMonitor;
    document.querySelectorAll('.cam-btn').forEach(b => b.onclick = () => switchCam(b.dataset.cam));
}

function adjustLevel(idx, amt) {
    roster[idx] += amt;
    if (roster[idx] > 20) roster[idx] = 0;
    if (roster[idx] < 0) roster[idx] = 20;
    let el = rosterGrid.children[idx].querySelector('.ai-level');
    el.innerText = roster[idx];
    el.className = 'ai-level' + (roster[idx] > 0 ? ' active' : '') + (roster[idx] == 20 ? ' max' : '');
    updateScore();
}

function setAll(v) {
    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        roster[i] = v;
        let el = rosterGrid.children[i].querySelector('.ai-level');
        el.innerText = v;
        el.className = 'ai-level' + (v > 0 ? ' active' : '') + (v == 20 ? ' max' : '');
    }
    updateScore();
}

function updateScore() {
    currentScore = roster.reduce((a, b) => a + b, 0) * 10;
    pointValEl.innerText = currentScore;
}

function showTooltip(i) {
    document.getElementById('tooltip-name').innerText = CHAR_DATA[i].name;
    document.getElementById('tooltip-desc').innerText = CHAR_DATA[i].desc;
    document.getElementById('menu-tooltip').classList.remove('hidden');
}
function hideTooltip() { document.getElementById('menu-tooltip').classList.add('hidden'); }

function showInstructions() {
    menuEl.classList.add('hidden');
    document.getElementById('instructions-screen').classList.remove('hidden');
}

function startGame() {
    document.getElementById('instructions-screen').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        officeEl.classList.remove('hidden');

        state.power = 100;
        state.temp = 60;
        state.time = 0;
        state.deciseconds = 0;

        startIntervals();
        document.addEventListener('keydown', handleInput);
        document.addEventListener('keyup', handleRelease);
        document.onmousemove = handleMove;
    }, 2000);
}

function startIntervals() {
    gameInterval = setInterval(gameTick, 1000);
    powerInterval = setInterval(systemTick, 100);
    fastInterval = setInterval(fastTick, 100);
}

function stopIntervals() {
    clearInterval(gameInterval);
    clearInterval(powerInterval);
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
    let b = ""; for (let i = 0; i < u; i++) b += "█"; usageBarsEl.innerText = b;

    if (state.fan && state.temp > 60) state.temp -= 0.1;
    else if (!state.fan && state.temp < 120) state.temp += 0.05;
    tempEl.innerText = Math.floor(state.temp);
}

function gameTick() {
    if (state.paused) return;
    state.time++;
    let h = Math.floor((state.time / NIGHT_LENGTH_SECONDS) * 6);
    timerEl.innerText = (h == 0 ? "12" : h) + " AM";
    if (state.time >= NIGHT_LENGTH_SECONDS) win();
}

function fastTick() {
    if (state.paused) return;
    state.deciseconds++;
    let d = state.deciseconds % 10;
    let s = Math.floor(state.deciseconds / 10) % 60;
    let m = Math.floor(state.deciseconds / 600);
    detailTimerEl.innerText = `${m}:${s < 10 ? '0' + s : s}.${d}0`;
}

function handleInput(e) {
    if (e.code == 'Escape') togglePause();
    if (state.paused) return;

    if (e.code == 'Space') {
        state.fan = !state.fan;
        document.getElementById('fan-blades-css').className = state.fan ? 'fan-spinning' : 'fan-stopped';
    }
    if (e.code == 'KeyX') toggleMask();
    if (e.code == 'KeyZ' && !state.monitor) state.flashlight = true;
    if (e.code == 'KeyS') toggleMonitor();
    if (e.code == 'KeyA') toggleDoor('left');
    if (e.code == 'KeyD') toggleDoor('right');
    if (e.code == 'KeyW') toggleDoor('top');
    if (e.code == 'KeyF') toggleDoor('side');
}

function handleRelease(e) { if (e.code == 'KeyZ') state.flashlight = false; }

function handleMove(e) {
    if (state.monitor || state.paused) return;
    let w = window.innerWidth, centerX = w / 2;
    let r = Math.max(0, Math.min(1, (e.clientX + (e.clientX - centerX) * state.sensitivity) / w));
    officeRoom.style.transform = `translateX(${-(r * (officeRoom.offsetWidth - w))}px)`;

    let fx = e.clientX, fy = e.clientY;
    document.getElementById('flashlight-overlay').style.background = state.flashlight ?
        `radial-gradient(circle at ${fx}px ${fy}px, rgba(255,255,200,0.4) 15%, black 40%)` : 'black';
}

function toggleDoor(k) {
    if (state.monitor || state.paused) return;
    state.doors[k] = !state.doors[k];
    doorsEl[k].classList.toggle('closed', state.doors[k]);
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
function togglePause() {
    state.paused = !state.paused;
    if (state.paused) { stopIntervals(); document.getElementById('pause-menu').classList.remove('hidden'); }
    else { startIntervals(); document.getElementById('pause-menu').classList.add('hidden'); }
}
function switchCam(id) {
    state.currentCam = id;
    camLabelEl.innerText = `CAM 0${id}`;
    document.querySelectorAll('.cam-btn').forEach(b => b.classList.toggle('active', b.dataset.cam == id));
}

function win() { stopIntervals(); document.getElementById('win-screen').classList.remove('hidden'); }
function confirmReset() { if (confirm("RESET?")) { localStorage.setItem('fnaf_ucn_highscore', '0'); location.reload(); } }
function updateSensitivity(v) { state.sensitivity = parseFloat(v); document.getElementById('sens-val').innerText = v; }

initMenu();
