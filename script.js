// script.js

// =============================
// BLOCK RIGHT CLICK
// =============================

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// =============================
// BLOCK REFRESH
// =============================

document.addEventListener("keydown", function(e) {

  if (e.key === "F5") {
    e.preventDefault();
  }

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "r") {
    e.preventDefault();
  }

});

// =============================
// TIMER DURATION
// =============================

const TIMER_DURATION = (1 * 60 * 60) + (5 * 60);

// =============================
// TIMER STORAGE
// =============================

let endTime = localStorage.getItem("panicAttack04EndTime");

if (!endTime) {

  endTime = new Date().getTime() + TIMER_DURATION * 1000;

  localStorage.setItem("panicAttack04EndTime", endTime);
}

// =============================
// TIMER FUNCTION
// =============================

function updateTimer() {

  const now = new Date().getTime();

  const distance = endTime - now;

  const timer = document.getElementById("timer");

  const submitBtn = document.getElementById("submitBtn");

  const timeUpMessage = document.getElementById("timeUpMessage");

  // =============================
  // TIME FINISHED
  // =============================

  if (distance <= 0) {

    timer.innerHTML = "00:00:00";

    timeUpMessage.style.display = "block";

    submitBtn.classList.add("disabled-btn");

    submitBtn.removeAttribute("href");

    document.body.classList.add("exam-ended");

    return;
  }

  // =============================
  // TIME CALCULATIONS
  // =============================

  const hours = Math.floor(distance / (1000 * 60 * 60));

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  // =============================
  // DISPLAY TIMER
  // =============================

  timer.innerHTML =
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0');
}

// =============================
// START TIMER
// =============================

setInterval(updateTimer, 1000);

updateTimer();