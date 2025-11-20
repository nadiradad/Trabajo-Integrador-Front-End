const hamburgerBtn = document.getElementById("hamburger-btn");
const closeIcon = document.querySelector(".close-icon");
const navbar = document.getElementById("navbar");

const toggle = () => {
  navbar.classList.toggle("is-open");
};

hamburgerBtn.addEventListener("click", toggle);
closeIcon.addEventListener("click", toggle);
