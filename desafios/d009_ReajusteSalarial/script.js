function reajustSal() {
    // Perguntando o nome do funcionário
    let nomeFuncionario = window.prompt('Qual é o nome do funcionário?')

    // Seleção da área de resposta
    let res = document.getElementById('res')
    // Escrevendo mensagem padrão (apagando possível resposta) para toda vez que o botão for clicado
    res.innerHTML = `Clique no botão acima para iniciar.`
    
    // Validando se o usuário inseriu o nome do funcionário
    if (nomeFuncionario === null|| nomeFuncionario.length == 0) {
        window.alert('[ERRO] Por favor, insira o nome do funcionário.')
    } else {
        // Perguntando seu salário
        let salario = window.prompt(`Qual é o salário de ${nomeFuncionario}?`)
        let salarioNum = Number(salario) // convertendo para número

        // Validando salário, conferindo se o usuário clicou no botão "cancelar", se inseriu algo, se é número, se é um número finito e se é maior que zero, respectivamente
        if (salario === null|| salario.length == 0 || isNaN(salarioNum) || !isFinite(salarioNum) || salarioNum <= 0) {
            window.alert('[ERRO] Por favor, insira um número válido.')
        } else {
            // Perguntando porcentagem do reajuste
            let porcentReajust = window.prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`)
            let porcentReajustNum = Number(porcentReajust)

            if (porcentReajust === null|| porcentReajust.length == 0 || isNaN(porcentReajustNum) || !isFinite(porcentReajustNum) || porcentReajustNum < 0) {
                window.alert('[ERRO] Por favor, insira um número válido.')
            } else {
                // Título da resposta
                res.innerHTML = `<h2>${nomeFuncionario} recebeu um aumento salarial!</h2>` 

                // linha 1 da resposta: informando valor do salário antes do reajuste
                res.innerHTML += `<p>O salário atual era <strong>R$ ${salarioNum.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>.</p>`
                
                // linha 2 da resposta: informando valor do aumento
                res.innerHTML += `<p>Com um aumento de ${porcentReajustNum}%, o salário vai aumentar <strong>R$ ${(salarioNum * (porcentReajustNum / 100)).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong> no próximo mês.</p>`
                
                // linha 3 da resposta: informando salário com reajuste personalizado
                res.innerHTML += `<p>E a partir daí, ${nomeFuncionario} vai passar a ganhar <strong>R$ ${(salarioNum + (salarioNum * (porcentReajustNum / 100))).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>.</p>`
            }
        }
    }
}