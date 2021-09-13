

var index = 0;



$( function() {
    $('.page__content-col2').attr('style', 'display: none;')
    $('.page__content-col2').removeClass('active')
    $('.page__content-col2')[index].setAttribute('style', 'display: block;')
    $('.page__content-col2')[index].classList.add('active')
});

$(document).ready(function() {
    $('#downloadBtn').click(() => {
        $.print(".page__content-col2.active .game__box__container");
  });
});

$( "#nextStep" ).click(function() {
    index++
    
    if(index === 2) {
        $('#nextStep').attr('style', 'display: none')
        $('#completed').attr('style', 'display: block')
    }
    $('.page__content-col2').attr('style', 'display: none;')
    $('.page__content-col2').removeClass('active')
    $('.page__content-col2')[index].setAttribute('style', 'display: block;')
    $('.page__content-col2')[index].classList.add('active')


});
  
  
$( "#prevStep" ).click(function() {
    index--
    $('.page__content-col2').attr('style', 'display: none;')
    $('.page__content-col2').removeClass('active')
   $('.page__content-col2')[index].setAttribute('style', 'display: block;')
   $('.page__content-col2')[index].classList.add('active')

});