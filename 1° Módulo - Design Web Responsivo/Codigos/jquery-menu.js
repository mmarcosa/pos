"use sctrict";
$(document).ready(function(){
    
    $('#box').contextmenu(function(e){
        
        e.preventDefault();
        
        $('#menuContexto').toggle('fast').css({
            top: e.pageY + 'px',
            left: e.pageX + 'px'
        })
        .mousedown(function(e){
            e.stopPropagation();
        })
        .click(function(e){
            $('#menuContexto').hide('fast');
        })
        ;
        
        
        $('#menuContexto button').click(function(e){
            switch($(this).attr('data-menu')){
                case 'cut':
                    $('#box').html('Recortar');
                    break;
                case 'copy':
                    $('#box').html('Copiar');
                    break;
                case 'paste':
                    $('#box').html('Colar');
                    break;
            }
        })
        
        
        $(document)
        .contextmenu(function(e){
            e.preventDefault();
        })
        .mousedown(function(e){
            if(e.target)
            $('#menuContexto').hide('fast');
        });
    });
});