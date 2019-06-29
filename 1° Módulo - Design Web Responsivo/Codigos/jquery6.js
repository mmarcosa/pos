"use strict"
$(document).ready(function(){
    
    $('#btnshow').click(function(){
        $('#box').slideDown(5000, 'linear'); //200 milissegundos
    });
    
    $('#btnhide').click(function(){
        $('#box').slideUp(2000, 'swing'); //600 milissegundos
    });
    
    $('#btntoggle').click(function(){
        $('#box').slideToggle(2000);
    });

    $('#btnAnimar').click(function(){
        $('#box').animate({
            width: '70%',
            opacity: 0.4,
            marginLeft: '3em'
        },2000); //600 milissegundos
    });
    
    $('#btnParar').click(function(){
        $('#box').stop(2000);
    });
    
    
});