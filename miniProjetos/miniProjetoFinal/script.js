let num = document.getElementById('num')
let select = document.getElementById('select')
let res = document.getElementById('res')
let array = []

function isNum(numero) {
    if (numero >= 1 && numero <= 100) {
        return true
    } else {
        return false
    }
}

function inList(numero, array) {
    if (array.indexOf(Number(numero.value)) == -1) {
        return true // Não encontrado, retorne true
    } else {
        return false // Encontrado, retorne false
    }
}

function addNum() {
    if (isNum(num.value) && inList(num, array)) {
        res.innerHTML = ``
        
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        select.appendChild(item)

        array.push(Number(num.value))
    } else {
        window.alert('Número inválido, ou já adicionado na lista.')
    }

    num.value = ``
    num.focus()
}

function somaArray(array) {
    let sum = 0
    for (let pos in array) {
        sum += array[pos]
    }
    return sum
}

function relatorio() {
    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        array.sort((a, b) => a - b)

        for (let cont = 0 ; cont < 5 ; cont++) {
            switch (cont) {
                case 0:
                    res.innerHTML = `<p>Ao todo temos ${array.length} número(s) cadastrados.</p>`
                    break
                case 1:
                    res.innerHTML += `<p>O maior valor informado foi ${array[array.length - 1]}.</p>`
                    break
                case 2:
                    res.innerHTML += `<p>O menor valor informado foi ${array[0]}.</p>`
                    break
                case 3:
                    let soma = somaArray(array)
                    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
                    break
                case 4:
                    let media = somaArray(array) / array.length
                    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2).replace('.', ',')}</p>`
                    break
                default:
                    break
            }
        }
    }
}