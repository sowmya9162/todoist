let countdown;
let isRunning = false;

document.getElementById('button1').addEventListener('click', () => {
    if (!isRunning) {
        const minutes = parseInt(document.getElementById('timeInput').value, 10);
        startTimer(minutes * 60);  // Convert minutes to seconds
    }
});

function startTimer(seconds) {
    const timerDisplay = document.getElementById('timer');
    let timeRemaining = seconds;

    isRunning = true;
    countdown = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            isRunning = false;
            alert("Time's up!");
        } else {
            timeRemaining--;
        }
    }, 1000);
}

