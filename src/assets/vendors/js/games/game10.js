

var index = 0;



$( function() {
    $('.page__content-col').attr('style', 'display: none;')
    $('.page__content-col').removeClass('active')
    $('.page__content-col')[index].setAttribute('style', 'display: block;')
    $('.page__content-col')[index].classList.add('active')
});

$(document).ready(function() {
    $('#downloadBtn').click(() => {
        $.print(".page__content-col.active .game__box__container");
  });
});

$( "#nextStep" ).click(function() {
    index++
    
    if(index === 2) {
        $('#nextStep').attr('style', 'display: none')
        $('#completed').attr('style', 'display: block')
    }
    $('.page__content-col').attr('style', 'display: none;')
    $('.page__content-col').removeClass('active')
    $('.page__content-col')[index].setAttribute('style', 'display: block;')
    $('.page__content-col')[index].classList.add('active')


});
  
  
$( "#prevStep" ).click(function() {
    index--
    $('.page__content-col').attr('style', 'display: none;')
    $('.page__content-col').removeClass('active')
   $('.page__content-col')[index].setAttribute('style', 'display: block;')
   $('.page__content-col')[index].classList.add('active')

});