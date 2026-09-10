// ============================================
// KOLAY DÜZENLEME ALANI
// ============================================

// Düğün tarihi ve saati.
// Örnek: 20 Aralık 2026, saat 19:00
const weddingDate = new Date("2026-12-20T19:00:00+03:00");

// ============================================
// GERİ SAYIM
// ============================================

const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const messageEl = document.getElementById("countdown-message");

function updateCountdown() {
  const now = new Date();
  const distance = weddingDate.getTime() - now.getTime();

  if (distance <= 0) {
    dayEl.textContent = "000";
    hourEl.textContent = "00";
    minuteEl.textContent = "00";
    secondEl.textContent = "00";
    messageEl.textContent = "Bugün bizim günümüz. 🤍";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  dayEl.textContent = String(days).padStart(3, "0");
  hourEl.textContent = String(hours).padStart(2, "0");
  minuteEl.textContent = String(minutes).padStart(2, "0");
  secondEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// FOTOĞRAF KONTROLÜ
// Fotoğraf dosyaları varsa placeholder gizlenir.
// ============================================

document.querySelectorAll(".photo").forEach((photo) => {
  const bg = getComputedStyle(photo).backgroundImage;
  const match = bg.match(/url\(["']?(.*?)["']?\)/);

  if (!match) return;

  const img = new Image();
  img.onload = () => photo.classList.add("has-image");
  img.src = match[1];
});

// ============================================
// SCROLL ANİMASYONU
// ============================================

const revealElements = document.querySelectorAll(".reveal");

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

revealElements.forEach((element) => observer.observe(element));
