// Character Data
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "Approaches from the left hall. Close the door when he is at the opening. Moves faster with heat." },
    { name: "Bonnie", desc: "Shares Pirate's Cove with Foxy. Don't look at him on cameras, or he will disable them." },
    { name: "Chica", desc: "Stays in the kitchen. Change the music box selection when you hear her clanging pots and pans." },
    { name: "Foxy", desc: "View his cove frequently to inhibit his advance." },
    { name: "Toy Freddy", desc: "Playing 'Mr. Hugs' on CAM-08. Don't let him lose or he'll jumpscare you." },
    { name: "Toy Bonnie", desc: "Enters through the right vent. Use the Freddy mask to fool him." },
    { name: "Toy Chica", desc: "Enters through the left vent. Use the Freddy mask to fool her." },
    { name: "Mangle", desc: "Travels through the vent system. Use the vent snare to block it." },
    { name: "Balloon Boy", desc: "Enters through the side vent. Close the vent to block him or he'll disable your light." },
    { name: "JJ", desc: "Enters through the side vent. Close to block or she'll disable door controls." },
    { name: "Withered Chica", desc: "Vent crawler. Use the vent snare or close the vent door." },
    { name: "Withered Bonnie", desc: "Appears in your office. Put on the mask quickly to send him away." },
    { name: "The Marionette", desc: "Wind the Music Box on CAM-04 or she will attack." },
    { name: "Golden Freddy", desc: "Appears when you put the monitor down. Mask or pull monitor back up!" },
    { name: "Springtrap", desc: "Approaches through the top vent. Close it when you see his face." },
    { name: "Phantom Mangle", desc: "Appears on cameras. Close monitor or switch cams to avoid noise distortion." },
    { name: "Phantom Freddy", desc: "Appears in the office. Shine your light at him to dispel him." },
    { name: "Phantom BB", desc: "Appears on cameras. Close monitor or switch cams to avoid a jumpscare." },
    { name: "Nightmare Freddy", desc: "Use your flashlight to scare away the Freddles that sit on your desk." },
    { name: "Nightmare Bonnie", desc: "Buy his plushie from the Prize Counter when he appears on cameras." },
    { name: "Nightmare Fredbear", desc: "Invisible at doors. Listen for his laugh and close the corresponding door." },
    { name: "Nightmare", desc: "Same as Nightmare Fredbear but more aggressive. Close the right door on laugh." },
    { name: "Jack-O-Chica", desc: "Appears in both doors when the office is hot. Cool it down to make her leave." },
    { name: "Nightmare Mangle", desc: "Buy her plushie from the Prize Counter when she appears." },
    { name: "Nightmarionne", desc: "Moves towards your cursor. Keep it away from him to survive!" },
    { name: "Nightmare BB", desc: "Shine your light only when he stands up. If he stays sitting, leave him be." },
    { name: "Old Man Consequences", desc: "Press 'C' to catch a fish in his minigame or be locked out of cameras." },
    { name: "Circus Baby", desc: "Buy her plushie from the Prize Counter when she approaches." },
    { name: "Ballora", desc: "Listen for her music and close the door she's approaching from." },
    { name: "Funtime Foxy", desc: "Check his stage to see when his showtime is. Be on camera exactly on the hour!" },
    { name: "Ennard", desc: "Approaches through the vents. Listen for the squeaking metal cue." },
    { name: "Trash and the Gang", desc: "Temporary distractions that block your view or make noise." },
    { name: "Helpy", desc: "Click him quickly or he'll blast an air horn in your face!" },
    { name: "Happy Frog", desc: "Duct crawler. 100% fooled by audio lures. Immune to heater." },
    { name: "Mr. Hippo", desc: "Duct crawler. Fooled by audio lures and pushed by heater." },
    { name: "Pigpatch", desc: "Duct crawler. Fooled by audio lures and pushed by heater." },
    { name: "Nedd Bear", desc: "Duct crawler. Sometimes fooled by audio lures (50%)." },
    { name: "Orville Elephant", desc: "Duct crawler. Rarely fooled by audio lures (10%). Use heater." },
    { name: "Rockstar Freddy", desc: "Asks for 5 Faz-coins. Pay him or heat the office to glitch him." },
    { name: "Rockstar Bonnie", desc: "Find his guitar on cameras when he appears in your office." },
    { name: "Rockstar Chica", desc: "Place the 'Wet Floor' sign on the side she is approaching." },
    { name: "Rockstar Foxy", desc: "Click his parrot for help, but there's a risk of a jumpscare!" },
    { name: "Music Man", desc: "Keep the noise down, or he will eventually jumpscare you." },
    { name: "El Chip", desc: "Interrupts with loud ads. Press Enter or click Skip to close them." },
    { name: "Funtime Chica", desc: "Appears to distract you with camera flashes and poses." },
    { name: "Molten Freddy", desc: "Approaches through the vents. Listen for his laugh and close the door." },
    { name: "Scrap Baby", desc: "Sitting at the desk. Shock her if she moves or looks up." },
    { name: "William Afton", desc: "Attacks once per night. Listen for a loud crash and flickering lights." },
    { name: "Lefty", desc: "Agitated by noise and heat. Keep them low to keep him away." },
    { name: "Phone Guy", desc: "Mute his call or it will create constant noise for several seconds." }
];

