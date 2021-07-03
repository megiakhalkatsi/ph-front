
$(".game__box__bulletsList").focus(function () {
    if (document.getElementById('game__box__bulletsList').value === '') {
      document.getElementById('game__box__bulletsList').value += '• ';
    }
  });

  $(".game__box__bulletsList").keyup(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      document.getElementById('game__box__bulletsList').value += '• ' + getElementById('');
    }
    var txtval = document.getElementById('game__box__bulletsList').value;
    if (txtval.substr(txtval.length - 1) == '\n') {
      document.getElementById('game__box__bulletsList').value = txtval.substring(0, txtval.length - 1);
    }
  });



  $('.game__box__btn').click(function (e) {
    e.stopPropagation()
    $(this).addClass('hide');
    $(this).parent().addClass('active');
    $(this).prev('.game__box__list__container').addClass('active');
    $(this).prev('.game__box__list__container').children(".game__box__list").append('<li class="game__box__list__item game__box__item__text"></li>');
    $('.game__box__list__container').focus()
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".game__box__list__item") === false) {
      $('.game__box__btn').removeClass('hide');
    }
  });
  


  $(document).ready(function() {
      $('#downloadBtn').click(() => {
        window.print()
    });
});

