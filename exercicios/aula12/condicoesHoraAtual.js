let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
let segundos = agora.getSeconds()

console.log(`Agora são exatamente ${hora} hora(s), ${minutos} minuto(s) e ${segundos} segundos`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}