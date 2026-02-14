function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hora(s).`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'image/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'image/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'image/noite.png'
        document.body.style.background = '#515154'
    }
}