function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2 
    
    let msg 
    if (med >= 6) { 
        msg = 'Meus parabéns!'
    } else { 
        msg = 'Estude um pouco mais!'
    }
    

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <strong>${nom}</strong>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <strong>${n1} e ${n2}</strong>.</p>` 
    res.innerHTML += `<p>A média final será <strong>${med}</strong>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:blue;'>${msg}</strong></p>`
}