var res = document.querySelector('.res');
var botaosim = document.querySelector('.botaosim')
var botaofalso = document.querySelector('.botaofalso')

botaosim.addEventListener('click', function() {
    res.innerHTML = ('<p> Você clicou no sim</p>')
}) 

botaofalso.addEventListener('click', function() {
    res.innerHTML = ('<p> Você clicou no não</p>')
}) 

// EXEERCICOS 

var idade = 23;
var parente = 22;


if(idade > parente) {
    console.log('Você é mais velho');
} else if (idade == parente) {
    console.log('Vocês tem a mesma idade')  
} else {
    console.log('Você é mais novo')
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

var nome = 'andre'
var idade = 28;
var possuidoutorado = false
var dinheironaconta = 0
var empregofuturo;

console.log(!!nome, !!idade, !!possuidoutorado, !!dinheironaconta, !!empregofuturo)

var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil é maior que a china');
} else {
    console.log('China é maior que o Brasil');
}

if(('Gato' === 'gato') && (5 - 2)) {
    console.log('Verdadeiro') ;
} else {
    console.log('Falso');
}

var cor = 'verde';

switch(cor) {
    case 'verde':
        console.log('olhe para o mato'); 
    break;  
    case 'azul':
        console.log('Olhe para o céu');
    break;
    case 'amarelo':
        console.log('Olhe para o sol');
    break;
}