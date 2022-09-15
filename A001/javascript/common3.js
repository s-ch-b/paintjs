$(document).ready(function(){
    $('.up').click(function(){
        $('.box01').slideUp(300);
    });

    $('.down').click(function(){
        $('.box01').slideDown(300);
    });

    $('.in').click(function(){
        $('.box02').fadeIn(300);
    });

    $('.out').click(function(){
        $('.box02').fadeOut(300);
    });
});