
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
    console.log(correct)
})

$('.iDontWant2').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision2').attr('style', 'display: block')
    console.log(correct)
})




$('.iDontWant3').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision3').attr('style', 'display: block')

    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})

$('.iDontWant33333').click(() => {
    correct++
    $('.game__modal-body').attr('style', 'display: none')
    $('.rightDecision4').attr('style', 'display: block')

    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})


$('.goToPage1000').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.hakerPage2').attr('style', 'display: block')
    console.log(correct)
})




$('.continue187987').click(() => {
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body3').attr('style', 'display: block')
    console.log(correct)
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



$('.resetGame').click(() => {
    correct = 0
    $('.game__modal-body').attr('style', 'display: none')
    $('.game__modal-body1').attr('style', 'display: block')
    console.log(correct)
})


$('.completGame').click(() => {
    correct = 0

    document.querySelector('.mainBody').removeAttribute('style')
    document.querySelector('.failModal').setAttribute('style', 'display: none')
    document.querySelector('.successModal').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').classList.remove('active')
    document.querySelector('.rightDecision3').setAttribute('style', 'display: none')
    document.querySelector('.game__modal-body1').setAttribute('style', 'display: block')
})

$('.completGame2').click(() => {
    document.querySelector('.game__result__container').classList.add('active') 
      document.querySelector('.game__result__container').setAttribute('style', 'z-index: 111')
      console.log(correct)
})



$( "#successModalBtn" ).click(function() {
    document.querySelector('.mainBody').setAttribute('style', 'display: none')
    document.querySelector('.game__result__container').setAttribute('style', 'display: none')
    console.log(correct)

    if(correct === 3) {
        $('.successModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.successModal #correctAnswers').innerHTML = `${correct}/3 კითხვა`
    }
    
    if(correct < 3) {
        $('.failModal').attr('style', 'display: block; position: absolute; top: 0;left: 0;right: 0; z-index: 11111;')
        document.querySelector('.failModal #correctAnswers').innerHTML = `${correct}/3 კითხვა`
    }
  });


    
  $( "#gameReset" ).click(function() {
      correct = 0
      document.querySelector('.failModal').setAttribute('style', 'display: none')
      document.querySelector('.successModal').setAttribute('style', 'display: none')
      document.querySelector('.game__result__container').classList.remove('active')
      document.querySelector('.game__result__container').removeAttribute('style')
      document.querySelector('.game__modal-body1').setAttribute('style', 'display: block')
  });
