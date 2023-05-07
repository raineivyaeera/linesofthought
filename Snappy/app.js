const header_text = document.querySelector('.header_text');
const timer_text = document.querySelector('.TimerText'); 
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');
const left_btn = document.getElementById('arrow_back');
const right_btn = document.getElementById('arrow_forward');
const wrapper = document.querySelector('.WRAPPER');

const start_sound = new Audio('start.mp3');
const pause_sound = new Audio('pause.mp3');
const reset_sound = new Audio('reset.mp3');
const end_sound = new Audio('end.mp3');

let seconds = 0;
let interval = null;

let mode = 0;

function timer() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    timer_text.innerText = `${hrs}:${mins}:${secs}`;

    // Call Correct Timer Function
    if(mode == 0) { seconds++; }
    if(mode == 1) { 
        seconds--; 
        if(seconds < 0) {
            endSound();
            calcMode();
        }
    }
    if(mode == 2) { 
        seconds--; 
        if(seconds < 0) {
            endSound();
            calcMode();
        }
    }
    if(mode == 3) { 
        seconds--; 
        if(seconds < 0) {
            endSound();
            calcMode();
        }
    }
}

function start() {
    playSound();
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}
function pause() {
    pauseSound();
    clearInterval(interval);
    interval = null;
}
function reset() {
    calcMode();
    pause();
    resetSound();
}

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
function endSound() {
    end_sound.volume = 0.55;
    let randnum = Math.ceil(Math.random() * 2);
    end_sound.playbackRate = randnum;
    end_sound.play();
}

function nextMode() {
    mode += 1;
    if(mode > 3) { mode = 0; }
    calcMode();
}
function lastMode() {
    mode -= 1;
    if(mode < 0) { mode = 3; }
    calcMode();
}
function calcMode() {
    switch (mode) {
        case 0:
            seconds = 0;
            header_text.innerText = 'Snappy';
            wrapper.style.borderColor = '#9b111e';
            timer_text.style.backgroundColor = '#9b111e';
            start_btn.style.borderColor = '#9b111e';
            pause_btn.style.borderColor = '#9b111e';
            reset_btn.style.borderColor = '#9b111e';
            timer();
            pause();
            pause_sound.volume = 0;
            break;
        case 1:
            seconds = 3120;
            header_text.innerText = 'Quartz';
            wrapper.style.borderColor = '#51414F';
            timer_text.style.backgroundColor = '#51414F';
            start_btn.style.borderColor = '#51414F';
            pause_btn.style.borderColor = '#51414F';
            reset_btn.style.borderColor = '#51414F';
            timer();
            pause();
            pause_sound.volume = 0;
            break;
        case 2:
            seconds = 600;
            header_text.innerText = 'Salvo';
            wrapper.style.borderColor = '#003cff';
            timer_text.style.backgroundColor = '#003cff';
            start_btn.style.borderColor = '#003cff';
            pause_btn.style.borderColor = '#003cff';
            reset_btn.style.borderColor = '#003cff';
            timer();
            pause();
            pause_sound.volume = 0;
            break;   
        case 3:
            seconds = 1500;
            header_text.innerText = 'Pomodoro';
            wrapper.style.borderColor = '#740a13';
            timer_text.style.backgroundColor = '#740a13';
            start_btn.style.borderColor = '#740a13';
            pause_btn.style.borderColor = '#740a13';
            reset_btn.style.borderColor = '#740a13';
            timer();
            pause();
            pause_sound.volume = 0;
            break; 
    }
}
timer();