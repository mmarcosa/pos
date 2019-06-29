"use strict";
$(document).ready(function(){
   
    $('#btn').click(function(){
        
        $.ajax({
            
            url: 'pagina.html',
            method: 'GET',
            success: function(dados){
                $('#resultados').html(dados);
            }
            
        });
 
    });
    
});