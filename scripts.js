document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const overlayMenu = document.querySelector(".overlay-menu");
  const closeIcon = document.querySelector(".close-icon");

  // Show overlay menu when menu icon is clicked
  menuIcon.addEventListener("click", function () {
    overlayMenu.classList.add("active");
  });

  // Hide overlay menu when close icon is clicked
  closeIcon.addEventListener("click", function () {
    overlayMenu.classList.remove("active");
  });

  // Optionally, you can hide the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !overlayMenu.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      overlayMenu.classList.remove("active");
    }
  });

  // Intersection Observer for animations
  const animatedSection = document.querySelector(".animated-section");
  const imageContainer = document.querySelector(".image-container");
  const textContainer = document.querySelector(".text-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageContainer.style.opacity = "1";
          imageContainer.style.transform = "translateX(0)";
          textContainer.style.opacity = "1";
          textContainer.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once in view
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(animatedSection);
});

// Select all elements that should animate
const animateTextElements = document.querySelectorAll(".animate-text");

// Intersection Observer for triggering animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

// Observe each element
animateTextElements.forEach((el) => {
  observer.observe(el);
});
// Detect when section is in view
window.addEventListener("scroll", function () {
  const section = document.querySelector(".gallery-section");
  const sectionPosition = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    section.classList.add("in-view");
  }
});

// Slider functionality (already provided)
let currentIndex = 0;

function slideRight() {
  const slider = document.querySelector(".image-slider");
  const totalImages = document.querySelectorAll(".gallery-image").length;
  currentIndex = (currentIndex + 1) % totalImages;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function slideLeft() {
  const slider = document.querySelector(".image-slider");
  const totalImages = document.querySelectorAll(".gallery-image").length;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
