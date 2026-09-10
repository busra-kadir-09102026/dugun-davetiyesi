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

// Yerel MP3 müzik kontrolleri
const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");
const musicButtonLarge = document.getElementById("musicButtonLarge");
const musicLabel = document.getElementById("musicLabel");

music.volume = 0.55;

function syncMusicButtons(isPlaying) {
  document.body.classList.toggle("music-playing", isPlaying);
  musicLabel.textContent = isPlaying ? "Müziği Durdur" : "Müziği Başlat";
  musicButton.setAttribute(
    "aria-label",
    isPlaying ? "Müziği durdur" : "Müziği başlat"
  );
  musicButtonLarge.textContent = isPlaying
    ? "❚❚ Müziği Durdur"
    : "♪ Müziği Başlat";
}

async function toggleMusic() {
  if (music.paused) {
    try {
      await music.play();
      syncMusicButtons(true);
    } catch (error) {
      console.log("Tarayıcı müziği başlatamadı:", error);
    }
  } else {
    music.pause();
    syncMusicButtons(false);
  }
}

musicButton.addEventListener("click", toggleMusic);
musicButtonLarge.addEventListener("click", toggleMusic);

music.addEventListener("play", () => syncMusicButtons(true));
music.addEventListener("pause", () => syncMusicButtons(false));
