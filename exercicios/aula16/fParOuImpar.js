function parimp(num) { // parâmetro
    if (num % 2 == 0) { // ação
        return 'par' // retorno 1
    } else {
        return 'ímpar' // retorno 2
    }
}

let numero = 6
let testeParimp = parimp(numero) // chamada da fução
console.log(`O número ${numero} é ${testeParimp}`)

console.log(`O número 1 é ${parimp(1)}`)