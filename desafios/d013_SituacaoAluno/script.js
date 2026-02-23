function verificar() {
    let nome = window.prompt('Qual é o nome do aluno?')

    let res = document.getElementById('res')
    res.innerHTML = `Clique no botão acima para informar as notas do aluno.`

    if (nome === null || nome.length == 0) {

        window.alert('[ERRO] Por favor, insira o nome do aluno.')

    } else {
        let notaUm = window.prompt(`Primeira nota de ${nome}`)
        let notaUmNum = Number(notaUm)

        if (notaUm === null || notaUm.length == 0 || isNaN(notaUmNum) || !isFinite(notaUmNum) || notaUmNum < 0 || notaUmNum > 10) {

            window.alert('[ERRO] Por favor, insira um número válido.')

        } else {
            let notaDois = window.prompt(`Segunda nota de ${nome}`)
            let notaDoisNum = Number(notaDois)

            if (notaDois === null || notaDois.length == 0 || isNaN(notaDoisNum) || !isFinite(notaDoisNum) || notaDoisNum < 0 || notaDoisNum > 10) {

                window.alert('[ERRO] Por favor, insira um número válido.')

            } else {
                function media(notaUmNum, notaDoisNum) {
                    let media = (notaUmNum + notaDoisNum) / 2
                    return media
                }

                let botao = document.getElementById('botao')
                botao.style.marginBottom = '0px'

                // Títilo da resposta
                res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
            
                // Linha 1
                res.innerHTML += `<p>Com as notas ${notaUmNum.toLocaleString('pt-BR', {maximumFractionDigits: 2})} e ${notaDoisNum.toLocaleString('pt-BR', {maximumFractionDigits: 2})}, a <strong>média é ${media(notaUmNum, notaDoisNum).toLocaleString('pt-BR', {maximumFractionDigits: 2})}</strong></p>`

                // Linha 2
                if (media(notaUmNum, notaDoisNum) > 6) {
                    res.innerHTML += `<p>Com a média acima de 6,0, o aluno está <strong><mark style="background: #A6EB9A">APROVADO</mark></strong></p>` 
                } else if (media(notaUmNum, notaDoisNum) < 3) {
                    res.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <strong><mark style="background: #E28783">REPROVADO</mark></strong></p>`
                } else {
                    res.innerHTML += `<p>Com a média entre de 3,0 e 6,0, o aluno está em <strong><mark style="background: #FFFFE3">RECUPERAÇÃO</mark></strong></p>`
                }
            }
        }
    }
}