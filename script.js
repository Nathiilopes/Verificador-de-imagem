function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert(`Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //criando o elemento filho img
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 14){
                //criança
                img.setAttribute('src', 'imagens/foto-crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50){
                //adulto    
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 14){
                //criança
                img.setAttribute('src', 'imagens/foto-crianca-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50){
                //adulto    
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }

        img.style.height = '200px'
        img.style.width = '200px'
        img.borderRadios = '50%'
        img.style.display = 'block'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adicionando o elemento filho img
    }
}
