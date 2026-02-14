// Character Data (50 Animatronics)
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "He approaches from the left hall. Shut the door when he is in the doorway." },
    { name: "Bonnie", desc: "He stays in Pirate Cove. Don't look at him for too long or he'll disable your cameras." },
    { name: "Chica", desc: "She stays in the kitchen. Listen for the pots and pans." },
    { name: "Foxy", desc: "He will leave Pirate Cove if not checked. He dismantled himself into your office." },
    { name: "Toy Freddy", desc: "He sits in Parts and Service playing 'Mr. Hugs'. Don't let him lose!" },
    { name: "Toy Bonnie", desc: "He slides through the right vent. Put on your mask to fool him." },
    { name: "Toy Chica", desc: "She slides through the left vent. Put on your mask to fool her." },
    { name: "Mangle", desc: "Climbs through the vent system. Close the vent door to block it." },
    { name: "Balloon Boy", desc: "He sneaks in through the side vent. Close it on time." },
    { name: "JJ", desc: "She sneaks in through the side vent. Disables door controls if she gets in." },
    { name: "Withered Chica", desc: "She climbs through the vents. She can get stuck in the opening." },
    { name: "Withered Bonnie", desc: "He slips in when you're looking at your monitor. Put on the mask." },
    { name: "Marionette", desc: "Keep the music box wound up or it will come for you." },
    { name: "Golden Freddy", desc: "Flip the monitor up or put on the mask as soon as he appears." },
    { name: "Springtrap", desc: "He climbs through the vents toward the opening in front of you." },
    { name: "Phantom Mangle", desc: "Appears on your monitor. Switch cameras to make it disappear." },
    { name: "Phantom Freddy", desc: "Slowly materializes in the office. Shine your light at him." },
    { name: "Phantom BB", desc: "Appears on the monitor. Switch cameras quickly." },
    { name: "Nightmare Freddy", desc: "Shine your light at the Freddles on your desk." },
    { name: "Nightmare Bonnie", desc: "He approaches from the right hall. Close the door!" },
    { name: "Nightmare Fredbear", desc: "Visible at the left door. Shut it!" },
    { name: "Nightmare", desc: "Visible at the right door. Shut it!" },
    { name: "Jack-O-Chica", desc: "Keep the office cool to prevent her from appearing." },
    { name: "Nightmare Mangle", desc: "Approaches from the right. Buy her plushie." },
    { name: "Nightmarionne", desc: "Don't hover your cursor over it for too long." },
    { name: "Nightmare BB", desc: "Only shine your light when he slumps over." },
    { name: "Old Man Consequences", desc: "Press 'C' to catch a fish in his minigame." },
    { name: "Circus Baby", desc: "Approaches from the right hall. Buy her plushie." },
    { name: "Ballora", desc: "Listen for her music and close the door she's at." },
    { name: "Funtime Foxy", desc: "Be on camera exactly on the hour of Showtime." },
    { name: "Ennard", desc: "Listen for squeaks and close the front vent." },
    { name: "Trash and the Gang", desc: "They cause loud noises and distractions." },
    { name: "Helpy", desc: "Click him quickly or he'll blast an air horn." },
    { name: "Happy Frog", desc: "Climbs the ducts. Fooled by audio lures." },
    { name: "Mr. Hippo", desc: "Climbs the ducts. Fooled by audio lures." },
    { name: "Pigpatch", desc: "Climbs the ducts. Fooled by audio lures." },
    { name: "Nedd Bear", desc: "Climbs the ducts. Heater works on him." },
    { name: "Orville Elephant", desc: "Climbs the ducts. Fooled by audio lures." },
    { name: "Rockstar Freddy", desc: "Demands five Faz-Coins. Pay him or use the heater." },
    { name: "Rockstar Bonnie", desc: "Find his guitar on the cameras to make him leave." },
    { name: "Rockstar Chica", desc: "Double click the wet floor sign to move it." },
    { name: "Rockstar Foxy", desc: "Click his parrot for help, but it's a risk." },
    { name: "Music Man", desc: "Quiet the office if you hear his cymbals." },
    { name: "El Chip", desc: "Press Enter or click to skip his ads." },
    { name: "Funtime Chica", desc: "Flashes her lights to distract you." },
    { name: "Molten Freddy", desc: "Listen for his laugh and close the front vent." },
    { name: "Scrap Baby", desc: "Shock her if she moves while sitting." },
    { name: "William Afton", desc: "Close the right vent when you hear a clatter." },
    { name: "Lefty", desc: "Sensitive to noise and heat. Global music box works." },
    { name: "Phone Guy", desc: "Quickly click Mute Call when the phone rings." }
];

const TOTAL_ANIMATRONICS = 50;
const NIGHT_LENGTH_SECONDS = 270;

let roster = new Array(TOTAL_ANIMATRONICS).fill(0);
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;
let currentScore = 0;
let gameInterval, systemInterval, fastInterval;
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
const maskOverlay = document.getElementById('mask-overlay');
const monitorEl = document.getElementById('camera-monitor');
const camLabelEl = document.getElementById('cam-label');
const camImgEl = document.getElementById('cam-img');
const tooltipEl = document.getElementById('menu-tooltip');
const monitorBar = document.getElementById('monitor-toggle-bar');

