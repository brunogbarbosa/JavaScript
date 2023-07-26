function contar() {
    var ini = document.querySelector ('#txti');
    var fim = document.querySelector ('#txtf');
    var passo = document.querySelector ('#txtp');
    var res = document.querySelector ('#res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert ('[ERROR] Digite os dados e tente novamente!')
    } else {
        res.innerHTML = `<p>Contando...</p>`
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if (p <= 0) {
            alert('PASSO INCORRETO!')
            p = 1
        }
        if (i < f) {
            for(var contador = i; contador <= f; contador += p)
            res.innerHTML += `${contador} 💙 `
        } else {
            for(var contador = i; contador >= f; contador -= p)
            res.innerHTML += `${contador} 💙 `
        }
            res.innerHTML += `🏁`
    }
}