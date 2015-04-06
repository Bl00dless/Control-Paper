/**
 * Created by r2d2 on 03.04.15.
 */
$(document).ready(function() {
    //menu
    $('.menubutt').click(function() {
        $('.menu').slideToggle();
    });
    //submenu
    $(".menu>ul>li").hover(function()
        {
            $(".submenu", this).slideDown(100);
        },
        function()
        {
            $(".submenu", this).slideUp(100);
        }
    );


    $('.video', this).hover(function()
        {
            $(".videoo", this).slideDown(100);
        },
        function()
        {
            $(".videoo", this).slideUp(100);
        }
    );

    //slider
    $('#slider').rhinoslider({
        controlsMousewheel: false,
        controlsPlayPause: false,
        showBullets: 'always',
        changeBullets: 'before',
        showControls: 'always'
    });


    //dotdotdot
    $(document).ready(function() {
        $(".article").dotdotdot({
            after: "a.readmore"
        });
    });
});
