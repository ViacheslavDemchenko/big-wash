import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliderAbout() {
  if(document.querySelector('.about__slider')) {
    const swiper = new Swiper('.about__slider', {
      spaceBetween: 0,
      loopedSlides: 1,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".about__slider-next",
        prevEl: ".about__slider-prev",
      },
    });
  }
}