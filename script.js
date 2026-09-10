// Düğün tarihi: 09 Ekim 2026 Cuma, 19.30
const weddingDate = new Date("2026-10-09T19:30:00+03:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownMessage = document.getElementById("countdownMessage");

function updateCountdown() {
  const diff = weddingDate.getTime() - Date.now();

  if (diff <= 0) {
    daysEl.textContent = "000";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    countdownMessage.textContent = "Bugün bizim günümüz. 🤍";
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(3, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));

// Music controls
const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");
const musicButtonLarge = document.getElementById("musicButtonLarge");
const musicLabel = document.getElementById("musicLabel");

music.volume = 0.42;

async function toggleMusic() {
  if (music.paused) {
    try {
      await music.play();
      document.body.classList.add("music-playing");
      musicLabel.textContent = "Müziği Durdur";
      musicButton.setAttribute("aria-label", "Müziği durdur");
      musicButtonLarge.textContent = "❚❚ Müziği Durdur";
    } catch (error) {
      console.log("Tarayıcı sesli oynatmayı engelledi:", error);
    }
  } else {
    music.pause();
    document.body.classList.remove("music-playing");
    musicLabel.textContent = "Müziği Başlat";
    musicButton.setAttribute("aria-label", "Müziği başlat");
    musicButtonLarge.textContent = "♪ Müziği Başlat";
  }
}

musicButton.addEventListener("click", toggleMusic);
musicButtonLarge.addEventListener("click", toggleMusic);
