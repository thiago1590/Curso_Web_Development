let altura = window.innerHeight
let largura = window.innerWidth
let vida = 1
let cronometro = 11

setInterval(function(){
    cronometro -= 1
    if(cronometro < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'app.html'
    }
    document.getElementById('cronometro').innerHTML = cronometro
},1000)
console.log(cronometro)

function criaMosquito(){
    if(document.getElementById('mosquito')){ //se mosquito existe
        document.getElementById('mosquito').remove()

        if(vida > 3){
            window.location.href = 'app.html'
        } else{
            document.getElementById('v' + vida).src = "images/coracao_vazio.png"
         vida++
         }
    }

    //pega posicao randomica
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    //pequena correção
    posicaoX = posicaoX<0? 0 : posicaoX
    posicaoY = posicaoY<0? 0 : posicaoY

    //Cria elemento mosquito
    let mosquito = document.createElement('img')
    mosquito.src = 'images/mosca.png'
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.className = tamanhoAleatorio()
    mosquito.onclick = function(){this.remove()}
    tamanhoAleatorio()
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'tamanho1'
        case 1:
            return 'tamanho2'
        case 2:
            return 'tamanho3'
    }
}

setInterval(function(){criaMosquito()},2000)