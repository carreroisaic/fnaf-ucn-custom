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

// CONFIGURACIÓN
const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270; // 270 - 4.5 minutos (Estándar UCN)

const CAM_DATA = {
    1: { name: "MAIN HALL", img: "cam1_dining.png" },
    2: { name: "PIRATE COVE", img: "cam1_dining.png" }, // Reusando imágenes como placeholders
    3: { name: "KITCHEN", img: "cam1_dining.png" },
    4: { name: "RESTROOMS", img: "cam1_dining.png" },
    5: { name: "SUPPLY CLOSET", img: "cam1_dining.png" }
};

// ESTADO GLOBAL
let roster = new Array(TOTAL_ANIMATRONICS).fill(0);
let gameInterval, powerInterval, tempInterval, ventInterval, fastUpdateInterval;
let currentScore = 0;
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;
let hoveredSlotIdx = -1; // Para atajos de teclado W/S

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
    doors: { left: false, right: false, top: false, side: false },
    monitorDisabled: 0,
    ventCooldown: 0,
    puppetBox: 100.0,
    winding: false
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
const musicBoxUI = document.getElementById('music-box-ui');
const boxMeterFill = document.getElementById('box-meter-fill');
const monitorToggleBar = document.getElementById('monitor-toggle-bar');
const kitchenOverlay = document.getElementById('kitchen-overlay');

// AUDIO ELEMENTS
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
const sfxOmcAppear = document.getElementById('sfx-omc-appear');
const sfxOmcSuccess = document.getElementById('sfx-omc-success');
const sfxOmcFail = document.getElementById('sfx-omc-fail');

const doorsEl = {
    left: document.getElementById('door-left'),
    right: document.getElementById('door-right'),
    top: document.getElementById('door-top'),
    side: document.getElementById('door-side')
};

// --- MENÚ PRINCIPAL ---

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
        slot.style.backgroundImage = `url('char_${i}.png')`;

        let levelDisplay = document.createElement('div');
        levelDisplay.className = 'ai-level';
        levelDisplay.innerText = '0';
        slot.appendChild(levelDisplay);

        slot.addEventListener('click', () => adjustLevel(i, 1));
        slot.addEventListener('contextmenu', (e) => { e.preventDefault(); adjustLevel(i, -1); });

        // Tooltip y Atajos listeners
        slot.addEventListener('mouseenter', () => {
            hoveredSlotIdx = i;
            if (charInfoToggle && charInfoToggle.checked) showTooltip(i);
        });
        slot.addEventListener('mouseleave', () => {
            hoveredSlotIdx = -1;
            hideTooltip();
        });

        rosterGrid.appendChild(slot);
    }

    updateScore();
    bgmMenu.load();

    // Mousemove for tooltip following
    document.addEventListener('mousemove', (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        if (!menuEl.classList.contains('hidden')) {
            updateTooltipPos(e);
        }
    });

    // Atajos de teclado para subir/bajar dificultad con W/S
    window.addEventListener('keydown', (e) => {
        if (!menuEl.classList.contains('hidden') && hoveredSlotIdx !== -1) {
            if (e.key.toLowerCase() === 'w') {
                e.preventDefault();
                adjustLevel(hoveredSlotIdx, 1);
            } else if (e.key.toLowerCase() === 's') {
                e.preventDefault();
                adjustLevel(hoveredSlotIdx, -1);
            }
        }
    }, true); // Usar capturación para máxima prioridad

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

    // Monitor Toggle Bar - Click para mayor confiabilidad
    if (monitorToggleBar) {
        monitorToggleBar.addEventListener('click', toggleMonitor);
    }

    // Puppet Winding
    const windBtn = document.getElementById('wind-btn');
    if (windBtn) {
        windBtn.addEventListener('mousedown', () => { state.winding = true; });
        windBtn.addEventListener('mouseup', () => { state.winding = false; });
        windBtn.addEventListener('mouseleave', () => { state.winding = false; });
    }

    document.querySelectorAll('.cam-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCam(btn.dataset.cam));
    });
}

