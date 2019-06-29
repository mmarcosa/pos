function carregaDados(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        /* 
        readyState
        0 - requisição não foi iniciada
        1 - conexão com o servidor estabelecida
        2 - requisição recebida
        3 - requisição em processamento
        4 - resposta pronta
        
        
        status
        200 - resposta OK
        404 - página/url não foi encontrada
        */
        
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById('dados').innerHTML = formata(xhr.responseText);
        }

    }
    
    xhr.open("GET", "produtos.json", true);
    xhr.send();
    
}


function formata(strDados){
    
    var objDados = JSON.parse(strDados);
    var linhasTabela = '';
    
    for(lp of objDados['lista de produtos']) {
        
        linhasTabela += '<tr><td>' + lp['código']+
        '</td><td>'+lp['nome']+
        '</td><td>'+lp['preço']+'</td></tr>';
    }
    return linhasTabela;
}