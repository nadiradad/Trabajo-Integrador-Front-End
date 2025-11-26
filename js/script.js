const hamburgerBtn = document.getElementById("hamburger-btn");
const closeIcon = document.querySelector(".close-icon");
const navbar = document.getElementById("navbar");

const toggle = () => {
  navbar.classList.toggle("is-open");
};

hamburgerBtn.addEventListener("click", toggle);
closeIcon.addEventListener("click", toggle);
/* CARRUSEL */
const images = document.querySelectorAll('.carousel-img');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

document.querySelector('.arrow.right').addEventListener('click', nextImage);
document.querySelector('.arrow.left').addEventListener('click', prevImage);