function adjustLevel(index, amount) {
    if (state.paused) return;
    roster[index] += amount;
    if (roster[index] > 20) roster[index] = 0;
    if (roster[index] < 0) roster[index] = 20;
    let lvEl = rosterGrid.children[index].querySelector('.ai-level');
    lvEl.innerText = roster[index];
    lvEl.className = 'ai-level' + (roster[index] > 0 ? ' active' : '') + (roster[index] === 20 ? ' max' : '');
    updateScore();
}

function setAll(val) {
    if (state.paused) return;
    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        roster[i] = val;
        let lvEl = rosterGrid.children[i].querySelector('.ai-level');
        lvEl.innerText = val;
        lvEl.className = 'ai-level' + (val > 0 ? ' active' : '') + (val === 20 ? ' max' : '');
    }
    updateScore();
}

// --- FUNCIONES TOOLTIP ---

function showTooltip(idx) {
    const char = CHAR_DATA[idx];
    if (!char) return;
    document.getElementById('tooltip-name').innerText = char.name;
    document.getElementById('tooltip-desc').innerText = char.desc;
    tooltipEl.style.display = 'flex';
    // Position it immediately
    updateTooltipPos({ clientX: lastMouseX, clientY: lastMouseY });
}

function hideTooltip() {
    tooltipEl.style.display = 'none';
}

function updateTooltipPos(e) {
    let x = e.clientX + 20;
    let y = e.clientY + 20;

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

// --- FLUJO DE NIFA (GAMEPLAY) ---

function startGame() {
    instructionsScreen.classList.add('hidden');
    loadingScreen.classList.remove('hidden'); // Mostrar carga primero

    // Esperar 3 segundos antes de entrar a la oficina
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        officeEl.classList.remove('hidden');
        bgmMenu.pause();

        // Música Aleatoria
        let rnd = Math.floor(Math.random() * bgmGames.length);
        currentBgm = bgmGames[rnd];
        if (currentBgm) {
            currentBgm.currentTime = 0;
            currentBgm.volume = 0.5;
            currentBgm.play().catch(e => { console.log("Audio play blocked", e); });
        }

        // Resetear Estado de la Noche
        state.power = 100.0;
        state.temp = 60;
        state.usage = 1;
        state.timeSeconds = 0;
        state.timeDeciseconds = 0;
        state.fan = false;
        state.flashlight = false;
        state.mask = false;
        state.monitor = false;
        state.ventilationBroken = false;
        state.currentCam = 1;
        state.paused = false;
        state.doors = { left: false, right: false, top: false, side: false };
        state.omc = { active: false, fishPos: 0, fishDir: 1, timer: 0 };
        state.monitorDisabled = 0;

        // Resetear Visuales
        fanBlades.className = 'fan-stopped';
        maskOverlay.className = 'mask-hidden';
        monitorEl.className = 'monitor-hidden';
        blackoutOverlay.className = '';
        ventWarnLeft.classList.add('hidden');
        ventWarnRight.classList.add('hidden');
        tempEl.classList.remove('critical');
        document.getElementById('omc-minigame').classList.add('hidden');


        // Resetear Puertas
        Object.keys(doorsEl).forEach(d => doorsEl[d].classList.remove('closed'));

        startIntervals();

        // Event Listeners de Juego
        document.addEventListener('keydown', handleInput);
        document.addEventListener('keyup', handleRelease);
        document.addEventListener('mousemove', handleMouseMoveOffice);
    }, 3000); // 3 segundos exactos
}

