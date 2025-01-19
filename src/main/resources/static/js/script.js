let timerInterval;
let timerSeconds = 0;

function startTimer() {
    stopTimer(); // 기존 타이머 중지
    timerInterval = setInterval(() => {
        timerSeconds++;
        const hours = String(Math.floor(timerSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(timerSeconds % 60).padStart(2, "0");
        document.getElementById("timer-display").textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    document.getElementById("timer-display").textContent = "00:00:00";
}

function setAlarm() {
    const alarmTime = document.getElementById("alarm-time").value;
    const alarmStatus = document.getElementById("alarm-status");
    if (!alarmTime) {
        alarmStatus.textContent = "Please set a valid alarm time.";
        return;
    }

    alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    const [alarmHours, alarmMinutes] = alarmTime.split(":").map(Number);

    const checkAlarm = setInterval(() => {
        const now = new Date();
        if (now.getHours() === alarmHours && now.getMinutes() === alarmMinutes) {
            clearInterval(checkAlarm);
            alert("⏰ Alarm ringing!");
            alarmStatus.textContent = "Alarm ringing!";
        }
    }, 1000);
}
