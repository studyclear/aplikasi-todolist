// ===== Quotes =====
const quotes = [
  "Langkah kecil hari ini membentuk masa depanmu.",
  "Konsistensi lebih penting dari kesempurnaan.",
  "Satu tugas selesai lebih baik daripada seribu rencana.",
  "Fokus pada progres, bukan kecepatan.",
];
document.getElementById("dailyQuote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// ===== To-Do List =====
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="deleteTask(this)">❌</button>`;
  li.addEventListener("click", () => li.classList.toggle("completed"));
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

// ===== Focus Timer =====
let timer;
let timeLeft = 25 * 60; // 25 minutes
const display = document.getElementById("timerDisplay");

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timer);
      alert("Waktu fokus selesai! Saatnya istirahat.");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTimer();
}

updateTimer();

// ===== Reflection =====
function saveReflection() {
  const text = document.getElementById("reflectionInput").value.trim();
  if (text === "") return alert("Isi refleksi terlebih dahulu.");
  localStorage.setItem("reflection", text);
  document.getElementById("savedReflection").innerText = "Refleksi tersimpan: " + text;
  document.getElementById("reflectionInput").value = "";
}

// Load reflection if exists
const saved = localStorage.getItem("reflection");
if (saved) {
  document.getElementById("savedReflection").innerText = "Refleksi tersimpan: " + saved;
}
