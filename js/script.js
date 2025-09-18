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



});
// Show Back-to-Top with fade effect
window.addEventListener("scroll", function() {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
