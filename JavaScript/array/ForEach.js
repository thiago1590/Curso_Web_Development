const aprovados = ['Agath','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){ //forEach possui value,index e array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = (aprovado) => console.log(aprovado)
aprovados.forEach(exibiraprovados)