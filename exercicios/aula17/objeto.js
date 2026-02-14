let amigo = {
    nome: 'José', 
    idade: 28, 
    sexo: 'M', 
    peso: 80.4, 
    engordar(p=0) {
        this.peso += p
    }
}

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)