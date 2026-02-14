let idade = 18
console.log(`Você tem ${idade} ano(s)`)

// Exemplo com Condições Aninhadas
// if (idade >= 18) {
//      if (idade >= 18 && idade < 67) {
//         console.log('Voto obrigatório')
//      } else {
//         console.log('Voto opcional')
//      }
// } else {
//     if (idade >= 16 && idade < 18) {
//         console.log('Voto opcional')
//     } else {
//         console.log('Não vota')
//     }
// }

// Exemplo com else if
if (idade >= 67) {
    console.log('Voto opcional')
} else if (idade >= 18 && idade < 67) {
    console.log('Voto obrigatório')
} else if (idade >= 16 && idade < 18) {
    console.log('Voto opcional')
} else {
    console.log('Não vota')
}