let cotDolar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
let cotDolarNum = Number(cotDolar)

let botao = document.getElementById('botao')

if (cotDolar.length == 0 || isNaN(cotDolarNum) || !isFinite(cotDolarNum) || cotDolarNum <= 0) {
    botao.innerHTML = `<h1>Recarregue a página e insira um valor <br>válido para cotação do dólar<h1>`
    botao.style.background = 'none'
    botao.style.border = 'none'
    botao.style.width = '100%'
    botao.style.textAlign = 'center'

} else {
    let titulo = document.getElementById('titulo')
    titulo.innerHTML = 'Conversor R$ → US$'

    botao.innerHTML = `<p>Converter</p>`
    botao.setAttribute('onclick', 'converter()')

    let res = document.getElementById('res')
    res.innerHTML = 'Clique no botão acima para iniciar.'

    function converter() {
        let reais = window.prompt('Quantos R$ você tem na carteira?')
        let reaisNum = Number(reais)

        res.innerHTML = 'Clique no botão acima para iniciar.'

        if (reais.length == 0 || isNaN(reaisNum) || !isFinite(reaisNum) || reaisNum < 0) {
            window.alert('[ERRO] Por favor, insira um número válido')
        } else {
            res.innerHTML = `<strong>Conforme a cotação do dólar (US$ 1,00 = R$ ${cotDolarNum.toLocaleString('pt-BR')}), R$${reaisNum.toLocaleString('pt-BR')} corresponde a...</strong>`
            res.innerHTML += `<p>US$ ${(reaisNum / cotDolar).toLocaleString('en-US')} \u{1F4B8}</p>`
        }
    }
}