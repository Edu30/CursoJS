function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.getElementById('img')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'h-criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'h-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'h-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'h-idoso.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'f-criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'f-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'f-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'f-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}