//uso do this e bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
//ou
function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this),1000)
}

//função callback
const fabricantes = [7.7,9.8,6.7,5.4,2.9,7.3,8,10]

function imprimir(nome,indice){
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)

const notas = [7.7,9.8,6.7,5.4,2.9,7.3,8,10]


let notasBaixas = [] //Sem callback
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

const notasBaixas3 = notas.filter(nota => nota < 7) // Com callback
console.log(notasBaixas)

document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('o evento ocorrreu!')
}

//Funçoes Construtoras
function Carro(velocidadeMaxima = 200,delta= 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
    
        if(velocidadeAtual + delta <= velocidadeMaxima){
        velocidadeAtual += delta
    } else{
        velocidadeAtual = velocidadeMaxima
    }
}

this.getVelocidadeAtual = function(){
    return velocidadeAtual
}
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//Contexto léxico
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//Closure
  //é o escopo criado quando uma função é declarada
  //Esse escopo permite a funcao acessar e manipular variaveis externas

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())

// Factory simples
function CriarPessoa(){ //é uma função que retorna um objt
    return{
        nome:'Ana',
        sobrenome:'Silva'
    }
}