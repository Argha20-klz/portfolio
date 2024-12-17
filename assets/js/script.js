//navbar toggler button visibility

document
  .getElementById("navbar-toggler")
  .addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
  });

// navbar menu icon change code

const navbarToggleButton = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".menu-icon");

navbarToggleButton.addEventListener("click", function () {
  if (navbarToggleButton.classList.contains("clicked")) {
    navbarToggleButton.classList.remove("clicked");
    menuIcon.src = "assets/images/burger-bar.png";
  } else {
    navbarToggleButton.classList.add("clicked");
    menuIcon.src = "assets/images/cross.png";
  }
});

// navbar active function

const navLinks = document.querySelectorAll(".nav-link");

const handleNavClick = (event) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  event.currentTarget.classList.add("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", handleNavClick);
});

// progress bar

// Function to animate a single progress bar
function animateProgressBar(progressBar, targetValue) {
  const progressValue = progressBar.nextElementSibling;
  let currentValue = 0;

  const increment = setInterval(() => {
    if (currentValue >= targetValue) {
      clearInterval(increment);
    } else {
      currentValue++;
      progressBar.value = currentValue;
      progressValue.textContent = `${currentValue}%`;
    }
  }, 20); // Adjust interval speed as needed
}

// Set up Intersection Observer for all progress bars
function onScrollAnimateProgress() {
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetValue = progressBar.getAttribute("value");
          animateProgressBar(progressBar, targetValue);
          observer.unobserve(progressBar); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust threshold if necessary

  progressBars.forEach((progressBar) => observer.observe(progressBar));
}

// Initialize observer on page load
window.onload = onScrollAnimateProgress;
