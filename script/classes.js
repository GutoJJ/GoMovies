class Ator{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Diretor{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Filme{

    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao, awards, btnDetalhes){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.awards=awards;
        this.btnDetalhes=null;
    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class","filme");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class","filme-img");
        imgCartaz.setAttribute("src",this.cartaz);

        let textFilmes = document.createElement("div");
        textFilmes.setAttribute("class","textFilmes");

        let tituloFilme = document.createElement("div");
        tituloFilme.setAttribute("class","tituloFilme");

        let cardTitulo = document.createElement("h1");
        cardTitulo.setAttribute("class","card-Titulo");

        let Info = document.createElement("div");
        Info.setAttribute("class","info");

        let cardAno = document.createElement("p");
        cardAno.setAttribute("class","card-ano");

        
        cardAno.appendChild(document.createTextNode(this.ano));
        cardTitulo.appendChild(document.createTextNode(this.titulo));



        card.appendChild(imgCartaz);
        card.appendChild(textFilmes);

        textFilmes.appendChild(tituloFilme);
        textFilmes.appendChild(Info);

        this.setBtnDetalhes();
        textFilmes.appendChild(this.getBtnDetalhes());

        tituloFilme.appendChild(cardTitulo);
        Info.appendChild(cardAno);
        return card;
    }

    setBtnDetalhes = () =>{
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.setAttribute("class","btnDetalhes");
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));

    }

    getBtnDetalhes = () => {
        return this.btnDetalhes
    }

    GetCardDetalhes = () => {
        console.log("O UNIVERSO CANTA PRA MIM!!!!");

        let detalheCard = document.createElement("div");
        detalheCard.setAttribute("class","detalheCard");
        
        let imgDetalheDiv = document.createElement("div");
        imgDetalheDiv.setAttribute("class","imgDetalheDiv");

        let detalheImg = document.createElement("img");
        detalheImg.setAttribute("class","detalheImg");
        detalheImg.setAttribute("src",this.cartaz);

        let tituloDetalhe = document.createElement("h1");
        tituloDetalhe.setAttribute("class","TituloDetalhe");
        tituloDetalhe.appendChild(document.createTextNode(this.titulo));

        let detalheText = document.createElement("div");
        detalheText.setAttribute("class","detalheText");

        let anoDetalhe = document.createElement("p");
        anoDetalhe.setAttribute("class","anoDetalhe");
        anoDetalhe.appendChild(document.createTextNode("Ano: "+this.ano));

        let generoDetalhe = document.createElement("p");
        generoDetalhe.setAttribute("class","generoDetalhe");
        generoDetalhe.appendChild(document.createTextNode("Gênero: "+this.genero));

        let duracaoDetalhe = document.createElement("p");
        duracaoDetalhe.setAttribute("class","duracaoDetalhe");
        duracaoDetalhe.appendChild(document.createTextNode("Duração: "+this.duracao));

        let diretorDetalhe = document.createElement("p");
        diretorDetalhe.setAttribute("class","diretorDetalhe");
        diretorDetalhe.appendChild(document.createTextNode("Direção: "+this.direcao));

        let atoresDetalhe = document.createElement("p");
        atoresDetalhe.setAttribute("class","atoresDetalhe");
        atoresDetalhe.appendChild(document.createTextNode("Elenco: "+this.elenco));

        let awardsDetalhe = document.createElement("p");
        awardsDetalhe.setAttribute("class","awardsDetalhe");
        awardsDetalhe.appendChild(document.createTextNode("Prêmios: "+this.awards));

        let avaliacaoDetalhe = document.createElement("p");
        avaliacaoDetalhe.setAttribute("class","avaliacaoDetalhe");
        avaliacaoDetalhe.appendChild(document.createTextNode("Avaliação: "+this.avaliacao));
        
        let plotDetalhe = document.createElement("p");
        plotDetalhe.setAttribute("class","plotDetalhe");
        plotDetalhe.appendChild(document.createTextNode("Sinopse: "+this.sinopse));

        listaFilmes.appendChild(detalheCard);

        imgDetalheDiv.appendChild(detalheImg);

        detalheCard.appendChild(imgDetalheDiv);
        detalheCard.appendChild(detalheText);

        detalheText.appendChild(tituloDetalhe);
        detalheText.appendChild(anoDetalhe);
        detalheText.appendChild(generoDetalhe);
        detalheText.appendChild(duracaoDetalhe);
        detalheText.appendChild(diretorDetalhe);
        detalheText.appendChild(atoresDetalhe);
        detalheText.appendChild(awardsDetalhe);
        detalheText.appendChild(avaliacaoDetalhe);
        detalheText.appendChild(plotDetalhe);
    }
    
}