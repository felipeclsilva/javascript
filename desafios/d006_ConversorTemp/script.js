function CelToKel(temp) {
    let tempKelvin = temp + 273.15
    return tempKelvin
}

function CelToFah(temp) {
    let tempFah = (temp * 1.8) + 32
    return tempFah
}

function converter() {
    let temperatura = window.prompt('Digite uma temperatura em °C (Celsius)')
    let temp = Number(temperatura)
    let res = document.getElementById('res')

    res.innerHTML = 'Clique no botão acima para iniciar.'

    if (temperatura.length == 0 || isNaN(temp) || !isFinite(temp)) {
        window.alert('[ERRO] Por favor, insira um número válido.')
    } else {
        res.innerHTML = `<p><strong>A temperatura de ${temp.toLocaleString('pt-BR')}°C, corresponde a...</strong></p>`
        
        res.innerHTML += `<p>${(CelToKel(temp).toFixed(2).replace('.', ','))}°K (Kelvin)</p>`
        res.innerHTML += `<p>${CelToFah(temp).toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
    }
}