function initMenu() {
    rosterGrid.innerHTML = '';
    highScoreValEl.innerText = highScore;

    for (let i = 0; i < TOTAL_ANIMATRONICS; i++) {
        let slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.style.backgroundImage = `url('char_${i}.png')`;

        let levelDisplay = document.createElement('div');
        levelDisplay.className = 'ai-level';
        levelDisplay.innerText = '0';
        slot.appendChild(levelDisplay);

        slot.onclick = () => adjustLevel(i, 1);
        slot.oncontextmenu = (e) => { e.preventDefault(); adjustLevel(i, -1); };

        slot.onmouseenter = () => {
            hoveredSlotIdx = i;
            if (document.getElementById('char-info-toggle').checked) showTooltip(i);
        };
        slot.onmouseleave = () => { hoveredSlotIdx = -1; hideTooltip(); };

        rosterGrid.appendChild(slot);
    }
    updateScore();

    document.onmousemove = (e) => {
        if (tooltipEl.style.display === 'flex') {
            tooltipEl.style.left = (e.clientX + 20) + "px";
            tooltipEl.style.top = (e.clientY + 20) + "px";
        }
    };

    if (monitorBar) {
        monitorBar.onmouseenter = toggleMonitor;
    }

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

function showTooltip(i) {
    tooltipEl.querySelector('h3').innerText = CHAR_DATA[i].name;
    tooltipEl.querySelector('p').innerText = CHAR_DATA[i].desc;
    tooltipEl.style.display = 'flex';
}
function hideTooltip() { tooltipEl.style.display = 'none'; }

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
        state.timeSeconds = 0;
        state.timeDeciseconds = 0;

        startIntervals();
        document.addEventListener('keydown', handleInput);
        document.addEventListener('keyup', handleRelease);
        document.addEventListener('mousemove', handleOfficeMove);
    }, 2000);
}

function startIntervals() {
    gameInterval = setInterval(() => {
        if (state.paused) return;
        state.timeSeconds++;
        let hour = Math.floor((state.timeSeconds / NIGHT_LENGTH_SECONDS) * 6);
        timerEl.innerText = (hour == 0 ? "12" : hour) + " AM";
        if (state.timeSeconds >= NIGHT_LENGTH_SECONDS) win();
    }, 1000);

    systemInterval = setInterval(() => {
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
        tempEl.innerText = Math.floor(state.temp) + "°";
    }, 100);

    fastInterval = setInterval(() => {
        if (state.paused) return;
        state.timeDeciseconds++;
        let d = state.timeDeciseconds % 10;
        let s = Math.floor(state.timeDeciseconds / 10) % 60;
        let m = Math.floor(state.timeDeciseconds / 600);
        detailedTimerEl.innerText = `${m}:${s < 10 ? '0' + s : s}.${d}0`;
    }, 100);
}

function handleInput(e) {
    if (e.code === 'Escape') togglePause();
    if (state.paused) return;

    if (e.code === 'Space') {
        state.fan = !state.fan;
        document.getElementById('fan-blades-css').className = state.fan ? 'fan-spinning' : 'fan-stopped';
    }
    if (e.code === 'KeyX') {
        if (!state.monitor) {
            state.mask = !state.mask;
            maskOverlay.className = state.mask ? 'mask-on' : 'mask-hidden';
        }
    }
    if (e.code === 'KeyZ' && !state.monitor) state.flashlight = true;
    if (e.code === 'KeyS') toggleMonitor();

    // Doors
    if (e.code === 'KeyA') toggleDoor('left');
    if (e.code === 'KeyD') toggleDoor('right');
    if (e.code === 'KeyW') toggleDoor('top');
    if (e.code === 'KeyF') toggleDoor('side');
}

function handleRelease(e) { if (e.code === 'KeyZ') state.flashlight = false; }

function handleOfficeMove(e) {
    if (state.monitor || state.paused) return;
    let w = window.innerWidth, centerX = w / 2;
    let ratio = Math.max(0, Math.min(1, (e.clientX + (e.clientX - centerX) * state.sensitivity) / w));
    officeRoom.style.transform = `translateX(${-(ratio * (officeRoom.offsetWidth - w))}px)`;

    const overlay = document.getElementById('flashlight-overlay');
    overlay.style.background = state.flashlight ?
        `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,200,0.4) 15%, black 40%)` : 'black';
}

function toggleDoor(k) {
    if (state.monitor || state.paused) return;
    state.doors[k] = !state.doors[k];
    document.getElementById(`door-${k}`).classList.toggle('closed', state.doors[k]);
}

function toggleMonitor() {
    if (state.mask || state.paused) return;
    state.monitor = !state.monitor;
    monitorEl.className = state.monitor ? '' : 'monitor-hidden';
}

function togglePause() {
    state.paused = !state.paused;
    document.getElementById('pause-menu').classList.toggle('hidden', !state.paused);
}

function switchCam(id) {
    state.currentCam = id;
    camLabelEl.innerText = `CAM 0${id}`;
    document.querySelectorAll('.cam-btn').forEach(b => b.classList.toggle('active', b.dataset.cam == id));
}

function win() { alert("VICTORY! Score: " + currentScore); location.reload(); }
function confirmReset() { if (confirm("RESET PROGRESS?")) { localStorage.setItem('fnaf_ucn_highscore', '0'); location.reload(); } }
function updateSensitivity(v) { state.sensitivity = parseFloat(v); document.getElementById('sens-val').innerText = v; }
function repairVentilation() { /* Stable reset */ }

initMenu();
