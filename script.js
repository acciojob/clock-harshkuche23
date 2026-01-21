//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    timer.innerText = now.toString();
}

// Initial call
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
