// Character Data (50 Animatronics)
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "He approaches from the left hall. Keep track of him on the monitor and shut the door when he is standing in the doorway. He moves faster as the building gets warmer." },
    { name: "Bonnie", desc: "He shares Pirate Cove with Foxy. Bonnie becomes agitated when he is viewed on camera. If the figurine on your desk is Bonnie, don't look at CAM 05!" },
    { name: "Chica", desc: "She stays in the kitchen. If she stops making noise (pots and pans), change the music selection to keep her content." },
    { name: "Foxy", desc: "He will gradually leave Pirate Cove if you don't check him. If his pieces leave, he will enter your office and dismantle your monitor." },
    { name: "Toy Freddy", desc: "He sits in Parts and Service playing 'Mr. Hugs'. Check his cam to see how his game is going. Don't let him lose!" },
    { name: "Toy Bonnie", desc: "He slides through the right vent. Put on your Freddy Mask quickly to fool him." },
    { name: "Toy Chica", desc: "She slides through the left vent. Put on your Freddy Mask quickly to fool her." },
    { name: "Mangle", desc: "Climbs through the vent system. Use the vent snare to keep it away, or close the vent door." },
    { name: "Balloon Boy", desc: "He sneaks in through the side vent. Close it and wait for a thud. If he gets in, he disables your flashlight." },
    { name: "JJ", desc: "She sneaks in through the side vent. Close it to block her. If she gets in, she disables all door controls." },
    { name: "Withered Chica", desc: "She climbs through the vents. Use the vent snare. She can get stuck in the vent opening." },
    { name: "Withered Bonnie", desc: "He slips in when you're looking at your monitor. Put on the mask quickly." },
    { name: "Marionette", desc: "Don't neglect its music box. If it breaks free, no doors can stop it. Global Music Box also helps." },
    { name: "Golden Freddy", desc: "When he appears, quickly flip the monitor back up or put on the mask." },
    { name: "Springtrap", desc: "He climbs through the vents toward the opening in front of you. Close the vent door on his face." },
    { name: "Phantom Mangle", desc: "Appears on your monitor at random. Close monitor or switch cameras to make it disappear." },
    { name: "Phantom Freddy", desc: "Slowly materializes in the office. Shine your flashlight to make him disappear." },
    { name: "Phantom BB", desc: "Appears on the viewing monitor. Switch cameras or close the monitor to avoid its jumpscare." },
    { name: "Nightmare Freddy", desc: "Freddles will accumulate on your desk. Shine your light at them to scare them away." },
    { name: "Nightmare Bonnie", desc: "He approaches from the right hall. Purchase his plushie from the Prize Counter to keep him away." },
    { name: "Nightmare Fredbear", desc: "Invisible at cameras. He can only be seen when he reaches the left door. Close it." },
    { name: "Nightmare", desc: "Invisible at cameras. He appears at the right door. Close it quickly." },
    { name: "Jack-O-Chica", desc: "Appears in both doors when the office is hot. Cool down the office to make her leave." },
    { name: "Nightmare Mangle", desc: "Approaches from the right hall. Purchase her plushie from the Prize Counter." },
    { name: "Nightmarionne", desc: "Thin form moves around the office. Do not let your cursor dwell on it for too long." },
    { name: "Nightmare BB", desc: "Sits in your office. Only shine your light when he slumps over. Don't flash if he's upright." },
    { name: "Old Man Consequences", desc: "Press 'C' to catch a fish in his minigame or your monitor will be disabled." },
    { name: "Circus Baby", desc: "Approaches from the right hall. Purchase her plushie from the Prize Counter." },
    { name: "Ballora", desc: "Listen for her music and close the door she is approaching from (left or right)." },
    { name: "Funtime Foxy", desc: "Check his stage for 'Showtime'. Be on camera exactly on the hour to prevent his attack." },
    { name: "Ennard", desc: "Climbs through vents. Listen for squeaking metal and a thud to know when to close the vent door." },
    { name: "Trash and the Gang", desc: "???" },
    { name: "Helpy", desc: "Appears on your desk at random. Click him quickly or he will blast an air horn." },
    { name: "Happy Frog", desc: "Duct crawler. Fooled by audio lures. Immune to heater." },
    { name: "Mr. Hippo", desc: "Duct crawler. Fooled by audio lures or pushed by the heater." },
    { name: "Pigpatch", desc: "Duct crawler. Fooled by audio lures or pushed by the heater." },
    { name: "Nedd Bear", desc: "Duct crawler. Fooled by audio lures 50% of the time. Heater works." },
    { name: "Orville Elephant", desc: "Duct crawler. Rarely fooled by audio lures. Use heater." },
    { name: "Rockstar Freddy", desc: "Demands five Faz-coins. Pay him or use the heater to make him malfunction." },
    { name: "Rockstar Bonnie", desc: "Occasionally appears in your office. Find his guitar on cameras to make him leave." },
    { name: "Rockstar Chica", desc: "Outside either door. Double-click the 'Wet Floor' sign to move it to her side." },
    { name: "Rockstar Foxy", desc: "Click his parrot for help, but beware; he might jumpscare you if he's in a bad mood." },
    { name: "Music Man", desc: "Sensitive to noise. If too loud for too long, he will attack." },
    { name: "El Chip", desc: "Interrupts with loud ads for his restaurant. Press Enter or click Skip." },
    { name: "Funtime Chica", desc: "Appears to distract you by posing and flashing her camera lights." },
    { name: "Molten Freddy", desc: "Climbs through vents. Listen for his laugh and close the vent door." },
    { name: "Scrap Baby", desc: "Sitting at the desk. Shock her if she moves or looks up." },
    { name: "William Afton", desc: "Attacks once per night. When you hear a clatter and flickering lights, close right vent." },
    { name: "Lefty", desc: "Sensitive to noise and heat. Use Global Music Box to keep him calm." },
    { name: "Phone Guy", desc: "Calls at random. Quickly click 'Mute Call' or press Enter to end it." }
];

