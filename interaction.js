let itens = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]


criar_bloco(itens);
criar_bloco2(itens);

function criar_bloco(itens){

    for(i=0;i<5;i++)
    {
        let itens_section = document.getElementById("itens_section");


        let article = document.createElement("article");
        article.className = "itens_loja";

        let img = document.createElement('img');
        img.id = "img";
        img.src = itens[i].url_img;
        article.appendChild(img);

        let div = document.createElement("div");
        div.className = "div";
        article.appendChild(div);   

        let nome = document.createTextNode(itens[i].nome);
        div.appendChild(nome);

        let div2 = document.createElement("div");
        div2.className = "div2";
        article.appendChild(div2);

        let preco_nick = document.createTextNode("Preço");
        div2.appendChild(preco_nick);

        let div3 = document.createElement("div");
        div3.className = "div3";
        article.appendChild(div3);

        let preco = document.createTextNode(itens[i].preco);
        div3.appendChild(preco);

        let div4 = document.createElement("div");
        div4.className = "div4";
        article.appendChild(div4);

        let desc_nick = document.createTextNode("Descrição:");
        div4.appendChild(desc_nick);

        let div5 = document.createElement("div");
        div5.className = "div5";
        article.appendChild(div5);
            
        let desc = document.createTextNode(itens[i].descricao);
        div5.appendChild(desc);
                    
        itens_section.appendChild(article);
    
    }

}


function criar_bloco2(itens){
    for(i=5;i<8;i++)
    {

        let itens_section2 = document.getElementById("itens_section2");

        let article2 = document.createElement("article");
        article2.className = "itens_loja2";

        let img = document.createElement('img');
        img.id = "img";
        img.src = itens[i].url_img;
        article2.appendChild(img);

        let div = document.createElement("div");
        div.className = "div";
        article2.appendChild(div);   

        let nome = document.createTextNode(itens[i].nome);
        div.appendChild(nome);
    
        let div2 = document.createElement("div");
        div2.className = "div2";
        article2.appendChild(div2);

        let preco_nick = document.createTextNode("Preço");
        div2.appendChild(preco_nick);

        let div3 = document.createElement("div");
        div3.className = "div3";
        article2.appendChild(div3);

        let preco = document.createTextNode(itens[i].preco);
        div3.appendChild(preco);

        let div4 = document.createElement("div");
        div4.className = "div4";
        article2.appendChild(div4);

        let desc_nick = document.createTextNode("Descrição:");
        div4.appendChild(desc_nick);

        let div5 = document.createElement("div");
        div5.className = "div5";
        article2.appendChild(div5);

        let desc = document.createTextNode(itens[i].descricao);
        div5.appendChild(desc);

        itens_section2.appendChild(article2);
    }
}



