// Toggle mobile nav
document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('show');
});

// Simple form validation message
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thanks! I'll get back to you soon.";
  this.reset();
});

// Scroll animation
function revealOnScroll() {
  const elements = document.querySelectorAll('.animate');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Typing effect
const typedText = document.querySelector('.typed-text');
const words = ["Lorence", "a beginner", "not good at all"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChars = currentWord.substring(0, charIndex);

  typedText.textContent = currentChars;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(type, 800);
  }
}

type();

// Dark mode toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function () {
  nav.classList.toggle('show');

  // Add bounce animation
  navToggle.classList.add('animate');
  setTimeout(() => {
    navToggle.classList.remove('animate');
  }, 300);
});
