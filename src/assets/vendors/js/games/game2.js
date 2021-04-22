
var isiPad = (navigator.userAgent.match(/iPad/i) != null);

// is this an iPhone ?
var isiPhone = (navigator.userAgent.match(/iPhone/i) != null);

// is this an android ?
var isAndroid = (navigator.userAgent.match(/Android/i) != null);



$(function() {
    if((isiPad || isiPhone || isAndroid) && window.innerWidth <= 788 ) {
        $('.game__rotate__notification').attr('style', 'display: flex')

    } else if((isiPad || isiPhone || isAndroid) && window.innerWidth > 788) {
        $('.game__rotate__notification').attr('style', 'display: none')
    }

    $( ".clickableItem2" ).addClass('cursor-pointer')
});

$( window ).resize(function() {
    if((isiPad || isiPhone || isAndroid) && window.innerWidth <= 788 ) {
        $('.game__rotate__notification').attr('style', 'display: flex')

    } else if((isiPad || isiPhone || isAndroid) && window.innerWidth > 788) {
        $('.game__rotate__notification').attr('style', 'display: none')
    }
  });





$(function() {
    $( ".clickableItem2" ).addClass('cursor-pointer')
});


$( ".clickableItem2" ).click(function() {
    if(atampt <= 5) {
        if($(this).attr('style') == "opacity: 0" && atampt < 5) {
            $(this).attr('style', 'opacity: 1')
            atampt++
            
        } else if($(this).attr('style') == "opacity: 1") {
            $(this).attr('style', 'opacity: 0')
            atampt--

        } else {
            $('#notificationModal').modal('show');
        }
    } else {
        $('#notificationModal').modal('show');
    }
});


let atampt = 0;

function afterClick(element) {
    if(atampt <= 5) {
        $( ".clickableItem" ).each(function( index ) {
            if(element == $( ".clickableItem2" )[index].getAttribute('data-clickable')) {

                if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 0" && atampt < 5) {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 1')
                    atampt++
                    
                } else if($( ".clickableItem2" )[index].getAttribute('style') == "opacity: 1") {
                    $( ".clickableItem2" )[index].setAttribute('style', 'opacity: 0')
                    atampt--
    
                } else {
                    $('#notificationModal').modal('show');
                }
            }
        });
    } else {
        $('#notificationModal').modal('show');
    }
}

$( ".clickableItem" ).click(function() {
    afterClick($(this).attr('data-index'))
});

$( "#resetBtn" ).click(function() {
   atampt = 0
   $('.clickableItem2').attr('style', 'opacity: 0')
})
