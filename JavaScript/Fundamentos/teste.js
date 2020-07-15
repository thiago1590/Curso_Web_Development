function compareTriplets(ar) {
  let reverse = []
  let soma_diag_p = 0
  let soma_diag_s = 0
  let resultado
  for(let i = ar.length;i>0;i--){
      let z = i-1
    reverse.push(z)
  }
  
  for(let i in ar){
      soma_diag_p += ar[i][i]
      soma_diag_s += ar[reverse[i]][i]
  }
  
  resultado = soma_diag_p - soma_diag_s
 
  if(resultado < 0){
      resultado = resultado * (-1)
  }
  console.log(soma_diag_p)
  console.log(soma_diag_s)
  console.log(resultado)
  return(resultado)
}

var mochila = new Array()
var item1=[11,2,4],
    item2=[4,5,6];
    item3=[10,8,-12];
    

    mochila.push(item1);
    mochila.push(item2);
    mochila.push(item3);

compareTriplets(mochila)



   