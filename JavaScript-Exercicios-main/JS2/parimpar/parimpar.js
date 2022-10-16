function teste() {
    let numero = Number(window.prompt("Digite um número: "))
    let tipo
    if (numero % 2 == 0) {
        tipo = '<strong>Par</strong>'
    } else {
        tipo = '<strong>Impar</strong>'
    }

    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>O número ${numero} que foi digitado é ${tipo}</p>`
}