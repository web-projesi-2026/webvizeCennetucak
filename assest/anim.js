const typingElement = document.getElementById("typing");

if (typingElement) {
  const words = [
    "Yazılım Geliştirici",
    "Web Tasarımcı",
    
    "Problem Çözücü"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typingElement.textContent = currentText;

    if (!isDeleting) {
      charIndex++;
      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
      }
    }

    setTimeout(typeEffect, isDeleting ? 45 : 90);
  }

  typeEffect();
}

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 8 + 6}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
  }
}
