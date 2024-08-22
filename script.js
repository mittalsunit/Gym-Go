window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

const slider = document.querySelector('.explore__grid');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const visibleCards = 3;
const totalCards = slider.children.length;

let currentIndex = 0;
const maxIndex = totalCards - visibleCards;

nextButton.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * (52.5 / visibleCards)}%)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * (52.5 / visibleCards)}%)`;
  }
});

const reviewSlider = document.querySelector('.review__grid');
const reviewPrevButton = document.querySelector('.review .prev');
const reviewNextButton = document.querySelector('.review .next');
const reviewVisibleCards = 1;
const reviewTotalCards = reviewSlider.children.length;

let reviewCurrentIndex = 0;
const reviewMaxIndex = reviewTotalCards - reviewVisibleCards;

reviewNextButton.addEventListener('click', () => {
  if (reviewCurrentIndex < reviewMaxIndex) {
    reviewCurrentIndex++;
    reviewSlider.style.transform = `translateX(-${reviewCurrentIndex * (200 / visibleCards)}%)`;
  }
});

reviewPrevButton.addEventListener('click', () => {
  if (reviewCurrentIndex > 0) {
    reviewCurrentIndex--;
    reviewSlider.style.transform = `translateX(-${reviewCurrentIndex * (200 / visibleCards)}%)`;
  }
});