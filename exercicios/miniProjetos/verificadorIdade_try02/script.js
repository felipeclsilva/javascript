function verif() {
    let data = new Date()
    let ano = data.getFullYear() 
    let fAno = document.getElementById('anoNasc')
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) { // se liga

        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'image/homem-bebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'image/homem-jovem.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'image/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'image/homem-idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'image/mulher-bebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'image/mulher-jovem.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'image/mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'image/mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}