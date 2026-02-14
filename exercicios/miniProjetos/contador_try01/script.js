function calcular() {
    // Estrutura da conversão: conversão(seleção().value)

    // Usando seleção + conversão na mesma linha, com Number.parseInt()
    let numInicio = Number.parseInt(document.getElementById('numInicio').value)

    // Usando seleção e conversão em linhas diferentes
    let numFim = document.getElementById('numFim')
    let fim = Number.parseInt(numFim.value)

    // Usando seleção + conversão na mesma linha, com Number()
    let numPasso = Number(document.getElementById('numPasso').value)

    let res = document.getElementById('res')
    res.innerHTML = ' '

    function incCrescente() {
        for (let cont = numInicio; cont <= fim ; cont += numPasso) {
            res.append(cont)
            res.append(' 👉 ')
        }
        res.append(' 🏁')
    }

    function incDecrescente() {
        for (let cont = numInicio; cont >= fim ; cont -= numPasso) {
            res.append(cont)
            res.append(' 👉 ')
        }
        res.append(' 🏁')
    }

    if (Number.isNaN(numInicio) || Number.isNaN(fim) || Number.isNaN(numPasso)) {
        res.innerHTML = 'Impossível calcular!'
    } else if (numPasso <= 0) {
        window.alert('Passo inválido! Considerando passo igual a 1') 
        numPasso = 1

        if (numInicio < fim) {
            incCrescente()
        } else {
            incDecrescente()
        }
    } else {
        if (numInicio < fim) {
            incCrescente()
        } else {
            incDecrescente()
        }
    }

    res.style.marginTop = '10px'
}