const lista_acao = "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1"
/*
- Originais Netflix
- Recomendados (trending)
- Em Alta (top rated)

*/


//var requisicao = `https://api.themoviedb.org/3/movie/${filmes}?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR`;

let ajax4 = new XMLHttpRequest();

ajax4.open("GET",lista_acao); //cria a requisicao

ajax4.responseType = "json";

ajax4.send();


ajax4.onreadystatechange = async function() { //chama esse metodo quando nossa requisicao sofre alguma alteracao durante o processamento
    //quando a requisicao for processada, verificamos se ela foi finalizada
    if (ajax4.readyState == 4) { //o codigo 4 informa que ela foi finalizada

        if (ajax4.status = 200){//o codigo 200 informa que a requisicao obteve sucesso no seu processamento4

            //agora faça alguma coisa
            let resposta = ajax4.response.results;
            console.log(resposta)
            //document.body.innerHTML += '<li>'+ resposta.title + "<br></li>";
            // document.body.innerHTML += resposta.poster_path + "<br>";
            for(let x = 0;x < resposta.length;x++){
                
                let filme = `<div class="lista-filmes" id="${(resposta[x].title) ? resposta[x].title : resposta[x].name }">
                            <div class="div-image">
                                <a href="https://www.themoviedb.org/movie/${resposta[x].id}?language=pt-BR"><img class="image" src="https://image.tmdb.org/t/p/w300${resposta[x].poster_path}"></a>
                            </div><!--div-image--> 
                            <div class="div-nome">
                                <a href="https://www.themoviedb.org/movie/${resposta[x].id}?language=pt-BR"><h4>${(resposta[x].title) ? resposta[x].title : resposta[x].name }</h4></a>
                            </div><!--div-nome--> 
                            </div>`
            let conteudo_listas = document.querySelector('#list-action');
            conteudo_listas.innerHTML += filme;
            }       
        }
        
    }
}