// Configuración General
const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270;

const CAM_DATA = {
    1: { name: "MAIN HALL", img: "cam1_dining.png" },
    2: { name: "PIRATE COVE", img: "cam1_dining.png" },
    3: { name: "KITCHEN", img: "cam1_dining.png" },
    4: { name: "RESTROOMS", img: "cam1_dining.png" },
    5: { name: "SUPPLY CLOSET", img: "cam1_dining.png" }
};

// Variables de Estado
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

// Referencias al DOM
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

// --- INICIALIZACIÓN ---

function initMenu() {
    rosterGrid.innerHTML = '';
    bgmMenu.volume = 0.4;
    sfxWinNormal.volume = 0.7;
    sfxWinHigh.volume = 0.8;
    sfxMask.volume = 0.6;
    highScoreValEl.innerText = highScore;

    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        let slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.dataset.index = i;
        slot.style.backgroundImage = `url('char_${i}.png')`; // Asume que tienes estos archivos

        let levelDisplay = document.createElement('div');
        levelDisplay.className = 'ai-level';
        levelDisplay.innerText = '0';
        slot.appendChild(levelDisplay);

        slot.addEventListener('click', () => adjustLevel(i, 1));
        slot.addEventListener('contextmenu', (e) => { e.preventDefault(); adjustLevel(i, -1); });

        // Detección de tooltip
        slot.addEventListener('mouseenter', () => {
            if (charInfoToggle && charInfoToggle.checked) showTooltip(i);
        });
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

    // Evento de mouse para tooltip que sigue el cursor
    document.addEventListener('mousemove', (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        if (!menuEl.classList.contains('hidden')) {
            updateTooltipPos(e);
        }
    });
}

// --- TOOLTIP ---

function showTooltip(idx) {
    const char = CHAR_DATA[idx];
    if (!char) return;
    document.getElementById('tooltip-name').innerText = char.name;
    document.getElementById('tooltip-desc').innerText = char.desc;
    tooltipEl.style.display = 'flex';
    updateTooltipPos({ clientX: lastMouseX, clientY: lastMouseY });
}

function hideTooltip() {
    tooltipEl.style.display = 'none';
}

function updateTooltipPos(e) {
    let x = e.clientX + 20;
    let y = e.clientY + 20;

    if (x + 320 > window.innerWidth) x = e.clientX - 340;
    if (y + 160 > window.innerHeight) y = e.clientY - 180;

    tooltipEl.style.left = x + 'px';
    tooltipEl.style.top = y + 'px';
}

// --- LOGICA DE MENÚ ---

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

function showInstructions() {
    menuEl.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
}

// --- FLUJO DE JUEGO ---

function startGame() {
    instructionsScreen.classList.add('hidden');
    officeEl.classList.remove('hidden');
    bgmMenu.pause();

    // Randomizar música
    let rnd = Math.floor(Math.random() * bgmGames.length);
    currentBgm = bgmGames[rnd];
    if (currentBgm) { currentBgm.currentTime = 0; currentBgm.volume = 0.5; currentBgm.play().catch(e => { }); }

    // Resetear Estado
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
    document.addEventListener('mousemove', handleMouseMoveOffice);
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

// --- INPUT HANDLERS ---

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

function handleMouseMoveOffice(e) {
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

// --- ACCIONES DE OFICINA ---

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

// --- TICKS DEL SISTEMA ---

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

function gameOverPower() {
    stopIntervals();
    alert("SIN ENERGÍA..."); location.reload();
}

// --- VICTORIA Y RECUENTO ---

function winGame() {
    stopIntervals();
    if (currentBgm) currentBgm.pause();

    let isHigh = currentScore > (parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0);
    if (isHigh) {
        highScore = currentScore;
        localStorage.setItem('fnaf_ucn_highscore', highScore);
        document.getElementById('new-highscore-screen').classList.remove('hidden');
        startScoreTally('final-score-disp', 'high-rank', true);
    } else {
        document.getElementById('win-screen').classList.remove('hidden');
        startScoreTally('win-score-disp', 'win-rank', false);
    }
}

function startScoreTally(scoreId, rankId, isHigh) {
    let targetScore = currentScore;
    let currentDisplayScore = 0;
    let scoreEl = document.getElementById(scoreId);
    let rankEl = document.getElementById(rankId);
    let winAudio = isHigh ? sfxWinHigh : sfxWinNormal;

    scoreEl.innerText = "Score: 0";
    if (rankEl) {
        rankEl.innerText = "GREAT JOB!";
        rankEl.className = "rank-label rank-great";
    }

    try { winAudio.play().catch(e => { }); } catch (e) { }

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
    if (!el) return;
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

// Arrancar menú al cargar
initMenu();
