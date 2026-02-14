// Character Data (50 Animatronics)
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "He approaches from the left hall. Keep track of him on the monitor and shut the door when he is standing in the doorway." },
    { name: "Bonnie", desc: "He shares Pirate Cove with Foxy. Bonnie becomes agitated when he is viewed on camera." },
    { name: "Chica", desc: "She stays in the kitchen. If she stops making noise, something is wrong." },
    { name: "Foxy", desc: "He will gradually leave Pirate Cove if you don't check him." },
    { name: "Toy Freddy", desc: "He sits in Parts and Service playing 'Mr. Hugs'. Don't let him lose!" },
    { name: "Toy Bonnie", desc: "He slides through the right vent. Put on your Freddy Mask quickly." },
    { name: "Toy Chica", desc: "She slides through the left vent. Put on your Freddy Mask quickly." },
    { name: "Mangle", desc: "Climbs through the vent system. Use the vent snare." },
    { name: "Balloon Boy", desc: "Sneaks in through the side vent. Close it and wait for a thud." },
    { name: "JJ", desc: "Sneaks in through the side vent. Disables door controls if she gets in." },
    { name: "Withered Chica", desc: "She climbs through the vents. She can get stuck in the vent opening." },
    { name: "Withered Bonnie", desc: "He slips in when you're looking at your monitor. Put on the mask quickly." },
    { name: "Marionette", desc: "Don't neglect its music box. If it breaks free, no doors can stop it." },
    { name: "Golden Freddy", desc: "When he appears, quickly flip the monitor back up or put on the mask." },
    { name: "Springtrap", desc: "He climbs through the vents toward the opening in front of you." },
    { name: "Phantom Mangle", desc: "Appears on your monitor at random. Switch cameras to make it disappear." },
    { name: "Phantom Freddy", desc: "Slowly materializes in the office. Shine your flashlight." },
    { name: "Phantom BB", desc: "Appears on the viewing monitor. Switch cameras to avoid jumpscare." },
    { name: "Nightmare Freddy", desc: "Freddles accumulation. Shine your light at them." },
    { name: "Nightmare Bonnie", desc: "Approaches from the right hall. Purchase his plushie." },
    { name: "Nightmare Fredbear", desc: "Invisible at cameras. He can only be seen when he reaches the left door." },
    { name: "Nightmare", desc: "Invisible at cameras. He appears at the right door." },
    { name: "Jack-O-Chica", desc: "Appears in both doors when the office is hot." },
    { name: "Nightmare Mangle", desc: "Approaches from the right hall. Purchase her plushie." },
    { name: "Nightmarionne", desc: "Do not let your cursor dwell on it for too long." },
    { name: "Nightmare BB", desc: "Sits in your office. Only shine your light when he slumps over." },
    { name: "Old Man Consequences", desc: "Press 'C' to catch a fish or your monitor will be disabled." },
    { name: "Circus Baby", desc: "Approaches from the right hall. Purchase her plushie." },
    { name: "Ballora", desc: "Listen for her music and close the door she is approaching from." },
    { name: "Funtime Foxy", desc: "Be on camera exactly on the hour to prevent his attack." },
    { name: "Ennard", desc: "Climbs through vents. Listen for squeaking metal." },
    { name: "Trash and the Gang", desc: "???" },
    { name: "Helpy", desc: "Click him quickly or he will blast an air horn." },
    { name: "Happy Frog", desc: "Duct crawler. Fooled by audio lures." },
    { name: "Mr. Hippo", desc: "Duct crawler. Fooled by audio lures." },
    { name: "Pigpatch", desc: "Duct crawler. Fooled by audio lures." },
    { name: "Nedd Bear", desc: "Duct crawler. Fooled by audio lures 50% of the time." },
    { name: "Orville Elephant", desc: "Duct crawler. Rarely fooled by audio lures." },
    { name: "Rockstar Freddy", desc: "Demands five Faz-coins. Pay him or use the heater." },
    { name: "Rockstar Bonnie", desc: "Occasionally appears. Find his guitar on cameras." },
    { name: "Rockstar Chica", desc: "Outside either door. Move the 'Wet Floor' sign." },
    { name: "Rockstar Foxy", desc: "Click his parrot for help, but beware." },
    { name: "Music Man", desc: "Sensitive to noise. If too loud for too long, he will attack." },
    { name: "El Chip", desc: "Interrupts with loud ads. Press Enter or click Skip." },
    { name: "Funtime Chica", desc: "Appears to distract you by posing and flashing lights." },
    { name: "Molten Freddy", desc: "Climbs through vents. Listen for his laugh." },
    { name: "Scrap Baby", desc: "Shock her if she moves or looks up." },
    { name: "William Afton", desc: "Attacks once per night. Close right vent door." },
    { name: "Lefty", desc: "Sensitive to noise and heat." },
    { name: "Phone Guy", desc: "Calls at random. Quickly click 'Mute Call'." }
];

