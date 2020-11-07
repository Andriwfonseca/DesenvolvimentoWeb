const { func } = require("prop-types");

function buscaCep(){
    let cepDigitado = document.getElementById('cepDigitado').value;
    cepDigitado = cepDigitado.replace(/[^\d]+/g,'');
    if (cepDigitado.length == 8){
        var cep = cepDigitado;

        var xhr = new XMLHttpRequest();
    xhr.open ("GET", "http://cep.la/"+cep, true);
    xhr.setRequestHeader ("Accept", "application/json");
    let resposta;


    xhr.onreadystatechange = function(){
    if((xhr.readyState == 4) && xhr.status == 200)
        resposta = JSON.parse( xhr.responseText); 
        console.log(xhr.responseText)
        let conteudo = document.querySelector("#conteudo");
        if (resposta != undefined){
            if (resposta.cep != undefined){
                conteudo.innerHTML = "";
                conteudo.innerHTML += "Cep: "+ resposta.cep+"<br/>";
                conteudo.innerHTML += "UF: "+ resposta.uf+"<br/>";
                conteudo.innerHTML += "Cidade: "+ resposta.cidade+"<br/>";
                conteudo.innerHTML += "Bairro: "+ resposta.bairro+"<br/>";
                conteudo.innerHTML += "Rua: "+ resposta.logradouro;
            }else{
                conteudo.innerHTML = "";
                conteudo.innerHTML = "Esse cep não existe!!!"
            }
            
        }
        
        
    };
    xhr.send (null);

    }else{
        document.querySelector("#conteudo").innerHTML = "Por favor insira um cep válido";
        
    }


    
}


