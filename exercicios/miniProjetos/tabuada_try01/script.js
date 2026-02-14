function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        for (let cont = 1 ; cont <= 10 ; cont++) {
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n * cont}`
            item.value = `item${cont}`
            tab.appendChild(item)
        }
    }
}