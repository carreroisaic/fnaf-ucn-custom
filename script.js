// Character Data
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "He approaches from the left hall. Keep track of him on the monitor and shut the door when he is standing in the doorway. He moves faster as the building gets warmer." },
    { name: "Bonnie", desc: "He shares Pirate Cove with Foxy, but while Foxy becomes more active when NOT viewed on camera, Bonnie becomes more agitated when he IS viewed. If he is in the doorway, he will disable your cameras." },
    { name: "Chica", desc: "She stays in the kitchen, being generally clumsy and knocking over pots and pans. If she stops making noise, change the music selection to keep her content." },
    { name: "Foxy", desc: "He inhabits Pirate Cove and will gradually leave if you don't check on him. If his pieces leave the cove, he will enter your office and dismantle your monitor." },
    { name: "Toy Freddy", desc: "He sits in the Parts and Service room playing video games on his big screen TV. Check his cam to see how his game is going. Don't let him lose!" },
    { name: "Toy Bonnie", desc: "He slides through the vent on your right. Put on your Freddy Mask to fool him and send him back into the vents." },
    { name: "Toy Chica", desc: "She slides through the vent on your left. Put on your Freddy Mask to fool her and send her back into the vents." },
    { name: "Mangle", desc: "Mangle climbs through the vent system. Use the vent snare to keep it away, or close the vent door if it reaches the opening." },
    { name: "Balloon Boy", desc: "He will try to sneak in through the side vent. Close the side vent and wait for a thud to send him away. If he gets in, he will temporarily disable your flashlight." },
    { name: "JJ", desc: "She will also try to sneak in through the side vent. Close the side vent to block her. If she gets in, she will disable all door controls until she leaves." },
    { name: "Withered Chica", desc: "She climbs through the vents. Use the vent snare and the vent door to keep her out. Unlike Mangle, she can get stuck in the vent opening." },
    { name: "Withered Bonnie", desc: "He slips in through the front while you're looking at your monitor. Put on the mask quickly to fool him." },
    { name: "Marionette", desc: "If you neglect its music box, it will eventually break free. No doors can stop it. The Global Music Box can also soothe it." },
    { name: "Golden Freddy", desc: "When he appears after you flip down your monitor, quickly flip it back up or put on your mask to make him disappear." },
    { name: "Springtrap", desc: "He climbs through the vent system toward the vent opening in front of you. Track him on the vent radar and close the vent door on his face." },
    { name: "Phantom Mangle", desc: "It will appear at random on your viewing monitor. Close the monitor or switch cameras to make it disappear. If left on screen, it will invade your office with audio interference." },
    { name: "Phantom Freddy", desc: "He slowly materializes in your office. Shine your flashlight at him to make him disappear. If he fully forms, he will jumpscare you and cause a blackout." },
    { name: "Phantom BB", desc: "He appears on the viewing monitor. Quickly switch cameras or close the monitor to avoid its jumpscare." },
    { name: "Nightmare Freddy", desc: "Freddles will accumulate on your desk. Shine your light at them to scare them away. If too many gather, Nightmare Freddy will jumpscare you." },
    { name: "Nightmare Bonnie", desc: "He approaches from the right hall. You must purchase his plushie from the Prize Counter when he is active to keep him away." },
    { name: "Nightmare Fredbear", desc: "He is invisible to the cameras and can only be seen when he reaches your left door. Close it on his face to send him back into the darkness." },
    { name: "Nightmare", desc: "Similar to Nightmare Fredbear, he is invisible to the cameras and only appears at your right door. Close it quickly to survive." },
    { name: "Jack-O-Chica", desc: "She appears in both doors simultaneously when the office is too hot. Keep the office cool to make her fade away." },
    { name: "Nightmare Mangle", desc: "She approaches from the right hall. You must purchase her plushie from the Prize Counter to prevent her from attacking." },
    { name: "Nightmarionne", desc: "Its thin form moves around the office. Do not let your cursor dwell on it for too long, or it will jumpscare you." },
    { name: "Nightmare BB", desc: "He sits in your office all night. Only shine your light on him when he slumps over. If you flash him while he is upright, he will attack." },
    { name: "Old Man Consequences", desc: "When his minigame appears, press 'C' to catch a fish. Failure to do so will result in your monitor being disabled for a short time." },
    { name: "Circus Baby", desc: "She approaches from the right hall. Purchase her plushie from the Prize Counter to keep her content." },
    { name: "Ballora", desc: "She will approach from either the left or right hall. Listen for her music to know which door to close." },
    { name: "Funtime Foxy", desc: "Check his stage to see when his 'Showtime' is. You must be viewing his camera at the exact moment the hour changes to prevent his attack." },
    { name: "Ennard", desc: "He climbs through the vent system. Listen for the sound of squeaking metal and a thud to know when to close the vent door." },
    { name: "Trash and the Gang", desc: "???" },
    { name: "Helpy", desc: "He will appear on your desk at random. Click on him quickly or he will blast an air horn in your face." },
    { name: "Happy Frog", desc: "She climbs through the overhead duct system. Use the audio lure to keep her in place. She is immune to the heater." },
    { name: "Mr. Hippo", desc: "He climbs through the overhead duct system. Use the audio lure to keep him in place or the heater to push him back." },
    { name: "Pigpatch", desc: "He climbs through the overhead duct system toward your office. Use the audio lure or the heater to ward him off." },
    { name: "Nedd Bear", desc: "He climbs through the overhead duct system. He is only fooled by the audio lure 50% of the time, but the heater works on him." },
    { name: "Orville Elephant", desc: "He climbs through the ducts. He is rarely fooled by the audio lure (10%), so you must use the heater to keep him away." },
    { name: "Rockstar Freddy", desc: "He will occasionally stand up and demand five Faz-coins. If you don't pay him, he will jumpscare you. You can also use the heater to make him malfunction." },
    { name: "Rockstar Bonnie", desc: "He occasionally appears in your office. You must find his guitar on the cameras to make him leave." },
    { name: "Rockstar Chica", desc: "She stands outside either door. Double-click the 'Wet Floor' sign to move it to the door she is standing at to prevent her from entering." },
    { name: "Rockstar Foxy", desc: "His parrot will occasionally fly through the office. Click it and he will offer you help, but be careful; he might be in a bad mood." },
    { name: "Music Man", desc: "He sits behind you and is sensitive to noise. If you make too much noise for too long, he will begin to clash his cymbals faster and faster until he attacks." },
    { name: "El Chip", desc: "He doesn't attack, but he will constantly interrupt you with loud, colorful advertisements for his restaurant." },
    { name: "Funtime Chica", desc: "She doesn't attack, but she will occasionally appear to distract you by posing and flashing her camera lights." },
    { name: "Molten Freddy", desc: "He climbs through the vent system. Listen for his laugh and close the vent door to block his attack." },
    { name: "Scrap Baby", desc: "She will appear on the other side of your desk. When she moves or looks up at you, give her a controlled shock to send her away." },
    { name: "William Afton", desc: "He attacks once per night from the right vent. When you hear a loud clatter and see the lights flicker, quickly close the right vent door." },
    { name: "Lefty", desc: "He sits in the Supply Closet and is sensitive to noise and heat. Keep both low, or use the Global Music Box to keep him calm." },
    { name: "Phone Guy", desc: "He will call your office at random. Quickly click the 'Mute Call' button or press Enter to end the noisy call." }
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

    // El tooltip sigue al mouse solo en el menú
    document.addEventListener('mousemove', (e) => {
        if (!menuEl.classList.contains('hidden')) {
            updateTooltipPos(e);
        }
    });

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
    tooltipEl.style.display = 'flex';
}

function hideTooltip() {
    tooltipEl.style.display = 'none';
}

function updateTooltipPos(e) {
    let x = e.clientX + 15;
    let y = e.clientY + 15;

    // Evitar que se salga por la derecha
    if (x + 320 > window.innerWidth) x = e.clientX - 330;
    // Evitar que se salga por abajo
    if (y + 150 > window.innerHeight) y = e.clientY - 160;

    tooltipEl.style.left = x + 'px';
    tooltipEl.style.top = y + 'px';
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
