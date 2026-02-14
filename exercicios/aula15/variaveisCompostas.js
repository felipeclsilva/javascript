let vazio = [] // testando print de array vazia
console.log(vazio)

let num = [0, 4, 12, 5, -1] // criando e printando array
console.log(num) 

console.log(`Esses são os números: ${num}`) // print com interpolação e placeholder 

console.log('A posição 2 da Array é ' + num[1]) // print com índice 1

// Criando posições
num[5] = 11 // vetor recebe 11 na posição 5
console.log(num[5])

num[20] = 0 // adicionando o número 0 a posição 20 (o vetor passa a ter 21 divisões)
console.log(num[20]) // deu certo
console.log(`${num[19]} + ${num[21]}`) // ambos indefinidos, mesmo a posição 19 estando dentro do vetor

num.push(-100) // método push, adiciona -100 a última posição da array
console.log(num[21]) // agora sim tem posição 21 e length 22
console.log(num.length)

num.sort()
console.log(num) // ordem lexicográfica

num.sort((a, b) => a - b) // ordem numérica
console.log(num)

let posicao = num.indexOf(12)
if (posicao == -1) {
    console.log(`O número não está presente no vetor`)
} else {
    console.log(`A posição do número 4 é ${posicao}`)
}
