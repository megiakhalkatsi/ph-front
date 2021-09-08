



let correct = 0;



$('.goToPage1').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.tansatsmeliPage').attr('style', 'display: block')
})

$('.iDontWant1').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision1').attr('style', 'display: block')
})

$('.iDontWant55').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.hakerPage').attr('style', 'display: block')
})






$('.goToPage134').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.italianbank').attr('style', 'display: block')
})

$('.iDontWant2').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision2').attr('style', 'display: block')
})




$('.iDontWant3').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision3').attr('style', 'display: block')
})

$('.iDontWant33333').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision4').attr('style', 'display: block')
})


$('.goToPage1000').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.hakerPage2').attr('style', 'display: block')
})




$('.continue187987').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
})


$('.iDontWant2').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision2').attr('style', 'display: block')
})


$('.continue1').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body2').attr('style', 'display: block')
    console.log(correct)
})


$('.iDontWant2555').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
    console.log(correct)
})


$('.continue2').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
    console.log(correct)
})


$('.continue3').click(() => {
    document.querySelector('.game__result__container').classList.add('active') 
    document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
})



$('.resetGame').click(() => {
    correct = 0
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body1').attr('style', 'display: block')
})


$('.completGame').click(() => {
    correct = 0

    $('.mainBody').removeAttr('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    document.querySelector('.rightDecision3').setAttribute('style', 'display: none')
    document.querySelector('.game__modal-body1').setAttribute('style', 'display: block')

    window.location.reload();
})

$('.completGame2').click(() => {
    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})

$( "#successModalBtn" ).click(function() {
    $('.mainBody').removeAttr('style')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')

    if(correct === 3) {
        $('.successModal').attr('style', 'display: block; position: fixed; top: 0;left: 0;right: 0; bottom: 18px; width: 100%; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/3 კითხვა`
        $('.modal-body').attr('style', 'display: none')
        $('.successModal').attr('style', 'display: block')
    }
    
    if(correct < 3) {
        $('.failModal').attr('style', 'display: block; position: fixed; top: 0;left: 0;right: 0; bottom: 18px; width: 100%; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/3 კითხვა`
        $('.modal-body').attr('style', 'display: none')
        $('.failModal').attr('style', 'display: block')
    }
  });
  
  $( "#gameReset" ).click(function() {
      correct = 0
      $('.modal-body').attr('style', 'display: none')
      document.querySelector('.failModal').setAttribute('style', 'display: none')
      document.querySelector('.successModal').setAttribute('style', 'display: none')
      document.querySelector('.game__result__container').classList.remove('active')
      document.querySelector('.game__result__container').removeAttribute('style')
      $('.game__modal-body1').removeAttr('style')
  });