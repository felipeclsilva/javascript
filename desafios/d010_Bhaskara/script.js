function calcular() {
    let a = window.prompt('Qual é o valor de a?')
    let aNum = Number(a)

    let res = document.getElementById('res')
    res.innerHTML = `Considerando uma equação no formato <em><strong>a</strong>x² + <strong>b</strong>x + <strong>c</strong> = 0</em>, aperte o botão acima para calcular o valor de Δ.`

    if (a === null || a.length == 0 || isNaN(aNum) || !isFinite(aNum) || aNum == 0) {
        
        window.alert('[ERRO] Por favor, insira um número válido.')

    } else {
        let b = window.prompt('Qual é o valor de b?')
        let bNum = Number(b)
        
        if (b === null || b.length == 0 || isNaN(bNum) || !isFinite(bNum)) {
            
            window.alert('[ERRO] Por favor, insira um número válido.')

        } else {
            let c = window.prompt('Qual é o valor de c?')
            let cNum = Number(c)

            if (c === null || c.length == 0 || isNaN(cNum) || !isFinite(cNum)) {

                window.alert('[ERRO] Por favor, insira um número válido.')

            } else {
                function delta() {
                    let delta = (bNum ** 2) - (4 * aNum * cNum)
                    return delta
                }

                function xUmaLinha(a, b) {
                    let raizUm = (-b + Math.sqrt(delta())) / (2 * a)
                    return raizUm
                }

                function xDuasLinhas(a, b) {
                    let raizDois = (-b - Math.sqrt(delta())) / (2 * a)
                    return raizDois
                }
                
                res.innerHTML = `<p>A equação atual é <strong>${a}x² + ${b}x + ${c}</strong></p>`
                
                res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
                
                res.innerHTML += `<p>O valor calculado foi <mark><strong>Δ = ${delta()}</strong></mark></p>`

                if (delta() > 0) {
                    res.innerHTML += `<p>Como Δ > 0, a equação possui duas raízes: <strong>x' = ${(xUmaLinha(aNum, bNum)).toLocaleString('pt-BR', {maximumFractionDigits: 3})}</strong> e <strong>x''= ${(xDuasLinhas(aNum, bNum)).toLocaleString('pt-BR', {maximumFractionDigits: 3})}</strong></p>`
                } else if (delta() == 0) {
                    res.innerHTML += `<p>Como Δ = 0, a equação possui apenas uma raiz: <strong>x = ${(-bNum / (2 * aNum)).toLocaleString('pt-BR', {maximumFractionDigits: 3})}</strong></p>`
                } else {
                    res.innerHTML += `<p>Como Δ < 0, a equação do 2° grau <strong>não possui raízes reais.</strong></p>`
                }
            }
        }
    }
}