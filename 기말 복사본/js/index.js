$(document).ready(function(){

    var button_status = 0;

	$( ".l1" ).click( function() {
         if (button_status == 0) {
          $( ".l1" ).background_image('url','..img/lego_red.png')
          button_status = 1;
    } else  (button_status == 1) {
        $(".l1").background_image('url','..img/lego_blue.png')
    }
        button_status = 2;
    })  
})


