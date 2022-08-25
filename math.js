console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado * lado,
    }
}
console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo = 6;
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimetroTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 +base,
        area: (base * altura) / 2, 
    }
}

console.groupEnd('Triangulo');

console.group('Circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo *2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) *PI;

console.log(
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
)

function calcularCirculo(radio) {
const diametro = radio * 2;
const radioAlCuadrado = Math.pow(radio, 2);

    return{
        circunferencia: (diametro) * Math.PI,
        area: radioAlCuadrado * Math.PI, 
    }
}
console.groupEnd('Circle');

function isThisAnIsoceles(lado1, base){
    if(lado1 == base) {
        console.warn('Este no es un traingulo isoceles')
    }
    else{
        return {
            altura: Math.sqrt(lado1 ** 2 - (base ** 2 / 4))
        }
     }
}



function calcularEscaleno2 (lado1, lado2, lado3)
{ 
    const semiPerimetro = (lado1 + lado2 + lado3) / 2;
    return{
        altura: (2/lado1) * Math.sqrt(semiPerimetro *(semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3)) 
    }
    }
