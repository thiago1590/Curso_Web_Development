Array.prototype.forEach2 = function(callback){
    for(let i=0;i<this.length;i++){
       callback(this[i],i,this)
    }
}

const aprovados = ['Agath','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome,indice){ //forEach possui value,index e array
    console.log(`${indice + 1}) ${nome}`)
})



