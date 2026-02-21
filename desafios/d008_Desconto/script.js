function calcDesconto() {
    // Perguntando o nome do produto
    let produto = window.prompt('Qual é o produto que você está comprando?')

    // Seleção da área de resposta
    let res = document.getElementById('res')
    // Escrevendo mensagem padrão (apagando possível resposta) para toda vez que o botão for clicado
    res.innerHTML = `Clique no botão acima para iniciar.`
    
    // Validando se o usuário inseriu o nome do produto
    if (produto === null|| produto.length == 0) {
        window.alert('[ERRO] Por favor, insira o nome do produto.')
    } else {
        // Perguntando seu preço
        let preco = window.prompt(`Qual é o preço de ${produto}?`)
        let precoNum = Number(preco) // convertendo para número

        // Validando preço, conferindo se o usuário clicou no botão "cancelar", se inseriu preço, se é número, se é um número finito e se é maior que zero respectivamente
        if (preco === null|| preco.length == 0 || isNaN(precoNum) || !isFinite(precoNum) || precoNum <= 0) {
            window.alert('[ERRO] Por favor, insira um número válido.')
        } else {
            // Título da resposta
            res.innerHTML = `<h2>Calculando deconto de 10% para ${produto}</h2>` 

            // linha 1 da resposta: informando preço original
            res.innerHTML += `<p>O preço original era <strong>R$ ${precoNum.toLocaleString('pt-BR')}</strong>.</p>`
            
            // linha 2 da resposta: informando valor do desconto com os 10%
            res.innerHTML += `<p>Você acaba de ganhar <strong>R$ ${(precoNum * 0.1).toFixed(2).replace('.', ',')}</strong> de desconto (-10%).</p>`
            
            // linha 3 da resposta: informando preço com desconto de 10%
            res.innerHTML += `<p>No fim, você vai pagar <strong>R$ ${(precoNum - (precoNum * 0.1)).toFixed(2).replace('.', ',')}</strong> no produto ${produto}.</p>`
        }
    }
}