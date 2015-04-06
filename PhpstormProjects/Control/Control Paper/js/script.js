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

    //sliders
    $('#slider').rhinoslider({
        controlsMousewheel: false,
        controlsPlayPause: false,
        showBullets: 'always',
        changeBullets: 'before',
        showControls: 'always'
    });

    $('#slider2').rhinoslider({
        controlsMousewheel: false,
        controlsPlayPause: false,
        showBullets: 'always',
        changeBullets: 'before',
        showControls: 'never'
    });


    //dotdotdot
    $(document).ready(function() {
        $(".article").dotdotdot({
            after: "a.readmore"
        });
    });

    //datepicker
    $(function() {
        $( "#datepicker" ).datepicker();
    });


    //tabs
    $( "#tabs" ).tabs();




    //validation
    $('#login-password').focus(function(){
        $(this).val('');
    }).blur(function(){
        if ($(this).val().length<=5){
            $(this).css({border: '1px solid red'});
        }
        else
        {
            $(this).css({border: '1px solid green'});
        }
    });

    var error = true;
    var entry = $('.required-entry');
    $(entry).focus(function(){
        $(this).val('');
        $(this).css("color","#000");
    });
    entry.blur(function(){
        if ($(this).val() != ""){
            $(this).css({border: '1px solid green'});
            error = false;
        }
        else
        {
            $(this).css({border: '1px solid red'});
            error = true;
            $(this).tooltip({
                items: "[title]",
                content: function() {
                    var element = $( entry );
                    if ( element.is( "[title]" ) ) {
                        return element.attr( "title" );
                    }
                },
                position: {
                    my: "center bottom-20",
                    at: "center top",
                    using: function( position, feedback ) {
                        $( this ).css( position );
                        $( "<div>" )
                            .addClass( "tool-tip-show" )
                            .appendTo( this );
                    }
                }
            });
        }
    });

    var login = $('.validate-email');
    $(login).focus(function(){
        $(this).val('');
        $(this).css("color","#000");
    });
    login.blur(function () {
        login = $(this);
        var val = login.val();
        if (validateEmail(val) == true){
            $(login).css({border: '1px solid green'});
            error = false;
        }
        else{
            $(login).css({border: '1px solid red'});
            error = true;
            $(this).tooltip({
                items: "[title]",
                content: function() {
                    var element = $( login );
                    if ( element.is( "[title]" ) ) {
                        return element.attr( "title" );
                    }
                },
                position: {
                    my: "center bottom-20",
                    at: "center top",
                    using: function( position, feedback ) {
                        $( this ).css( position );
                        $( "<div>" )
                            .addClass( "tool-tip-show" )
                            .appendTo( this );
                    }
                }
            });
        }
    });


    //------
    $('#registration-submit').click(function(){
        if (error != true){
            alert( "Login correct!" );
        }
    });

    $('spam-sign').click(function(){
        if (error != true){
            alert( "You joined Newsletter!!" );
        }
    });

    $('#question-send').click(function(){
        if (error != true){
            alert( "We soon will have your question!!!" );
        }
    });
});

function validateEmail(elementValue){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}


