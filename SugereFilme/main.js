const filmes = [{  //Importando o vetor de objetos
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
    "Genero": ["suspense", "aventura", "ficção cientifica"],
},
{
    "titulo": "District 9",
    "lancamento": 2009,
    "Genero": ["suspense", "drama", "ficção cientifica"],
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
    "Genero": ["aventura", "ação", "ficção cientifica"],
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
    "Genero": ["suspense", "aventura", "ficção cientifica"],
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
    "Genero": ["suspense", "drama"],
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
    "Genero": ["ação", "guerra", "história"],
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
    "Genero": ["ação", "ação", "aventura"],
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
    "Genero": ["ação", "drama", "infantil"],

},
{
    "titulo": "Rush",
    "lancamento": 2013,
    "Genero": ["ação", "drama", "história"],

},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
    "Genero": ["ação", "terror", "sobrenatural"],
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
    "Genero": ["ação", "aventura", "infantil"],
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
    "Genero": ["ação", "guerra", "aventura"],
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
    "Genero": ["ação", "aventura", "infantil"],
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
    "Genero": ["sátira", "comedia"],
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
    "Genero": ["ação", "aventura", "infantil"],
}];
atualizarFilmes(filmes); //Imprimindo os filmes na tela
const input= document.querySelector("#film"); //Criando a variavel

function atualizarFilmes (filmesAssistir){ //Criando a função para imprimir os filmes
    const listaFilme= document.querySelector("ul");
    const vetFilme= [];
    for(const film of filmesAssistir){
        const liFilme= document.createElement("li");
        liFilme.textContent= `${film.titulo} - ${film.lancamento}`;
        vetFilme.push(liFilme);
    }
    listaFilme.replaceChildren(...vetFilme);
}

input.addEventListener("keyup", ()=>{ //Adicionando o evento de teclado
    const letraFilme = input.value.toLowerCase();
    const filtroFilms = filmes.filter((film) =>{ //Filtrando os elementos
        if(film.Genero.includes(letraFilme)){ //Se o gênero for "true"
            return film.Genero.includes(letraFilme);
        }
        else if(film.titulo.toLowerCase().includes(letraFilme.toLowerCase())){ //Se o nome do filme for "true"
            return film.titulo.toLowerCase().includes(letraFilme.toLowerCase());
        }
    });
    atualizarFilmes(filtroFilms); //Chamando a função para imprimir os filmes na tela
});
