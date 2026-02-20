function converter() {
    let distancia = window.prompt('Digite uma distância em metros (m)')
    let dist = Number(distancia)

    res.innerHTML = 'Clique no botão acima para iniciar.'

    if (distancia.length == 0 || isNaN(dist) || !isFinite(dist) || dist <= 0 || dist >= 1000000000000) {
        window.alert('[ERRO] Por favor, insira um número válido.')
    } else {
        let res = document.getElementById('res')
    
        res.innerHTML = `<strong>A distância de ${dist.toFixed(2).replace('.', ',')} metro(s), corresponde a...</strong>`
        
        res.innerHTML += `<p>${(dist * 0.001).toLocaleString('pt-BR')} quilômetros (Km)</p>`
        res.innerHTML += `<p>${(dist * 0.01).toLocaleString('pt-BR')} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${(dist * 0.1).toLocaleString('pt-BR')} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${(dist * 10).toLocaleString('pt-BR')} decímetros (dm)</p>`
        res.innerHTML += `<p>${(dist * 100).toLocaleString('pt-BR')} centímetros (cm)</p>`
        res.innerHTML += `<p>${(dist * 1000).toLocaleString('pt-BR')} milímetros (mm)</p>`
    }
}