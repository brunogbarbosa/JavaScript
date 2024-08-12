function areaquadrado(lado) {
    return lado * lado;
}

console.log(areaquadrado(4))

function imc(peso, altura) {
    var imc = peso / (altura * altura); 
    return imc;
}

console.log(imc(70, 1.85))

function corfav(cor) {
    if(cor === 'azul') {
        return 'eu gosto do céu';
    } else if(cor === 'verde') {
        return 'eu gosto do mato';
    } else {
        return 'você não gosta de nada';
    }
}


/*function clicar() {
    console.log('Oi')
}

addEventListener('click', clicar)
*/

function idades(idade) {
    if(typeof idade !== 'number') {
        console.log('Por favor, digite sua idade.')
        
    } else if(idade <= 18) {
        return 'Você está na primeira idade.'

    } else if(idade > 18 && idade <= 59) { 
            return 'Você está na segunda idade';
    } else {
        return ('Você está na terceira idade.')
    }
}

console.log(idades(60));

function faltavisitar(paisesvisitados) {
    var totalpaises = 193;
    return `Ainda faltam visitar ${totalpaises - paisesvisitados} paises.`
}

console.log(faltavisitar(60))

var profissao = 'programador'

function dados() {
    var nome = 'bruno';
    var idade = 18;
    function outrosDados() {
        var endereco = 'Brasília';
        var idade = 19;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    } 
    return outrosDados();
}

console.log(dados());


// EXERCICIOS 



function verificar(verific) {
    if(!!verific === true) {
        return 'esse valor é verdadeiro'
    } else {
        return 'esse valor é falso'
    }
}

console.log(verificar(10))

//------------------------------//

function calculo(parametro) {
    return parametro * 4
}

console.log(calculo(5))

//------------------------------//

// function nomeCompleto(nome, sobrenome) {
   // return `Seu nome é ${nome}, e o seu sobrenome é ${sobrenome}`;
// }

// console.log(nomeCompleto('Bruno', 'Gonçalves'))

//------------------------------//

function par(numero) {
    if(numero % 2 === 0) {
        return 'esse numero é par'
    } else {
        return 'esse numero é impar.'
    }
}

console.log(par(4004))

//------------------------------//

function ret(dado) {
    return typeof(dado);
}

console.log(ret(19));

//------------------------------//

var nome = 'Bruno';
var sobrenome = 'Gonçalves';

    function nomeC() {
        console.log(nome, sobrenome)
    }

addEventListener('click', nomeC);

//------------------------------//

var totalpaises = 193;

function faltavisitar(paisesvisitados) {
    return `Ainda faltam visitar ${totalpaises - paisesvisitados} paises.`
} 

function jaVisitei(paisesvisitados) {
    return `Ja Visitei ${paisesvisitados} do total de ${totalpaises} paises.`
} 

console.log(faltavisitar(40));
console.log(jaVisitei(50));