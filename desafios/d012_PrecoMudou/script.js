function verificar() {
    let prcAnterior = window.prompt('Qual era o preço anterior do produto?')
    let prcAntNum = Number(prcAnterior)

    let res = document.getElementById('res')
    res.innerHTML = `Clique no botão acima para analisar a mudança de preço.`

    if (prcAnterior === null || prcAnterior.length == 0 || isNaN(prcAntNum) || !isFinite(prcAntNum) || prcAntNum < 0) {

        window.alert('[ERRO] Por favor, insira um número válido.')

    } else {
        let prcAtual = window.prompt('Qual é o preço atual do produto?')
        let prcAtualNum = Number(prcAtual)

        if (prcAtual === null || prcAtual.length == 0 || isNaN(prcAtualNum) || !isFinite(prcAtualNum) || prcAtualNum < 0) {

            window.alert('[ERRO] Por favor, insira um número válido.')

        } else {
            // Título da resposta
            res.innerHTML = `<h2>Analisando os valores informados</h2>`
            
            // Primeira linha
            res.innerHTML += `<p>O produto custava ${prcAntNum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${prcAtualNum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`

            // Segunda linha
            if (prcAntNum > prcAtualNum) {
                res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
            } else if (prcAntNum < prcAtualNum) {
                res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
            } else {
                res.innerHTML += `<p>Hoje o produto possui o mesmo preço que antes.</p>`
            }

            // Terceira linha
            if (prcAntNum > prcAtualNum) {
                res.innerHTML += `<p>O preço caiu ${(prcAntNum - prcAtualNum).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
            } else if (prcAntNum < prcAtualNum) {
                res.innerHTML += `<p>O preço subiu ${(prcAtualNum - prcAntNum).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
            } else {
                res.innerHTML += `<p>Não houve aumento ou queda de preço.</p>`
            }

            // Quarta linha
            if (prcAntNum > prcAtualNum) {
                res.innerHTML += `<p>Uma variação de ${(((prcAntNum - prcAtualNum) * 100) / prcAtualNum).toLocaleString('pt-BR', {maximumFractionDigits: 2})}% para baixo.</p>`
            } else if (prcAntNum < prcAtualNum) {
                res.innerHTML += `<p>Uma variação de ${(((prcAtualNum - prcAntNum) * 100) / prcAntNum).toLocaleString('pt-BR', {maximumFractionDigits: 2})}% para cima.</p>`
            } else {
                res.innerHTML += `<p>Uma variação de 0%.</p>`
            }
        }
    }
}