// Configuración
const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270;

const CAM_DATA = {
    1: { name: "MAIN HALL", img: "cam1_dining.png" },
    2: { name: "PIRATE COVE", img: "cam1_dining.png" },
    3: { name: "KITCHEN", img: "cam1_dining.png" },
    4: { name: "RESTROOMS", img: "cam1_dining.png" },
    5: { name: "SUPPLY CLOSET", img: "cam1_dining.png" }
};

// Estado
let roster = new Array(TOTAL_ANIMATRONICS).fill(0);
let gameInterval, powerInterval, tempInterval, ventInterval, fastUpdateInterval;
let currentScore = 0;
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;

let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;

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

// DOM Elements
const menuEl = document.getElementById('menu');
const officeEl = document.getElementById('office');
const officeRoom = document.getElementById('office-room');
const rosterGrid = document.getElementById('roster-grid');
const pointValueEl = document.getElementById('point-value');
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

// Audio
const bgmMenu = document.getElementById('bgm-menu');
const bgmGames = [
    document.getElementById('bgm-game-1'),
    document.getElementById('bgm-game-2'),
    document.getElementById('bgm-game-3')
];
let currentBgm = null;
const sfxWinNormal = document.getElementById('sfx-win-normal');
const sfxWinHigh = document.getElementById('sfx-win-highscore');
const sfxMask = document.getElementById('sfx-mask');

const doorsEl = {
    left: document.getElementById('door-left'),
    right: document.getElementById('door-right'),
    top: document.getElementById('door-top'),
    side: document.getElementById('door-side')
};

function initMenu() {
    rosterGrid.innerHTML = '';
    bgmMenu.volume = 0.4;
    sfxWinNormal.volume = 0.7;
    sfxWinHigh.volume = 0.8;
    sfxMask.volume = 0.6;

    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        let slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.dataset.index = i;
        let levelDisplay = document.createElement('div');
        levelDisplay.className = 'ai-level';
        levelDisplay.innerText = '0';
        slot.appendChild(levelDisplay);

        slot.addEventListener('click', (e) => adjustLevel(i, 1));
        slot.addEventListener('contextmenu', (e) => { e.preventDefault(); adjustLevel(i, -1); });

        // Tooltip hover
        slot.addEventListener('mouseenter', () => showTooltip(i));
        slot.addEventListener('mouseleave', hideTooltip);

        rosterGrid.appendChild(slot);
    }
    updateScore();
    bgmMenu.load();
    const tryPlayMenuMusic = () => {
        if (!menuEl.classList.contains('hidden')) {
            bgmMenu.play().then(() => {
                const hint = document.getElementById('audio-hint');
                if (hint) hint.style.display = 'none';
                ["click", "keydown", "mousedown", "touchstart"].forEach(evt =>
                    document.removeEventListener(evt, tryPlayMenuMusic)
                );
            }).catch(e => { });
        }
    };
    ["click", "keydown", "mousedown", "touchstart"].forEach(evt => document.addEventListener(evt, tryPlayMenuMusic));

    document.querySelectorAll('.cam-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCam(btn.dataset.cam));
    });
}

