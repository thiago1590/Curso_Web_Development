// Factory simples
function CriarPessoa(){
    return{
        nome:'Ana',
        sobrenome:'Silva'
    }
}

function CriarProduto(nome=coca,preço=4){
    return{
        nome,
        preço
    }
}
console.log(CriarProduto('cocaCola',5))

