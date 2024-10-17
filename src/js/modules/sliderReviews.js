import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function sliderReviews() {
  if(document.querySelector('.reviews__slider')) {
    const swiper = new Swiper('.reviews__slider', {
      slidesPerView: 2.5,
      spaceBetween: 90,
      loopedSlides: 1,
      // loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".reviews__slider-next",
        prevEl: ".reviews__slider-prev",
      },
      // breakpoints: {
      //   320: {
      //       slidesPerView: 1.5,
      //       spaceBetween: 18,
      //   },
      //   768: {
      //     slidesPerView: 2.5,
      //     spaceBetween: 20
      // },
      //   1440: {
      //     slidesPerView: 4.5,
      //     spaceBetween: 40
      //   }
      // }
    });
  }
}
