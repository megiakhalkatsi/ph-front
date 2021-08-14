

var index = 0;



$( function() {
    $('.page__content-col').attr('style', 'display: none;')
   $('.page__content-col')[index].attr('style', 'display: block;')
});

$(document).ready(function() {
    $('#downloadBtn').click(() => {
      window.print()
  });
});

$( "#nextStep" ).click(function() {
    index++
    
    if(index === 2) {
        $('#nextStep').attr('style', 'display: none')
        $('#completed').attr('style', 'display: block')
    }
    $('.page__content-col').attr('style', 'display: none;')
    $('.page__content-col')[index].setAttribute('style', 'display: block;')


});
  
  
$( "#prevStep" ).click(function() {
    index--
    $('.page__content-col').attr('style', 'display: none;')
   $('.page__content-col')[index].setAttribute('style', 'display: block;')

});