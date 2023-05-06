const timer_text = document.querySelector('.TimerText');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');
const start_sound = new Audio('start.mp3');
const pause_sound = new Audio('pause.mp3');
const reset_sound = new Audio('reset.mp3');

let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', pause);
reset_btn.addEventListener('click', reset);

function timer() { 
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    timer_text.innerText = `${hrs}:${mins}:${secs}`;
    seconds++;
}

function start () {
    playSound();
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function pause () {
    pauseSound();
    clearInterval(interval);
    interval = null;
}

function reset () { 
    pause();
    resetSound();
    seconds = 0;
    timer_text.innerText = '00:00:00';
}

timer();

function playSound() { 
    start_sound.volume = 0.5;
    start_sound.play();
}
function pauseSound() {
    pause_sound.volume = 0.5;
    pause_sound.play();
}
function resetSound() { 
    pause_sound.volume = 0;
    reset_sound.volume = 0.5;
    reset_sound.play();
}