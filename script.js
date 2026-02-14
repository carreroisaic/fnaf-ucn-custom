// 50 Animatronics Data
const CHAR_DATA = [
    { name: "Freddy Fazbear", desc: "Left Hall threat." },
    { name: "Bonnie", desc: "Pirate Cove figure." },
    { name: "Chica", desc: "Kitchen noises." },
    { name: "Foxy", desc: "Pirate Cove runner." },
    { name: "Toy Freddy", desc: "Gaming bear." },
    { name: "Toy Bonnie", desc: "Right vent." },
    { name: "Toy Chica", desc: "Left vent." },
    { name: "Mangle", desc: "Vent climber." },
    { name: "Balloon Boy", desc: "Side vent nuisance." },
    { name: "JJ", desc: "Side vent nuisance." },
    { name: "Withered Chica", desc: "Vent system." },
    { name: "Withered Bonnie", desc: "Office visitor." },
    { name: "Marionette", desc: "Music Box." },
    { name: "Golden Freddy", desc: "Flip monitor or mask." },
    { name: "Springtrap", desc: "Vent climber." },
    { name: "Phantom Mangle", desc: "Audio problem." },
    { name: "Phantom Freddy", desc: "Flashlight to scare." },
    { name: "Phantom BB", desc: "Flip monitor." },
    { name: "Nightmare Freddy", desc: "Freddles on desk." },
    { name: "Nightmare Bonnie", desc: "Hallway approach." },
    { name: "Nightmare Fredbear", desc: "Left door." },
    { name: "Nightmare", desc: "Right door." },
    { name: "Jack-O-Chica", desc: "Keep it cool." },
    { name: "Nightmare Mangle", desc: "Right hall." },
    { name: "Nightmarionne", desc: "Mouse away." },
    { name: "Nightmare BB", desc: "Flash when sitting." },
    { name: "Old Man Consequences", desc: "Catch fish [C]." },
    { name: "Circus Baby", desc: "Right hall plush." },
    { name: "Ballora", desc: "Listen for music." },
    { name: "Funtime Foxy", desc: "Check Showtime." },
    { name: "Ennard", desc: "Vent sounds." },
    { name: "Trash and the Gang", desc: "Loud noises." },
    { name: "Helpy", desc: "Click him on desk." },
    { name: "Happy Frog", desc: "Audio lure." },
    { name: "Mr. Hippo", desc: "Audio lure." },
    { name: "Pigpatch", desc: "Audio lure." },
    { name: "Nedd Bear", desc: "Audio lure." },
    { name: "Orville Elephant", desc: "Audio lure." },
    { name: "Rockstar Freddy", desc: "Pay coins." },
    { name: "Rockstar Bonnie", desc: "Find guitar." },
    { name: "Rockstar Chica", desc: "Wet floor sign." },
    { name: "Rockstar Foxy", desc: "Parrot helper." },
    { name: "Music Man", desc: "Quiet area." },
    { name: "El Chip", desc: "Skip ad." },
    { name: "Funtime Chica", desc: "Pose distraction." },
    { name: "Molten Freddy", desc: "Laugh in vent." },
    { name: "Scrap Baby", desc: "Shock on desk." },
    { name: "William Afton", desc: "Vent clatter." },
    { name: "Lefty", desc: "Quiet and cold." },
    { name: "Phone Guy", desc: "Mute call." }
];

const NIGHT_LENGTH = 270;
const CAM_NAMES = { 1: "DINING", 2: "COVE", 3: "KITCHEN", 4: "RESTROOM", 5: "CLOSET" };

// Global State
let roster = new Array(50).fill(0);
let highScore = parseInt(localStorage.getItem('fnaf_ucn_highscore')) || 0;
let currentScore = 0;
let gameInterval, systemInterval, fastInterval;

let state = {
    power: 100, temp: 60, usage: 1,
    fan: false, flashlight: false, mask: false, monitor: false, paused: false,
    sensitivity: 1.0, currentCam: 1, time: 0, ms: 0,
    ventBroken: false, doors: { left: false, right: false, top: false, side: false }
};

// Elements
const officeRoom = document.getElementById('office-room');
const monitorEl = document.getElementById('camera-monitor');
const rosterGrid = document.getElementById('roster-grid');
const timerEl = document.getElementById('timer');
const detailTimerEl = document.getElementById('detailed-timer');
const powerEl = document.getElementById('power-val');
const usageEl = document.getElementById('usage-bars');
const tempEl = document.getElementById('temperature');
const tooltipEl = document.getElementById('menu-tooltip');
const kitchenOverlay = document.getElementById('kitchen-overlay');