function startIntervals() {
    gameInterval = setInterval(gameTick, 1000);
    fastUpdateInterval = setInterval(fastUpdateTick, 100);
    // Unificamos todo el sistema de juego aquí para evitar que se pegue
    powerInterval = setInterval(systemTick, 100);
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

// --- CONTROLES Y MOVIMIENTO ---

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
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (officeEl.classList.contains('hidden') || state.monitor || state.paused) return;

    let w = window.innerWidth;
    let centerX = w / 2;
    let offset = (e.clientX - centerX) * state.sensitivity;
    let ratio = (centerX + offset) / w;
    ratio = Math.max(0, Math.min(1, ratio));

    // El OfficeRoom tiene 120vw
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

// --- MECÁNICAS DE OFICINA ---

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

// --- TICKS DEL SISTEMA ---

function systemTick() {
    if (state.paused) return;

    // 1. Energía y Temperatura
    let usage = 1;
    if (state.fan) usage++;
    if (state.flashlight) usage++;
    if (state.monitor) usage++;
    Object.keys(state.doors).forEach(d => { if (state.doors[d]) usage++; });
    state.usage = usage;
    state.power -= usage * 0.0014; // Balanceado
    if (state.power <= 0) { state.power = 0; gameOverPower(); }

    powerValEl.innerText = Math.floor(state.power);
    let bars = ""; for (let i = 0; i < usage; i++) bars += "█"; usageBarsEl.innerText = bars;

    // Temperatura
    if (state.fan && state.temp > 60) state.temp -= 0.15;
    else if (!state.fan && state.temp < 120) state.temp += 0.08;
    tempEl.innerText = Math.floor(state.temp) + "°";
    tempEl.classList.toggle('critical', state.temp >= 100);

    // 2. Puppet Logic (Índice 14: Marionette)
    const level = roster[14];
    if (level > 0) {
        if (state.winding) {
            state.puppetBox = Math.min(100, state.puppetBox + 1.8);
        } else {
            state.puppetBox -= (0.012 + (level * 0.009));
        }

        if (state.monitor && String(state.currentCam) === "3") {
            if (boxMeterFill) boxMeterFill.style.width = state.puppetBox + "%";
            if (musicBoxUI) musicBoxUI.classList.remove('hidden');
        } else {
            if (musicBoxUI) musicBoxUI.classList.add('hidden');
        }

        if (state.puppetBox <= 0) {
            state.puppetBox = 0;
            triggerJumpscare(14);
        }
    }

    // 3. Ventilación
    if (state.ventCooldown > 0) state.ventCooldown -= 0.1;
    if (!state.ventilationBroken && state.ventCooldown <= 0 && Math.random() < 0.0015) {
        triggerVentilationFailure();
        state.ventCooldown = 40;
    }
}

function gameTick() {
    if (state.paused) return;
    state.timeSeconds++;
    let hour = Math.floor((state.timeSeconds / NIGHT_LENGTH_SECONDS) * 6);
    timerEl.innerText = (hour == 0 ? "12" : hour) + " AM";
    if (state.timeSeconds >= NIGHT_LENGTH_SECONDS) { winGame(); return; }
}
function triggerJumpscare(animIndex) {
    stopIntervals();
    if (currentBgm) currentBgm.pause();

    const overlay = document.getElementById('jumpscare-overlay');
    const img = document.getElementById('jumpscare-img');
    const sfx = document.getElementById('sfx-jumpscare');

    img.src = `jumpscare_${animIndex}.png`;
    overlay.classList.remove('hidden');

    try {
        sfx.currentTime = 0;
        sfx.play();
    } catch (e) { }

    setTimeout(() => {
        alert("GAME OVER - " + CHAR_DATA[animIndex].name);
        location.reload();
    }, 2000);
}

function fastUpdateTick() {
    if (state.paused) return;
    state.timeDeciseconds++;
    let totalDS = state.timeDeciseconds;
    if (totalDS > (NIGHT_LENGTH_SECONDS * 10)) totalDS = NIGHT_LENGTH_SECONDS * 10;

    let ds = totalDS % 10;
    let totalS = Math.floor(totalDS / 10);
    let mins = Math.floor(totalS / 60);
    let secs = totalS % 60;

    let formattedSecs = secs < 10 ? "0" + secs : secs;
    detailedTimerEl.innerText = `${mins}:${formattedSecs}.${ds}0`;
}

function ventCheckTick() {
    if (state.paused || state.ventCooldown > 0) return;

    if (!state.ventilationBroken && Math.random() < 0.10) {
        triggerVentilationFailure();
        state.ventCooldown = 30; // 30 segundos de paz antes del próximo fallo
    }
}

function triggerVentilationFailure() {
    state.ventilationBroken = true;
    if (!state.monitor) {
        ventWarnLeft.classList.remove('hidden');
        ventWarnRight.classList.remove('hidden');
    }
    blackoutOverlay.style.transition = "opacity 10s linear";
    blackoutOverlay.classList.add('fading');
}

function repairVentilation() {
    state.ventilationBroken = false;
    ventWarnLeft.classList.add('hidden');
    ventWarnRight.classList.add('hidden');
    blackoutOverlay.style.transition = "none";
    blackoutOverlay.classList.remove('fading');
    const staticDiv = document.getElementById('cam-static');
    staticDiv.style.opacity = "0.9";
    setTimeout(() => staticDiv.style.opacity = "0.3", 500);
}

function switchCam(id) {
    if (state.paused) return;
    state.currentCam = id;
    const cam = CAM_DATA[id];

    // Limpieza visual global
    camImgEl.style.display = 'block';
    if (kitchenOverlay) kitchenOverlay.classList.add('hidden');
    if (musicBoxUI) musicBoxUI.classList.add('hidden');

    if (String(id) === "3") {
        camImgEl.style.display = 'none';
        camLabelEl.innerText = `CAM 03 - KITCHEN`;
        if (kitchenOverlay) kitchenOverlay.classList.remove('hidden');
        if (musicBoxUI) musicBoxUI.classList.remove('hidden'); // Puppet UI en cocina
    } else {
        camImgEl.src = cam ? cam.img : "";
        camLabelEl.innerText = "CAM 0" + id + " - " + (cam ? cam.name : "");
        camImgEl.onerror = () => { camImgEl.style.display = 'none'; };
    }

    document.querySelectorAll('.cam-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cam == id));
}

function gameOverPower() {
    stopIntervals();
    alert("SIN ENERGÍA..."); location.reload();
}

// --- VICTORIA Y RECUENTO DE PUNTOS ---

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

    // Resetear visuales del recuento
    scoreEl.innerText = "Score: 0";
    if (rankEl) {
        rankEl.innerText = "GREAT JOB!";
        rankEl.className = "rank-label rank-great";
    }

    try { winAudio.play().catch(e => { console.log("Win audio play blocked", e); }); } catch (e) { }

    // Tally duration: about 10 seconds
    const TALLY_DURATION_MS = 10000;
    const UPDATE_INTERVAL_MS = 30;
    const totalSteps = TALLY_DURATION_MS / UPDATE_INTERVAL_MS;
    let step = Math.max(1, targetScore / totalSteps);

    let fireworksInterval = setInterval(() => {
        if (currentDisplayScore < targetScore) createFirework();
    }, 400);

    let interval = setInterval(() => {
        currentDisplayScore += step;
        if (currentDisplayScore >= targetScore) {
            currentDisplayScore = targetScore;
            clearInterval(interval);
            clearInterval(fireworksInterval);
            // Salto al final de la música (los últimos 4 segundos)
            try {
                if (winAudio.duration > 4) {
                    winAudio.currentTime = winAudio.duration - 4;
                }
            } catch (e) { }
        }
        scoreEl.innerText = "Score: " + Math.floor(currentDisplayScore);
        updateRankLabel(rankEl, Math.floor(currentDisplayScore));
    }, UPDATE_INTERVAL_MS);
}

function createFirework() {
    const screen = document.querySelector(currentScore > highScore ? '#new-highscore-screen' : '#win-screen');
    if (!screen || screen.classList.contains('hidden')) return;

    const fireworkCount = 12;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < fireworkCount; i++) {
        const p = document.createElement('div');
        p.className = 'firework';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.backgroundColor = color;

        const angle = (Math.PI * 2 / fireworkCount) * i;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        p.style.setProperty('--tx', tx + 'px');
        p.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
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

// Iniciar menú al cargar el script
initMenu();

function confirmReset() {
    if (confirm("¿ESTÁS SEGURO DE QUE DESEAS BORRAR TU RÉCORD?")) {
        localStorage.setItem('fnaf_ucn_highscore', '0');
        highScore = 0;
        highScoreValEl.innerText = "0";
        alert("RÉCORD REINICIADO.");
        location.reload(); // Recargar para limpiar TODO rastro
    }
}