// CONFIGURACIÓN
const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270;

const CAM_DATA = {
    1: { name: "MAIN HALL", img: "cam1_dining.png" },
    2: { name: "PIRATE COVE", img: "cam2_fox.png" },
    3: { name: "KITCHEN", img: "cam3_kitchen.png" },
    4: { name: "RESTROOMS", img: "cam4_bath.png" },
    5: { name: "SUPPLY CLOSET", img: "cam5_closet.png" }
};

// ESTADO GLOBAL
let roster = new Array(TOTAL_ANIMATRONICS).fill(0);
let gameInterval, powerInterval;
let currentScore = 0;
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;
let hoveredSlotIdx = -1;

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
    ventilationBroken: false,
    currentCam: 1,
    timeSeconds: 0,
    timeDeciseconds: 0,
    doors: { left: false, right: false, top: false, side: false }
};

// DOM ELEMENTS
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
const blackoutOverlay = document.getElementById('blackout-overlay');
const ventWarnLeft = document.getElementById('vent-warn-left');
const ventWarnRight = document.getElementById('vent-warn-right');
const fanBlades = document.getElementById('fan-blades-css');
const maskOverlay = document.getElementById('mask-overlay');
const instructionsScreen = document.getElementById('instructions-screen');
const monitorEl = document.getElementById('camera-monitor');
const camImgEl = document.getElementById('cam-img');
const camLabelEl = document.getElementById('cam-label');
const pauseMenuEl = document.getElementById('pause-menu');
const tooltipEl = document.getElementById('menu-tooltip');
const charInfoToggle = document.getElementById('char-info-toggle');
const loadingScreen = document.getElementById('loading-screen');
const monitorToggleBar = document.getElementById('monitor-toggle-bar');

// AUDIO ELEMENTS
const bgmMenu = document.getElementById('bgm-menu');
const sfxWinNormal = document.getElementById('sfx-win-normal');
const sfxWinHigh = document.getElementById('sfx-win-highscore');
const sfxMask = document.getElementById('sfx-mask');
const sfxJumpscare = document.getElementById('sfx-jumpscare');

const doorsEl = {
    left: document.getElementById('door-left'),
    right: document.getElementById('door-right'),
    top: document.getElementById('door-top'),
    side: document.getElementById('door-side')
};

// --- MENÚ PRINCIPAL ---

function initMenu() {
    rosterGrid.innerHTML = '';
    highScoreValEl.innerText = highScore;

    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        let slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.dataset.index = i;
        slot.style.backgroundImage = `url('char_${i}.png')`;

        let levelDisplay = document.createElement('div');
        levelDisplay.className = 'ai-level';
        levelDisplay.innerText = '0';
        slot.appendChild(levelDisplay);

        slot.addEventListener('click', () => adjustLevel(i, 1));
        slot.addEventListener('contextmenu', (e) => { e.preventDefault(); adjustLevel(i, -1); });

        slot.addEventListener('mouseenter', () => {
            hoveredSlotIdx = i;
            if (charInfoToggle.checked) showTooltip(i);
        });
        slot.addEventListener('mouseleave', () => {
            hoveredSlotIdx = -1;
            hideTooltip();
        });

        rosterGrid.appendChild(slot);
    }

    updateScore();

    document.addEventListener('mousemove', (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        if (!menuEl.classList.contains('hidden')) updateTooltipPos(e);
    });

    window.addEventListener('keydown', (e) => {
        if (!menuEl.classList.contains('hidden') && hoveredSlotIdx !== -1) {
            if (e.key.toLowerCase() === 'w') adjustLevel(hoveredSlotIdx, 1);
            else if (e.key.toLowerCase() === 's') adjustLevel(hoveredSlotIdx, -1);
        }
    });

    if (monitorToggleBar) {
        monitorToggleBar.addEventListener('mouseenter', toggleMonitor);
    }

    document.querySelectorAll('.cam-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCam(btn.dataset.cam));
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

function showTooltip(idx) {
    const char = CHAR_DATA[idx];
    if (!char) return;
    document.getElementById('tooltip-name').innerText = char.name;
    document.getElementById('tooltip-desc').innerText = char.desc;
    tooltipEl.style.display = 'flex';
}

function hideTooltip() { tooltipEl.style.display = 'none'; }

function updateTooltipPos(e) {
    let x = e.clientX + 20, y = e.clientY + 20;
    if (x + 350 > window.innerWidth) x = e.clientX - 370;
    if (y + 160 > window.innerHeight) y = e.clientY - 180;
    tooltipEl.style.left = x + 'px';
    tooltipEl.style.top = y + 'px';
}

function updateScore() {
    currentScore = roster.reduce((a, b) => a + b, 0) * 10;
    pointValueEl.innerText = currentScore;
}

function showInstructions() {
    menuEl.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
}

// --- GAMEPLAY ---

function startGame() {
    instructionsScreen.classList.add('hidden');
    loadingScreen.classList.remove('hidden');

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        officeEl.classList.remove('hidden');

        state.power = 100.0;
        state.temp = 60;
        state.timeSeconds = 0;
        state.timeDeciseconds = 0;
        state.fan = false;
        state.monitor = false;
        state.paused = false;

        startIntervals();
        document.addEventListener('keydown', handleInput);
        document.addEventListener('keyup', handleRelease);
        document.addEventListener('mousemove', handleMouseMoveOffice);
    }, 2000);
}

