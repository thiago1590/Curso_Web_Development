function classificarTriangulo(lado1,lado2,lado3){
    if(lado1 > lado2+ lado3 && lado2 > lado1 + lado3 && lado3 > lado1 +lado2){ //Verifica se é um triangulo
        if(lado1 == lado2 & lado2 == lado3 && lado1 == lado3 ){
            console.log('triangulo equilátero')
        }
        else if(lado1 != lado2 &&  lado2 != lado3 && lado1 != lado3){
            console.log('triangulo Escaleno')
        }
        else{
            console.log('triangulo Isosceles')
        }
    }
    else{
        console.log('De acordo com esses parâmetros, não é possível formar um triangulo')
    }
}

classificarTriangulo(1,3,4)
