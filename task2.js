let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.display');
let int = null;
let lapCount = 1;

document.getElementById('startBtn').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00.00';
    document.querySelector('.laps').innerHTML = '';
    lapCount = 1;
});

document.getElementById('lapBtn').addEventListener('click', () => {
    let lapTime = timerRef.innerHTML;
    let lapItem = document.createElement('div');
    lapItem.classList.add('lap-item');
    lapItem.innerHTML = `<span>Lap ${lapCount++}</span>: ${lapTime}`;
    document.querySelector('.laps').prepend(lapItem);
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${h}:${m}:${s}.${ms}`;
}
