


var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
  loop: false, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }, 
  simulateTouch: false,
  slidesPerView: 1,
});


document.querySelector('#Rounded_Rectangle_1_copy_6_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide('<div class="swiper-slide"><img src="../assets/img/games/4-4.png" alt="image" class="swiper-slide-img"></div>');
  swiper.slideNext(300)	

});

document.querySelector('#Rounded_Rectangle_1_copy_9_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide('<div class="swiper-slide"><img src="../assets/img/games/4-4.png" alt="image" class="swiper-slide-img"></div>');
  swiper.slideNext(300)	

});

document.querySelector('#Rounded_Rectangle_1_copy_5_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide(['<div class="swiper-slide"><img src="../assets/img/games/5-5.png" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/6-6.png" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/7-7.png" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/8-8.png" alt="image" class="swiper-slide-img"></div>']);
  swiper.slideNext(300)	

});

document.querySelector('#Rounded_Rectangle_1_copy_8_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide(['<div class="swiper-slide"><img src="../assets/img/games/5-5.png" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/6-6.png" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/7-7.png" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/8-8.png" alt="image" class="swiper-slide-img"></div>']);
  swiper.slideNext(300)	

});