function showTooltip(idx) {
    const char = CHAR_DATA[idx];
    if (!char) return;
    document.getElementById('tooltip-name').innerText = char.name;
    document.getElementById('tooltip-desc').innerText = char.desc;
    tooltipEl.classList.remove('hidden');
}

function hideTooltip() {
    tooltipEl.classList.add('hidden');
}

function adjustLevel(index, amount) {
    if (state.paused) return;
    roster[index] += amount;
    if (roster[index] > 20) roster[index] = 0;
    if (roster[index] < 0) roster[index] = 20;
    let slotLevel = rosterGrid.children[index].querySelector('.ai-level');
    slotLevel.innerText = roster[index];
    slotLevel.className = 'ai-level' + (roster[index] > 0 ? ' active' : '') + (roster[index] === 20 ? ' max' : '');
    updateScore();
}

function setAll(val) {
    if (state.paused) return;
    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        roster[i] = val;
        let slotLevel = rosterGrid.children[i].querySelector('.ai-level');
        slotLevel.innerText = val;
        slotLevel.className = 'ai-level' + (val > 0 ? ' active' : '') + (val === 20 ? ' max' : '');
    }
    updateScore();
}

function updateScore() {
    currentScore = roster.reduce((a, b) => a + b, 0) * 10;
    pointValueEl.innerText = currentScore;
}

function showInstructions() {
    menuEl.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
}

function startGame() {
    instructionsScreen.classList.add('hidden');
    officeEl.classList.remove('hidden');
    bgmMenu.pause();

    let rnd = Math.floor(Math.random() * bgmGames.length);
    currentBgm = bgmGames[rnd];
    if (currentBgm) { currentBgm.currentTime = 0; currentBgm.volume = 0.5; currentBgm.play().catch(e => { }); }

    state.power = 100.0;
    state.temp = 60;
    state.timeSeconds = 0;
    state.timeDeciseconds = 0;
    state.fan = false;
    state.flashlight = false;
    state.mask = false;
    state.monitor = false;
    state.ventilationBroken = false;
    state.currentCam = 1;
    state.paused = false;

    // Reset Visuals
    fanBlades.className = 'fan-stopped';
    maskOverlay.className = 'mask-hidden';
    monitorEl.className = 'monitor-hidden';
    blackoutOverlay.className = '';
    ventWarnLeft.classList.add('hidden');
    ventWarnRight.classList.add('hidden');
    tempEl.classList.remove('critical');

    startIntervals();

    document.addEventListener('keydown', handleInput);
    document.addEventListener('keyup', handleRelease);
    document.addEventListener('mousemove', handleMouseMove);
}

function startIntervals() {
    gameInterval = setInterval(gameTick, 1000);
    powerInterval = setInterval(powerTick, 100);
    tempInterval = setInterval(tempTick, 500);
    ventInterval = setInterval(ventCheckTick, 5000);
    fastUpdateInterval = setInterval(fastUpdateTick, 100);
}

function stopIntervals() {
    clearInterval(gameInterval);
    clearInterval(powerInterval);
    clearInterval(tempInterval);
    clearInterval(ventInterval);
    clearInterval(fastUpdateInterval);
}

function togglePause() {
    if (officeEl.classList.contains('hidden')) return;

    state.paused = !state.paused;
    if (state.paused) {
        stopIntervals();
        pauseMenuEl.classList.remove('hidden');
        if (currentBgm) currentBgm.pause();
    } else {
        startIntervals();
        pauseMenuEl.classList.add('hidden');
        if (currentBgm) currentBgm.play().catch(e => { });
    }
}

function updateSensitivity(val) {
    state.sensitivity = parseFloat(val);
    document.getElementById('sens-val').innerText = state.sensitivity.toFixed(1);
}

