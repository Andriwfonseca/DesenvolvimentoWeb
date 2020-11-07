
//Alterar opacidade da divTopo ao rolar o scroll
window.onscroll = function () {
  if (divTopo.offsetTop > 60){
      divTopo.style.opacity = 0.95;
  }else{
      divTopo.style.opacity = 1;
  }
}
//Pesquisar apertando enter
function apertouEnter(e){
  if (e.keyCode == 13){
    pesquisar();
  }
  
}
//Compara qual url esta e vai para pagina de pesquisa
function pesquisar(){
  let url = window.location.pathname.toString();
  let urlPesquisa = "/C:/Users/filip/Desktop/Projeto%20Adiel%2022-09/lista-pesquisa.html";

  let busca = document.getElementById('campo-busca').value;
  //vai para pagina de lista-pesquisa
  //é salvo no localStorage para iniciar a pagina direto com a busca realizada em outras paginas
  if (url == urlPesquisa){
    localStorage.setItem("campoPesquisa",busca);
    mostrarPesquisa();
  }else{
    localStorage.setItem("campoPesquisa",busca);
    window.location.href = "lista-pesquisa.html";
    mostrarPesquisa();
  } 
}

function mostrarPesquisa(){
  let busca = localStorage.getItem("campoPesquisa");
  let lista = document.getElementsByClassName('lista-filmes');

  for(let i in lista){
    
    let id = lista[i].id;
    //deixa a busca tudo minusculo e retira os espaços
    let buscaFiltrada = juntarPalavra(busca.toLowerCase());
    
    if (id != undefined){
      let resultado = verificarBusca(buscaFiltrada,id);
      if (resultado){
        let idMovie = document.getElementById(id);
        mostrarDisplay(idMovie);
      }else{
        let idMovie = document.getElementById(id);
        esconderDisplay(idMovie);
      }
    }     
  }
}

function juntarPalavra(palavra){

  let array = palavra.split(' ');
  
  let juntar = array.join('');

  return juntar;
}
function verificarBusca(palavra,id){
  //vai verificar se tem a palavra digitada na id
  let resultado = id.includes(palavra);
  return resultado;
}
function esconderDisplay(elemento){
  elemento.style.display = "none";
}
function mostrarDisplay(elemento){
  elemento.style.display = "block";
}
