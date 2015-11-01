$(window).load(function(){

    var imgNumber = 1;

    function changeBackground() {

        if(imgNumber==1) {
            $('#tf-home').delay(6500).fadeTo(400, 0.4, function()
            {
                $(this).css('background-image', 'url(img/home3.jpg)');
            }).fadeTo(300, 1);
            imgNumber++;
        }
        /*else {if(imgNumber==2) {
            $('#tf-home').delay(6500).fadeTo(400, 0.4, function()
            {
                $(this).css('background-image', 'url(img/home3.jpg)');
            }).fadeTo(400, 1);
            imgNumber++;
        }*/ else {
            $('#tf-home').delay(6500).fadeTo(400, 0.4, function()
            {
                $(this).css('background-image', 'url(img/home1.jpg)');
            }).fadeTo(300, 1);
            imgNumber=1;
        }/*}*/

        setTimeout(changeBackground(),6500);
    }

    setTimeout(changeBackground(),6500);

});