const texts = [
  "Hello 👋",      // English
  "ሰላም 👋",      // Amharic
  "مرحبا 👋",     // Arabic
  "Bonjour 👋",   // French
  "你好 👋"        // Chinese
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typed-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // pause before next word
  } else {
    setTimeout(type, 150); // typing speed
  }
}());

// Dark/Light Mode Toggle
const themeToggle = document.querySelector(".toggle-theme");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

// Scroll Reveal
function revealOnScroll() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 80; // trigger distance

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active"); // optional (re-animate on scroll back)
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger on load

// Show Back-to-Top with fade effect
window.addEventListener("scroll", function() {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
// Interactive Achievements Timeline
const items = document.querySelectorAll(".timeline-item");
const popup = document.getElementById("timelinePopup");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");

items.forEach(item => {
  item.addEventListener("click", () => {
    popupTitle.innerText = item.getAttribute("data-title");
    popupDesc.innerText = item.getAttribute("data-desc");
    popup.style.display = "block";
  });
});

function closePopup() {
  popup.style.display = "none";
}
// Auto-scroll for achievements timeline
const timeline = document.getElementById("achievementTimeline");
let scrollDirection = 1; // 1 = right, -1 = left

function autoScrollTimeline() {
  if (!timeline) return;

  // Scroll speed (px per step)
  timeline.scrollLeft += scrollDirection * 1;

  // Bounce back when reaching edges
  if (timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth) {
    scrollDirection = -1; // reverse
  } else if (timeline.scrollLeft <= 0) {
    scrollDirection = 1; // forward
  }
}