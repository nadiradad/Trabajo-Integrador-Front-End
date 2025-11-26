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
let index = 0;

function showImage(newIndex) {
  images[index].classList.remove('active');
  index = newIndex;
  images[index].classList.add('active');
}

document.querySelectorAll('.arrow.left').forEach(btn => {
  btn.addEventListener('click', () => {
    let newIndex = (index - 1 + images.length) % images.length;
    showImage(newIndex);
  });
});

document.querySelectorAll('.arrow.right').forEach(btn => {
  btn.addEventListener('click', () => {
    let newIndex = (index + 1) % images.length;
    showImage(newIndex);
  });
});
