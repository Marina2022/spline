import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles


// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],
  direction: 'horizontal',
  // loop: true,

  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,

  breakpoints: {
    // mobile + tablet - 320-990
    // 320: {
    //   slidesPerView: 1
    // },
    // desktop >= 991
    768: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
