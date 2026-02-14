// 5! = 5 * 4 * 3 * 2 * 1

/*
function fatorial(num) {
    let res = num
    for (let cont = num ; cont > 1 ; cont--) {
        res *= (cont - 1)
    }
    return res
}

let teste = fatorial(5)
console.log(teste)
*/

function fatorial(n) {
    let fat = 1
    for (let cont = n ; cont > 1 ; cont--) {
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))