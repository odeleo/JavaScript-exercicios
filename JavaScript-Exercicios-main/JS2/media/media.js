function media() {
    let nome = window.prompt("Qual é o nome do aluno? ")
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}`))
    media = (nota1 + nota2)/2

    let msg
    if (media >= 6) {
        msg = "Meus parabéns"
    } else {
        msg = "Estude um pouco mais"
    }

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a media de ${nome}</p>`
    res.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`
    res.innerHTML += `<p>A média final será ${media}</p> `
    res.innerHTML += `<p>A mensagem que temos é ${msg}</p>`
}