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

//Refência
const a = {name:'Teste'}
const b = a //objetos possuem copia por referencia

const c = 3
let d = c
d++ //d == 4, c ==3   //tipos primitivos possuem cópia por valor

//defined 
let valor
console.log(valor) //undefined
console.log(valor2) //is not defined
valor = null //foi inicializada mas nao aponta p/ nenhum endereço
