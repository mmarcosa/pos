"use sctrict";
$(document).ready(function(){
   
    $('#btn1').click(function(){
        $('p.para').css('background-color', '#5CBB5C');
    });
    
    $('#btn2').click(function(){
        $('p.para').css('background-color', '#d9534F');    
    });
    
    
    
    $('#p2').css('background-color', 'grey');
    
    
    $('#btn1').click(function(){
        $('p.para').each(function(i){
            if(i%2==0)
                $(this).css('background-color','#5CBB5C');
            else
                $(this).css('background-color','green');
        }) ;
    });
    
    
    
});