function handleInput(e) {
    if (e.code === 'Escape') {
        togglePause();
        return;
    }
    if (state.paused || e.repeat) return;

    if (e.code === 'Space') {
        state.fan = !state.fan;
        fanBlades.className = state.fan ? 'fan-spinning' : 'fan-stopped';
    }
    if (e.code === 'KeyX') toggleMask();
    if (e.code === 'KeyZ') {
        if (!state.mask && !state.monitor) {
            state.flashlight = true;
            updateFlashlightVisuals(lastMouseX, lastMouseY);
        }
    }
    if (e.code === 'KeyS' || e.code === 'KeyC') toggleMonitor();

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

function handleMouseMove(e) {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (officeEl.classList.contains('hidden') || state.monitor || state.paused) return;

    let w = window.innerWidth;
    let centerX = w / 2;
    let offset = (e.clientX - centerX) * state.sensitivity;
    let ratio = (centerX + offset) / w;
    ratio = Math.max(0, Math.min(1, ratio));

    let translateX = -(ratio * (officeRoom.offsetWidth - w));
    officeRoom.style.transform = `translateX(${translateX}px)`;

    if (state.flashlight && !state.mask) updateFlashlightVisuals(e.clientX, e.clientY);
}

function updateFlashlightVisuals(x, y, off = false) {
    if (off) {
        flashlightOverlay.style.background = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)`;
        flashlightOverlay.style.opacity = "0.95";
    } else {
        flashlightOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 200, 0.4) 15%, rgba(0,0,0,0.98) 40%)`;
        flashlightOverlay.style.opacity = "1";
    }
}

function toggleDoor(which) {
    if (state.mask || state.monitor || state.paused) return;
    state.doors[which] = !state.doors[which];
    doorsEl[which].classList.toggle('closed', state.doors[which]);
}

function toggleMask() {
    if (state.monitor || state.paused) return;
    state.mask = !state.mask;
    maskOverlay.className = state.mask ? 'mask-on' : 'mask-hidden';
    if (state.mask) {
        state.flashlight = false;
        updateFlashlightVisuals(0, 0, true);
    }
    sfxMask.currentTime = 0; sfxMask.play().catch(e => { });
}

function toggleMonitor() {
    if (state.mask || state.paused) return;
    state.monitor = !state.monitor;
    monitorEl.className = state.monitor ? '' : 'monitor-hidden';
    if (state.monitor) {
        state.flashlight = false;
        updateFlashlightVisuals(0, 0, true);
        ventWarnLeft.classList.add('hidden');
        ventWarnRight.classList.add('hidden');
    } else if (state.ventilationBroken) {
        ventWarnLeft.classList.remove('hidden');
        ventWarnRight.classList.remove('hidden');
    }
}

function ventCheckTick() {
    if (!state.ventilationBroken && Math.random() < 0.30) {
        triggerVentilationFailure();
    }
}

function triggerVentilationFailure() {
    state.ventilationBroken = true;
    if (!state.monitor) {
        ventWarnLeft.classList.remove('hidden');
        ventWarnRight.classList.remove('hidden');
    }
    blackoutOverlay.classList.add('fading');
}

function repairVentilation() {
    state.ventilationBroken = false;
    ventWarnLeft.classList.add('hidden');
    ventWarnRight.classList.add('hidden');
    blackoutOverlay.classList.remove('fading');
    const staticDiv = document.getElementById('cam-static');
    staticDiv.style.opacity = "0.9";
    setTimeout(() => staticDiv.style.opacity = "0.3", 500);
}

