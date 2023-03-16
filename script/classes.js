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

    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao, btnDetalhes){
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

        let btnDetalhes = document.createElement("button");
        btnDetalhes.setAttribute("class","btnDetalhes");
        btnDetalhes.setAttribute("id", this.id);
        btnDetalhes.appendChild(document.createTextNode("Detalhes"));

        cardAno.appendChild(document.createTextNode(this.ano));
        cardTitulo.appendChild(document.createTextNode(this.titulo));

        card.appendChild(imgCartaz);
        card.appendChild(textFilmes);

        textFilmes.appendChild(tituloFilme);
        textFilmes.appendChild(Info);
        textFilmes.appendChild(btnDetalhes);

        tituloFilme.appendChild(cardTitulo);
        Info.appendChild(cardAno);
        return card;
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes
    }
    
}