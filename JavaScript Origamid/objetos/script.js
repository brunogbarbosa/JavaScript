var area = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado
    },
}

var pessoa = {
    nomes: '',
    ps: function(nomes)  {
        return `Seu nome é ${nomes}`
    },
}

console.log(pessoa.ps('bruno'))

// EXERCICIOS

var inf = {
    nome: 'Bruno',
    sobrenome: 'Gonçalves',
    idade: 18,
    cidade: 'Brasília',
}

//-----------------------------//

var inf = {
    nome: '',
    sobrenome: '',
    nomeCompleto: function(nome, sobrenome) {
        return `${nome} ${sobrenome}` 
    }
}

console.log(inf.nomeCompleto('brunao', 'gonçalves'))

//-----------------------------//

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

console.log(carro)

//-----------------------------//

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,

    late: function(latir) {
        if(latir === 'Homem' && latir === 'homem') {
            return 'O cachorro latiu para você';
        } else {
            return 'Nada';
        }
            
    },
}

console.log(cachorro.late('muie'))