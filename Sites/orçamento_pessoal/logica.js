class Despesa{
    constructor(ano,mes,dia,tipo,descricao,valor){
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
    }
    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] =='' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor(){
        let id = localStorage.getItem('id')

        if(id=== null) {
            localStorage.setItem('id',0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }
    gravar(d){
        let id = this.getProximoId()

        localStorage.setItem(id,JSON.stringify(d))

        localStorage.setItem('id',id)
    }
    recuperarTodosRegistros(){
        
        let despesas = Array()

        let id = localStorage.getItem('id')

        for(let i =1;i<= id;i++){
            let despesa = JSON.parse(localStorage.getItem(i))
            if(despesa!=null){
            despesas.push(despesa)
            }
        }
        console.log(despesas.mes)
        return despesas
    }
    pesquisar(despesa){
        let despesasFiltradas = Array()

        despesasFiltradas = this.recuperarTodosRegistros()
        console.log(despesasFiltradas.mes)
        if(despesa.ano != ''){
            console.log('filtro ano')
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        
        }
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }
        console.log(despesasFiltradas)
    }   
}
let bd = new Bd()

function cadastrarDespesa(){

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value)

        if(despesa.validarDados()){
        bd.gravar(despesa)
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('corHeader').className = 'modal-header text-success'
        document.getElementById('modalBody').innerHTML = 'Despesa foi cadastrada com sucesso!'
        document.getElementById('botao_voltar').className = 'btn btn-success'
        document.getElementById('botao_voltar').innerHTML = 'Voltar'

        $('#ModalRegistro').modal('show')
        
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
    }   
        else{
        document.getElementById('modal_titulo').innerHTML = 'Erro na inclusao de registro'
        document.getElementById('corHeader').className = 'modal-header text-danger'
        document.getElementById('modalBody').innerHTML = 'Erro na gravação verifique se todos os campos foram preenchidos corretamente'
        document.getElementById('botao_voltar').className = 'btn btn-danger'
        document.getElementById('botao_voltar').innerHTML = 'Voltar e corrigir'
            $('#ModalRegistro').modal('show')
        }
    
}


function carregaListaDespesas(){

    let despesas = Array()
    despesas = bd.recuperarTodosRegistros()

    var listaDespesas = document.getElementById('listaDespesas')
    
    despesas.forEach(function(d){
        let linha = listaDespesas.insertRow()
        linha.insertCell(0).innerHTML =  `${d.dia}/${d.mes}/${d.ano}`
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia= document.getElementById('dia').value
    let tipo= document.getElementById('tipo').value
    let descricao= document.getElementById('descricao').value
    let valor= document.getElementById('valor').value

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)
   bd.pesquisar(despesa)
}





