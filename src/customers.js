import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
// import Swiper and modules styles


// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'horizontal',

  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', function (e) {

  swiper.slides.forEach(slide=>{
    const el = slide.querySelector('video')
      if (el){
        el.pause()
      }
  })

  const el = swiper.slides[swiper.activeIndex]



  el.querySelector('video').play()

});
