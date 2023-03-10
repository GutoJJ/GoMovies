
// variáveis
let valorInp; // valor do input armazenado em uma variável
let Dep = document.getElementById("desaparecer"); // parte do site para desaparecer
let inp = document.querySelector(".inp");
let fav = document.getElementById("favoritos");
let wrapper = document.querySelector(".wrapper");
let catalogo = document.getElementById("catal");

// pesquisa
document.querySelector(".inp").addEventListener('input', function (e) {
    valorInp = e.target.value; // pode ser querySelector aq
    console.log(valorInp);

    desaparecer();

    if(e.target.value==""){ // checar se tem caracteres no input
        retornar(); // puxa função para aparecer
    }
});

 // esconder
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

// fazer aparecer
function retornar(){
    document.querySelector(".inp").value = "";
    Dep.style.visibility = ""; // aparecer
    Dep.style.display = "";
    fav.style.visibility = "";
    fav.style.display = "";
    inp.style.marginTop = "";
    wrapper.style.background = "";
    catalogo.style.display = "";
    catalogo.style.visibility = "";
    window.scrollTo(0, 0);
}