function startIntervals() {
    gameInterval = setInterval(gameTick, 1000);
    powerInterval = setInterval(systemTick, 100);
}

function stopIntervals() {
    clearInterval(gameInterval);
    clearInterval(powerInterval);
}

function systemTick() {
    if (state.paused) return;

    // Energía y Temperatura
    let usage = 1;
    if (state.fan) usage++;
    if (state.flashlight) usage++;
    if (state.monitor) usage++;
    Object.keys(state.doors).forEach(d => { if (state.doors[d]) usage++; });

    state.usage = usage;
    state.power -= usage * 0.0015;
    if (state.power <= 0) { state.power = 0; gameOverPower(); }

    powerValEl.innerText = Math.floor(state.power);
    let bars = ""; for (let i = 0; i < usage; i++) bars += "█"; usageBarsEl.innerText = bars;

    if (state.fan && state.temp > 60) state.temp -= 0.1;
    else if (!state.fan && state.temp < 120) state.temp += 0.05;
    tempEl.innerText = Math.floor(state.temp) + "°";
}

function gameTick() {
    if (state.paused) return;
    state.timeSeconds++;
    let hour = Math.floor((state.timeSeconds / NIGHT_LENGTH_SECONDS) * 6);
    timerEl.innerText = (hour == 0 ? "12" : hour) + " AM";
    if (state.timeSeconds >= NIGHT_LENGTH_SECONDS) winGame();
}

function handleInput(e) {
    if (e.code === 'Escape') togglePause();
    if (state.paused) return;

    if (e.code === 'Space') {
        state.fan = !state.fan;
        fanBlades.className = state.fan ? 'fan-spinning' : 'fan-stopped';
    }
    if (e.code === 'KeyX') toggleMask();
    if (e.code === 'KeyZ' && !state.monitor) {
        state.flashlight = true;
        updateFlashlightVisuals(lastMouseX, lastMouseY);
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
        updateFlashlightVisuals(0, 0, true);
    }
}

function handleMouseMoveOffice(e) {
    if (state.monitor || state.paused) return;
    let w = window.innerWidth, centerX = w / 2;
    let offset = (e.clientX - centerX) * state.sensitivity;
    let ratio = Math.max(0, Math.min(1, (centerX + offset) / w));
    officeRoom.style.transform = `translateX(${-(ratio * (officeRoom.offsetWidth - w))}px)`;
    if (state.flashlight) updateFlashlightVisuals(e.clientX, e.clientY);
}

function updateFlashlightVisuals(x, y, off = false) {
    flashlightOverlay.style.opacity = off ? "0.95" : "1";
    flashlightOverlay.style.background = off ? "black" : `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,200,0.4) 15%, black 40%)`;
}

function toggleDoor(which) {
    if (state.monitor || state.paused) return;
    state.doors[which] = !state.doors[which];
    doorsEl[which].classList.toggle('closed', state.doors[which]);
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
    if (state.paused) {
        stopIntervals();
        pauseMenuEl.classList.remove('hidden');
    } else {
        startIntervals();
        pauseMenuEl.classList.add('hidden');
    }
}

function switchCam(id) {
    state.currentCam = id;
    camImgEl.src = CAM_DATA[id].img;
    camLabelEl.innerText = `CAM 0${id} - ${CAM_DATA[id].name}`;
    document.querySelectorAll('.cam-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cam == id));
}

function winGame() {
    stopIntervals();
    alert("6 AM - YOU WIN!");
    location.reload();
}

function gameOverPower() {
    stopIntervals();
    alert("POWER OUTAGE - GAME OVER");
    location.reload();
}

function confirmReset() {
    if (confirm("RESET PROGRESS?")) {
        localStorage.setItem('fnaf_ucn_highscore', '0');
        location.reload();
    }
}

function updateSensitivity(val) {
    state.sensitivity = parseFloat(val);
    document.getElementById('sens-val').innerText = val;
}

initMenu();
