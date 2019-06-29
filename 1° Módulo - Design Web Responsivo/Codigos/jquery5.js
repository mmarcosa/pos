"use strict"

$(document).ready(function(){
    
    $('#limpar').width(200);
    
    $('#box').click(function(){
      mensagem('Clique'); 
    })
    .dblclick(function(){
      mensagem('Duplo Clique'); 
    })
    .contextmenu(function(e){
        e.preventDefault();
        mensagem('Botão direito clicado');
    })
    .mouseover(function(e){
        mensagem('mouseover: ' + e.target.id);
    })
    .mouseenter(function(){
        mensagem('mouseenter');
    })
    .mouseout(function(e){
        mensagem('mouseout: ' + e.target.id);
    })
    .mouseleave(function(e){
        mensagem('mouseleave: ' + e.target.id);
    })
    .mousemove(function(e){
        console.dir(e);
        $('#box').html('(' + e.pageX + ', ' + e.pageY + ')')
    });
   
    $('#limpar').click( function(){
        $('#resultados').empty();
    })
    
    $('#nome').focus(function(e){
        $(this).css('background-color', 'yellow');
    })
    .blur(function(e){
        $(this).css('background-color', 'white');
    });
    
    
    
});

function mensagem(str){
    console.log(str);
    $('#resultados').append('<p>' + str +'</p>');
}