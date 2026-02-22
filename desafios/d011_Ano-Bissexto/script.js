function verificar() {
    let ano = window.prompt('Qual é o ano que você quer analisar?')
    let anoNum = Number(ano)

    let res = document.getElementById('res')

    res.innerHTML = `Informe um ano para saber se ele é bissexto.`

    if (ano === null || ano.length == 0 || isNaN(anoNum) || !isFinite(anoNum) || !Number.isInteger(anoNum) || anoNum < 1) {

        window.alert('[ERRO] Por favor, insira um número válido.')
        
    } else {
        res.innerHTML = `<h2>Analisando o ano ${ano}...</h2>`
    
        if (anoNum % 4 == 0 && !(anoNum % 100 == 0)) {
            res.innerHTML += `O ano de ${ano} <strong><mark style="background-color: #A6EB9A">É BISSEXTO</mark></strong>\u{2705}`
        } else if (anoNum % 100 == 0 && anoNum % 400 == 0) {
            res.innerHTML += `O ano de ${ano} <strong><mark style="background-color: #A6EB9A">É BISSEXTO</mark></strong>\u{2705}`
        } else {
            res.innerHTML += `O ano de ${ano} <strong><mark style="background-color: #E28783">NÃO É BISSEXTO</mark></strong>\u{274C}`
        }
    }
}