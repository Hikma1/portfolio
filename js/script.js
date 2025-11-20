const words = [
  "السلام عليكم 👋",        // Arabic
  "Hello there 👋",         // English
  "Bonjour 👋",             // French
  "ሰላም እንዴት ነሽ 👋",      // Amharic
  "你好 👋",                 // Chinese
];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];
  typingElement.textContent = currentWord.slice(0, charIndex);

  charIndex++;

  if (charIndex <= currentWord.length) {
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(() => {
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeEffect();
    }, 1200);
  }
}

typeEffect();