function switchCam(id) {
    if (state.paused) return;
    state.currentCam = id;
    camImgEl.src = CAM_DATA[id].img;
    camLabelEl.innerText = "CAM 0" + id + " - " + CAM_DATA[id].name;
    document.querySelectorAll('.cam-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cam == id));
}

function powerTick() {
    let usage = 1;
    if (state.fan) usage++;
    if (state.flashlight) usage++;
    if (state.monitor) usage++;
    if (state.doors.left) usage++;
    if (state.doors.right) usage++;
    if (state.doors.top) usage++;
    if (state.doors.side) usage++;

    state.power -= usage * 0.012;
    if (state.power <= 0) { state.power = 0; gameOverPower(); }

    powerValEl.innerText = Math.floor(state.power);
    let bars = ""; for (let i = 0; i < usage; i++) bars += "█"; usageBarsEl.innerText = bars;
}

function tempTick() {
    if (state.fan && state.temp > 60) state.temp--;
    tempEl.innerText = state.temp + "°";
    tempEl.classList.toggle('critical', state.temp >= 100);
}

function gameTick() {
    state.timeSeconds++;
    let hour = Math.floor((state.timeSeconds / NIGHT_LENGTH_SECONDS) * 6);
    timerEl.innerText = (hour == 0 ? "12" : hour) + " AM";

    if (state.timeSeconds >= NIGHT_LENGTH_SECONDS) { winGame(); return; }
    if (!state.fan && state.temp < 120) state.temp += 1;
}

function fastUpdateTick() {
    state.timeDeciseconds++;
    let totalDS = state.timeDeciseconds;
    if (totalDS > 2700) totalDS = 2700;

    let ds = totalDS % 10;
    let totalS = Math.floor(totalDS / 10);
    let mins = Math.floor(totalS / 60);
    let secs = totalS % 60;

    let formattedSecs = secs < 10 ? "0" + secs : secs;
    detailedTimerEl.innerText = `${mins}:${formattedSecs}.${ds}0`;
}

function gameOverPower() {
    stopIntervals();
    alert("SIN ENERGÍA..."); location.reload();
}

function winGame() {
    stopIntervals();
    if (currentBgm) currentBgm.pause();

    let isHigh = currentScore > (parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0);
    if (isHigh) {
        highScore = currentScore;
        localStorage.setItem('fnaf_ucn_highscore', highScore);
        document.getElementById('new-highscore-screen').classList.remove('hidden');
    } else {
        document.getElementById('win-screen').classList.remove('hidden');
    }

    startScoreTally(isHigh ? 'final-score-disp' : 'win-score-disp', isHigh ? 'high-rank' : 'win-rank', isHigh);
}

function startScoreTally(scoreId, rankId, isHigh) {
    let targetScore = currentScore;
    let currentDisplayScore = 0;
    let scoreEl = document.getElementById(scoreId);
    let rankEl = document.getElementById(rankId);
    let winAudio = isHigh ? sfxWinHigh : sfxWinNormal;

    // Reset initial state
    scoreEl.innerText = "Score: 0";
    if (rankEl) {
        rankEl.innerText = "GREAT JOB!";
        rankEl.className = "rank-label rank-great";
    }

    try { winAudio.play(); } catch (e) { }

    let step = Math.max(1, Math.floor(targetScore / 100));
    let interval = setInterval(() => {
        currentDisplayScore += step;
        if (currentDisplayScore >= targetScore) {
            currentDisplayScore = targetScore;
            clearInterval(interval);
            try {
                if (winAudio.duration > 4) {
                    winAudio.currentTime = winAudio.duration - 4;
                }
            } catch (e) { }
        }
        scoreEl.innerText = "Score: " + currentDisplayScore;
        updateRankLabel(rankEl, currentDisplayScore);
    }, 25);
}

function updateRankLabel(el, score) {
    let rank = "";
    let className = "rank-label ";
    if (score < 2000) { rank = "GREAT JOB!"; className += "rank-great"; }
    else if (score < 4000) { rank = "FANTASTIC!"; className += "rank-fantastic"; }
    else if (score < 6000) { rank = "AMAZING!"; className += "rank-amazing"; }
    else if (score < 8000) { rank = "STUPENDOUS!"; className += "rank-stupendous"; }
    else if (score < 10000) { rank = "PERFECT!"; className += "rank-perfect"; }
    else { rank = "UNBEATABLE!"; className += "rank-unbeatable"; }

    el.innerText = rank;
    el.className = className;
}

initMenu();
