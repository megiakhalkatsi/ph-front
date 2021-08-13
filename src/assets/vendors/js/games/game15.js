

var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
  loop: false, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }, 
  slidesPerView: 'auto',
  simulateTouch: false,
//   slidesPerView: 1,
});


document.querySelector('#Rounded_Rectangle_1_copy_6_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide('<div class="swiper-slide"><img src="../assets/img/games/4-4.jpg" alt="image" class="swiper-slide-img"></div>');
  swiper.slideNext(300)	

});
document.querySelector('#_x35_0_ლარამდე_თანხის_ჩამოჭრის_შემთხვევაში_პინკოდის_შეყვანა_არ_არის').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide('<div class="swiper-slide"><img src="../assets/img/games/4-4.jpg" alt="image" class="swiper-slide-img"></div>');
  swiper.slideNext(300)	

});

document.querySelector('#არ_გადასცეთ_საბანკო_ბარათი_ოპერატორს_1_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide('<div class="swiper-slide"><img src="../assets/img/games/4-4.jpg" alt="image" class="swiper-slide-img"></div>');
  swiper.slideNext(300)	

});

document.querySelector('#Rounded_Rectangle_1_copy_9_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide('<div class="swiper-slide"><img src="../assets/img/games/4-4.jpg" alt="image" class="swiper-slide-img"></div>');
  swiper.slideNext(300)	

});

document.querySelector('#Rounded_Rectangle_1_copy_5_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide(['<div class="swiper-slide"><img src="../assets/img/games/5-5.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/6-6.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/7-7.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/8-8.jpg" alt="image" class="swiper-slide-img"></div>']);
  swiper.slideNext(300)	

});

document.querySelector('#_x35_0_ლარამდე_თანხის_ჩამოჭრის_შემთხვევაში_პინკოდის_შეყვანა_არ_არის_2_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide(['<div class="swiper-slide"><img src="../assets/img/games/5-5.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/6-6.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/7-7.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/8-8.jpg" alt="image" class="swiper-slide-img"></div>']);
  swiper.slideNext(300)	

});

document.querySelector('#Rounded_Rectangle_1_copy_8_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide(['<div class="swiper-slide"><img src="../assets/img/games/5-5.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/6-6.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/7-7.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/8-8.jpg" alt="image" class="swiper-slide-img"></div>']);
  swiper.slideNext(300)	

});

document.querySelector('#გადაეცით_საბანკო_ბარათი_ოპერატორს_1_').addEventListener('click', function(e) {
  e.preventDefault();

  swiper.appendSlide(['<div class="swiper-slide"><img src="../assets/img/games/5-5.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/6-6.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/7-7.jpg" alt="image" class="swiper-slide-img"></div>', '<div class="swiper-slide"><img src="../assets/img/games/8-8.jpg" alt="image" class="swiper-slide-img"></div>']);
  swiper.slideNext(300)	

});


swiper.on('slideChange', function() {
    var realIndex = swiper.realIndex;

    if(realIndex === 2) {
        $('.swiper-button-next').attr('style', 'display: none')
    } else {
        $('.swiper-button-next').removeAttr('style')

        if($('.swiper-button-next').hasClass('swiper-button-disabled')) {
            document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled')

            if($('.swiper-button-next').attr('aria-disabled') === "true") {
                $('.swiper-button-next').attr('aria-disabled', false)

                $('.swiper-button-next').click(function(e) {
                    console.log('rennder...')
                    window.location.reload()
                })
            }

        }  
    }


  });


