
// variáveis
let valorInp; // valor do input armazenado em uma variável
let Dep = document.querySelector("#desaparecer"); // parte do site para desaparecer
let inp = document.querySelector(".inp");
let fav = document.querySelector("#favoritos");
let wrapper = document.querySelector(".wrapper");
let catalogo = document.querySelector("#catal");

function desaparecer(){
    Dep.style.visibility = "hidden"; 
    Dep.style.display = "none";
    fav.style.visibility = "hidden";
    fav.style.display = "none";
    inp.style.marginTop = "95px";
    wrapper.style.background = "#151515";
    catalogo.style.display = "grid";
    catalogo.style.visibility = "visible";
    window.scrollTo(0, 0);
}

// esconder
let catalogoBtn = document.querySelector("#catalogo").onclick = () => {
    desaparecer();
}

// pesquisa
document.querySelector(".inp").addEventListener('input', function (e) {
    valorInp = e.target.value; // pode ser querySelector aq
    desaparecer();
});

// ======================================================
let filmes;
//ativado quando apertar "enter"
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      desaparecer();
      if(inp.value.length > 0){
        filmes = new Array();
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=5861bcaf&s="+inp.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                //console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
                
            });
            listarFilmes(filmes);
        })
      }
      return false;
    }
});
let listaFilmes = document.querySelector("#catal");
let listarFilmes = async (filmes) => {
    
    listaFilmes.innerHTML = "";
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}


let detalhesFilme = async (id) => {
    listaFilmes.innerHTML= "";
    fetch("https://www.omdbapi.com/?apikey=5861bcaf&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        //console.log(resp);
        
        // instanciar objeto da classe filme
        let filme = new Filme (
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating,
            resp.Awards,
            null
        )
        //console.log(filme);
        
        filme.GetCardDetalhes();
        filme.getBtnFavoritos().onclick = () => {
            salvarFilme(filme.id);
        }
    });
    
}

let salvarFilme = (id) => {
    let filmesString = localStorage.getItem('filmesFavoritos');
    let filmesSave = [];

    try {
        filmesSave = JSON.parse(filmesString) || [];
    } catch (e) {
        console.error('Erro ao converter a string em JSON:', e);
    }

    if (!filmesSave.includes(id)) {
        filmesSave.push(id);
        console.log(filmesSave);
        filmesSave = JSON.stringify(filmesSave);
        localStorage.setItem('filmesFavoritos', filmesSave);
    } else {
        console.log("já tem");
    }
}

