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

// YouTube music controls
const musicButton = document.getElementById("musicButton");
const musicButtonLarge = document.getElementById("musicButtonLarge");
const musicCloseButton = document.getElementById("musicCloseButton");
const musicPlayerCard = document.getElementById("musicPlayerCard");
const youtubeMusicPlayer = document.getElementById("youtubeMusicPlayer");
const musicLabel = document.getElementById("musicLabel");

const youtubeMusicUrl =
  "https://www.youtube-nocookie.com/embed/LPG_WUgHbis" +
  "?autoplay=1&loop=1&playlist=LPG_WUgHbis&controls=1&rel=0";

function openMusicPlayer() {
  if (!youtubeMusicPlayer.src) youtubeMusicPlayer.src = youtubeMusicUrl;
  musicPlayerCard.classList.add("open");
  musicPlayerCard.setAttribute("aria-hidden", "false");
  musicLabel.textContent = "Müzik Açık";
  musicButtonLarge.textContent = "♪ Müzik Çalıyor";
}

function closeMusicPlayer() {
  musicPlayerCard.classList.remove("open");
  musicPlayerCard.setAttribute("aria-hidden", "true");
  youtubeMusicPlayer.src = "";
  musicLabel.textContent = "Müziği Başlat";
  musicButtonLarge.textContent = "♪ Müziği Başlat";
}

musicButton.addEventListener("click", openMusicPlayer);
musicButtonLarge.addEventListener("click", openMusicPlayer);
musicCloseButton.addEventListener("click", closeMusicPlayer);
