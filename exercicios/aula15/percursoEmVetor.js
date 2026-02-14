let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

// Método 1 para percurso em vetor
/* 
for (let pos = 0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Método 2 para percurso em vetor
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}