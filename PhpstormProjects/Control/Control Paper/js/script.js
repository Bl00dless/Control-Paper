/**
 * Created by r2d2 on 03.04.15.
 */
$(document).ready(function() {
    var menuflag =0;
    $('.menubutt').click(function() {
        if (menuflag == 0) {
            $('.menu').slideDown();
            menuflag = 1;
        }
        else
        {
            $('.menu').slideUp();
            menuflag=0;
        }

    })
});