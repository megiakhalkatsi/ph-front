
var index = 0;
var attampt = 0;


$( function() {
   $('.game__box__container__title--text').attr('style', 'display: none;')
   $('.game__box__container__title--text')[index].setAttribute('style', 'display: block;')
});


$('.game__wishlist__img').on({
    'click': function () {
      var src = ($(this).attr('src'))
      if (src.includes("active.jpg")) {
          attampt--
          over = src.replace("active.jpg", ".jpg")
        } else {
            attampt++
            over = src.replace(".jpg", "active.jpg")
      }
      $(this).attr('src', over);
    }
  });


  $('.game__wishlist__item').click(function (e) {
    $(this).toggleClass('active');
  });


  $( "#nextStep" ).click(function() {
      if(attampt === 0) {
          $('.descript').text('არჩეული უნდა იყოს, მინიმუმ, 1 სურვილი/საჭიროება')
          $('#notificationModal').modal('show');

      } else {
          window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
      
          if(index === 1 && attampt > 16) {
              $('#notificationModal').modal('show');
              $('.descript').text('არჩეული უნდა იყოს, მაქსიმუმ, 16 სურვილი/საჭიროება')
          } else {
              index++
              if(index === 2) {
                  $('#nextStep').attr('style', 'display: none')
                  $('#completed').attr('style', 'display: block')
              }

              $('.page__content-col').attr('style', 'display: none;')
              $('.page__content-col')[index].setAttribute('style', 'display: block;')
          }

      }
    
});

  $( "#completed" ).click(function() {
    if(index === 2 && attampt > 8) {
        $('#notificationModal').modal('show');
        $('.descript').text('არჩეული უნდა იყოს, მაქსიმუმ, 8 სურვილი/საჭიროება')
    }  else {
        alert('Close Game...')
    }
    
});
  
  
$( "#prevStep" ).click(function() {
    index--
    
    $('.game__box__container__title--text').attr('style', 'display: none;')
    $('.game__box__container__title--text')[index].setAttribute('style', 'display: block;')

});