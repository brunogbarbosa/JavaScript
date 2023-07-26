function clicar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.querySelector('#nasc');
    var res = document.querySelector('#res')
        if (nasc.value.length == 0 || Number(nasc.value < 1885) || Number(nasc.value > ano)) {
            window.alert('[ERROR] Verifique os dados e tente novamente!')
        } else {
            var fsexo = document.getElementsByName('radiosex')
            var idade = ano - Number(nasc.value)
            var genero = ''
            var img = document.createElement('img');
            img.setAttribute('id', 'foto');
                if (fsexo[0].checked) {
                    genero = 'Homem'
                    if (idade >= 0 && idade <= 12) {
                        //criança
                        img.setAttribute('src', './imagens/foto-bebe-homem.png')
                    } else if (idade > 12 && idade <= 21) {
                        // jovem
                        img.setAttribute('src', './imagens/foto-jovem-homem.png')     
                    } else if (idade > 21 && idade < 50 ) {
                        // adulto 
                        img.setAttribute('src', './imagens/foto-homem-adulto.png' )
                    } else {
                        //idoso
                        img.setAttribute('src', './imagens/foto-idoso-homem.png')
                    }
                } else if (fsexo[1].checked) {
                     genero = 'Mulher'
                    if (idade >= 0 && idade <= 12) {
                        //criança
                        img.setAttribute('src', '../imagens/foto-bebe-mulher.png')
                    } else if (idade > 12 && idade <= 21) {
                        //jovem
                        img.setAttribute('src', '../imagens/foto-jovem-mulher.png')
                    } else if (idade > 21 && idade < 50 ) {
                        // adulto 
                        img.setAttribute('src', '../imagens/foto-mulher-adulta.png')
                    } else {
                        //idosa
                        img.setAttribute('src', '../imagens/foto-idosa-mulher.png')
                    }
                }
                res.innerHTML = `<p>Detectamos ${genero}, com ${idade} anos.</p>`
                res.appendChild(img)
        }
    }