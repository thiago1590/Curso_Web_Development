//Template String
const nome = 'thiago'
const concatenacao = 'Olá ' + nome
const template = `Olá ${nome}!`

//Array
const valores = [7.7,8.9,6.3,"thiago"]
valores[4] = 10

valores.push({id:3},false,null)


console.log(valores.pop()) //retira ultimo elemento
delete valores[0]

//Objetos
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 3998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

const prod2 = {nome:'Camisa Polo', preco:79.90}

//Referência
const a = {name:'Teste'}
const b = a //objetos possuem copia por referencia

const c = 3
let d = c
d++ //d == 4, c ==3   //tipos primitivos possuem cópia por valor

//defin
let valor
console.log(valor) //undefined
console.log(valor2) //is not defined
valor = null //foi inicializada mas nao aponta p/ nenhum endereço

//armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b){
    console.log(a+b)
}

//armazemando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

// retorno implícito
const subtracao = (a,b) => a - b

//operador destructuring
const pessoa = {
    nome:'Thiago',
    idade:5,
    endereco:{
        logradouro:'Rua Carlos Palut',
        numero:426
    }
}

const {nome, idade} = pessoa

const{nome:n,idade:i} = pessoa

const{sobrenome, bemHumorada = true} = pessoa

const {endereco: {logradouro, numero, cep}} = pessoa

const [a] = [10] //para array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

//operadores logicos
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }//declaraçao simplificada
}
//Try/Catch
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)

