const main = document.querySelector('main');
const button = document.querySelector('button');
const author = document.querySelector('.author');
const joke = document.querySelector('.joke');
const punchline = document.querySelector('.punchline');
const jokeList = [
  {
    author: 'Gabriel Guerreiro',
    joke: 'O que diz uma galinha para a outra?',
    punchline: 'Choca aí.'
  },
  {
    author: 'Diogo Albuquerque',
    joke: 'Onde é que o camelo corta o cabelo?',
    punchline: 'Num cameleireiro!'
  },
  {
    author: 'Teresa Archer',
    joke: 'O que diz uma velhota quando tira o soutien?',
    punchline: 'Que chão tão frio.'
  },
  {
    author: 'Teresa Archer',
    joke: 'O que é que diz um escorrega para outro escorrega?',
    punchline: 'Os anus passam a correr!'
  },
  {
    author: 'Filipe SJ',
    joke: 'O que é que a Margarida diz ao Donald antes de ir dormir?',
    punchline: 'Soube a Pato.'
  },
  {
    author: 'Ricardo Carvalho',
    joke: 'Queres chá verde ou preto?',
    punchline: 'Pode ser!'
  },
  {
    author: 'Jorge Chagas',
    joke: 'Uma senhora e a filha estão a dormir no corredor. Que horas são?',
    punchline: 'Falta um quarto para as duas.'
  },
  {
    author: 'Filipe SJ',
    joke: 'Qual é a rede móvel de qualquer bom Jedi?',
    punchline: 'YODAfone.'
  },
  {
    author: 'André Dargains',
    joke: 'O que é  uma fofoca?',
    punchline: 'É um bibicho.'
  },
  {
    author: 'João Gomes',
    joke: 'O que faz uma hortaliça surda?',
    punchline: 'Finge couve.'
  },
  {
    author: 'Martim Calado',
    joke: 'O que é que um astronauta diz à mulher?',
    punchline: 'Vou a... Marte para sempre!'
  },
  {
    author: 'João Gomes',
    joke: 'O que é um submarino com rodas?',
    punchline: 'Um Car-Naval.'
  },
  {
    author: 'João Gomes',
    joke: 'Qual é a sobremesa preferida do Thor?',
    punchline: 'A THORta de Limão.'
  },
  {
    author: 'João Gomes',
    joke: 'Qual é o gelado favorito de qualquer feiticeira?',
    punchline: 'O MAGO-NU.'
  },
  {
    author: 'Filipe SJ',
    joke: 'O que é que os matemáticos mais apreciam numa mulher?',
    punchline: 'O seu π π.'
  },
  {
    author: 'Martim Calado',
    joke: 'Qual é o filme da disney preferido de uma prostituta?',
    punchline: 'A chupada era a lei.'
  },
  {
    author: 'Martim Calado',
    joke: 'Como se chama um cão sem patas traseiras e tomates de ferro?',
    punchline: 'Faísca.'
  },
  {
    author: 'Martim Calado',
    joke: 'O que é que um esquerdino nunca poderá fazer?',
    punchline: 'Exercer direito.'
  },
  {
    author: 'Filipe SJ',
    joke: 'Qual é a côr mais pessoal?',
    punchline: 'O azul-cueca.'
  },
  {
    author: 'Gabriel Guerreiro',
    joke: 'A que é que cheira um e-mail com anexo?',
    punchline: 'A Fi-cheiro!'
  },
  {
    author: 'Edmundo Ramos',
    joke: 'para onde vão os dentistas quando morrem?',
    punchline: 'Para o céu da boca.'
  },
{
    author: 'Catarina Carrola',
    joke: 'Porque é que o panado se divorciou?',
    punchline: 'Porque a mulher não prestava panada.'
  },
{
    author: 'Martim Calado',
    joke: 'Num date: Gostas de andy warhol?',
    punchline: 'É que gostava de Pop-art toda.'
  },
];
const lastResults = [];

const getNewJoke = () => {
  main.classList.add('loading')
  let random;
  do {
    random = Math.floor(Math.random() * jokeList.length);
  } while (lastResults.includes(random));
  if (lastResults.length < 3) lastResults.push(random)
  else {
    lastResults.shift();
    lastResults.push(random);
  }
  setTimeout(() => {
    author.innerText = jokeList[random].author;
    joke.innerText = jokeList[random].joke;
    punchline.innerText = jokeList[random].punchline;
    main.classList.remove('loading')
  },400)
}

const onButtonClick = event => {
  getNewJoke();
  let target = event.currentTarget;
  target.classList.add("bounce");
  setTimeout(() => {
    target.classList.remove("bounce");
  }, 1000);
}

button.addEventListener('click', onButtonClick);


getNewJoke();