function initMenu() {
    rosterGrid.innerHTML = '';
    document.getElementById('high-score-val').innerText = highScore;

    CHAR_DATA.forEach((char, i) => {
        const slot = document.createElement('div');
        slot.className = 'animatronic-slot';
        slot.style.backgroundImage = `url('char_${i}.png')`;

        const lv = document.createElement('div');
        lv.className = 'ai-level';
        lv.innerText = '0';
        slot.appendChild(lv);

        slot.onclick = () => { roster[i] = (roster[i] + 1) % 21; updateSlot(i); };
        slot.oncontextmenu = (e) => { e.preventDefault(); roster[i] = (roster[i] === 0 ? 20 : roster[i] - 1); updateSlot(i); };

        slot.onmouseenter = () => {
            if (document.getElementById('char-info-toggle').checked) {
                document.getElementById('tooltip-name').innerText = char.name;
                document.getElementById('tooltip-desc').innerText = char.desc;
                tooltipEl.classList.remove('hidden');
            }
        };
        slot.onmouseleave = () => tooltipEl.classList.add('hidden');

        rosterGrid.appendChild(slot);
    });

    document.onmousemove = (e) => {
        if (!tooltipEl.classList.contains('hidden')) {
            tooltipEl.style.left = (e.clientX + 20) + "px";
            tooltipEl.style.top = (e.clientY + 20) + "px";
        }
    };
}

function updateSlot(i) {
    const el = rosterGrid.children[i].querySelector('.ai-level');
    el.innerText = roster[i];
    el.className = 'ai-level' + (roster[i] > 0 ? ' active' : '') + (roster[i] == 20 ? ' max' : '');
    currentScore = roster.reduce((a, b) => a + b, 0) * 10;
    document.getElementById('point-value').innerText = currentScore;
}

function setAll(v) { roster.forEach((_, i) => { roster[i] = v; updateSlot(i); }); }

function showInstructions() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('instructions-screen').classList.remove('hidden');
}

function startGame() {
    document.getElementById('instructions-screen').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('office').classList.remove('hidden');
        startLoop();

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        document.addEventListener('mousemove', handleOfficeMove);

        const bar = document.getElementById('monitor-toggle-bar');
        if (bar) bar.onmouseenter = toggleMonitor;
    }, 2000);
}

function startLoop() {
    gameInterval = setInterval(() => {
        if (state.paused) return;
        state.time++;
        let h = Math.floor((state.time / NIGHT_LENGTH) * 6);
        timerEl.innerText = (h == 0 ? "12" : h) + " AM";
        if (state.time >= NIGHT_LENGTH) win();
    }, 1000);

    systemInterval = setInterval(() => {
        if (state.paused) return;
        let u = 1;
        if (state.fan) u++;
        if (state.flashlight) u++;
        if (state.monitor) u++;
        Object.keys(state.doors).forEach(k => { if (state.doors[k]) u++; });

        state.power -= u * 0.0015;
        if (state.power <= 0) { state.power = 0; location.reload(); }

        powerEl.innerText = Math.floor(state.power);
        let b = ""; for (let i = 0; i < u; i++) b += "█"; usageEl.innerText = b;

        if (state.fan && state.temp > 60) state.temp -= 0.1;
        else if (!state.fan && state.temp < 120) state.temp += 0.05;
        tempEl.innerText = Math.floor(state.temp);
    }, 100);

    fastInterval = setInterval(() => {
        if (state.paused) return;
        state.ms += 100;
        let total = Math.floor(state.ms / 100);
        let d = total % 10;
        let s = Math.floor(total / 10) % 60;
        let m = Math.floor(total / 600);
        detailTimerEl.innerText = `${m}:${s < 10 ? '0' + s : s}.${d}0`;
    }, 100);
}

function handleKeyDown(e) {
    if (e.code == 'Escape') togglePause();
    if (state.paused) return;

    if (e.code == 'Space') {
        state.fan = !state.fan;
        document.getElementById('fan-blades-css').className = state.fan ? 'fan-spinning' : 'fan-stopped';
    }
    if (e.code == 'KeyS') toggleMonitor();
    if (e.code == 'KeyX') {
        if (!state.monitor) {
            state.mask = !state.mask;
            document.getElementById('mask-overlay').className = state.mask ? 'mask-on' : 'mask-hidden';
        }
    }
    if (e.code == 'KeyZ' && !state.monitor) state.flashlight = true;

    // Doors
    if (e.code == 'KeyA') toggleDoor('left');
    if (e.code == 'KeyD') toggleDoor('right');
    if (e.code == 'KeyW') toggleDoor('top');
    if (e.code == 'KeyF') toggleDoor('side');
}

function handleKeyUp(e) { if (e.code == 'KeyZ') state.flashlight = false; }

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
    document.getElementById('cam-label').innerText = `CAM 0${id} - ${CAM_NAMES[id]}`;
    document.querySelectorAll('.cam-btn').forEach(b => b.classList.toggle('active', b.dataset.cam == id));
    kitchenOverlay.classList.toggle('hidden', id != 3);
    document.getElementById('cam-img').style.display = (id == 3) ? 'none' : 'block';
}

function win() { alert("WIN! SCORE: " + currentScore); location.reload(); }
function confirmReset() { if (confirm("RESET BEST?")) { localStorage.setItem('fnaf_ucn_highscore', '0'); location.reload(); } }
function updateSensitivity(v) { state.sensitivity = parseFloat(v); document.getElementById('sens-val').innerText = v; }
function repairVentilation() { /* Stable placeholder */ }

initMenu();
