function carregar() {
    var data = new Date();
    var hora = data.getHours();
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    msg.innerHTML = (`Agora são ${hora} horas !`)
        if (hora >= 0 && hora < 12) {
            // BOM DIA
            img.src = './imagens/foto-dia.jpg'
            document.body.style.background = '#004E87'
        } else if (hora >= 12 && hora < 18) {
            // BOA TARDE
            img.src = './imagens/foto-tarde.jpg'
            document.body.style.background = '#6B371A'
        } else {
            // BOA NOITE
            img.src = './imagens/foto-noite.jpg'
            document.body.style.background = '#131A23'

        }
}

