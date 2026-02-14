function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar! \u{1F615}`
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo igual a 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for (let cont = i ;cont >= f; cont -= p) {
                res.innerHTML  += ` ${cont} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}