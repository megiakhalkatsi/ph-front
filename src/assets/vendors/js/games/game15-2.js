

const swiper = new Swiper('.swiper-container', { 
    loop: false, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, 
    simulateTouch: false,
  });
  
  
  var index = 0;
  var appendNumber = 1;
  
  
  let n = 0;
  let n2 = 0;
  
  $( function() {
  
  
  
      $( "#Rounded_Rectangle_1_copy_4_" ).click(function() {
          console.log('render....')
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"><img src="../assets/img/games/88-8.jpg" alt="image" class="swiper-slide-img"></div>');    
          swiper.slideNext(300)	
      });
      
      $( "#Rounded_Rectangle_1_copy_6_" ).click(function() {
          console.log('render....')
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"><img src="../assets/img/games/88-8.jpg" alt="image" class="swiper-slide-img"></div>');    
          swiper.slideNext(300)	
      });
      
      $( "#ელექტრონული_წერილის_დახურვა_xA0_Image" ).click(function() {
          console.log('render....')
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"><img src="../assets/img/games/88-8.jpg" alt="image" class="swiper-slide-img"></div>');    
          swiper.slideNext(300)	
      });
      
      $( ".ewoufhwibf" ).click(function() {
          console.log('render....')
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"><img src="../assets/img/games/88-8.jpg" alt="image" class="swiper-slide-img"></div>');    
          swiper.slideNext(300)	
      });
      
    
      $( "#Rounded_Rectangle_1_copy_5_" ).click(function() {
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"> <div class="relative"> <div class="btn1 cursor-pointer"> <img src="../assets/img/games/button-1.svg"/> </div><div class="btn2 cursor-pointer"> <img src="../assets/img/games/button-2.svg"/> </div><img src="../assets/img/games/84-23234.svg" alt="image" class="swiper-slide-img"> </div></div>');
          swiper.slideNext(300)	
      });
    
      $( "#ბმულზე_გადასვლა" ).click(function() {
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"> <div class="relative"> <div class="btn1 cursor-pointer"> <img src="../assets/img/games/button-1.svg"/> </div><div class="btn2 cursor-pointer"> <img src="../assets/img/games/button-2.svg"/> </div><img src="../assets/img/games/84-23234.svg" alt="image" class="swiper-slide-img"> </div></div>');
          swiper.slideNext(300)	
      });
    
      $( "#Rounded_Rectangle_1_copy_7_" ).click(function() {
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"> <div class="relative"> <div class="btn1 cursor-pointer"> <img src="../assets/img/games/button-1.svg"/> </div><div class="btn2 cursor-pointer"> <img src="../assets/img/games/button-2.svg"/> </div><img src="../assets/img/games/84-23234.svg" alt="image" class="swiper-slide-img"> </div></div>');
          swiper.slideNext(300)	
      });
      $( ".wiefhwfwefb" ).click(function() {
          swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="8"> <div class="relative"> <div class="btn1 cursor-pointer"> <img src="../assets/img/games/button-1.svg"/> </div><div class="btn2 cursor-pointer"> <img src="../assets/img/games/button-2.svg"/> </div><img src="../assets/img/games/84-23234.svg" alt="image" class="swiper-slide-img"> </div></div>');
          swiper.slideNext(300)	
      });
  
    
    
  });
  
  
  
  $(document).on( 'click', 'div.btn1', function(){
  
  
    if(n < 1) {
        n++
  
        $( ".btn1" ).click(function(e) {
            console.log('render....')
            swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="9"> <img src="../assets/img/games/12-12.jpg" alt="image" class="swiper-slide-img"> </div>');    
            swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="10"> <img src="../assets/img/games/13-13.jpg" alt="image" class="swiper-slide-img"> </div>');    
            swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="11"> <img src="../assets/img/games/14-14.jpg" alt="image" class="swiper-slide-img"> </div>');    
            swiper.slideNext(300)	
        });
  
        $( ".btn2" ).click(function(e) {
            console.log('render....')
            swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="9"> <img src="../assets/img/games/88-8.jpg" alt="image" class="swiper-slide-img"> </div>');    
            swiper.slideNext(300)	
        });
    }
  });
  
  
  $(document).on( 'click', 'div.btn2', function(){
  
  
    if(n < 1) {
        n++
  
        $( ".btn2" ).click(function(e) {
            swiper.appendSlide('<div class="swiper-slide" role="group" data-swiper-slide-index="9"> <img src="../assets/img/games/88-8.jpg" alt="image" class="swiper-slide-img"> </div>');    
            swiper.slideNext(300)	
        });
    }
  });