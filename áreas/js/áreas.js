/**
 * Función: Áreas de figuras geométricas
 * Autor: Johan Esteban Cuellar Silva
 * Lunes 01 de abril de 2024
 */

let base;
let altura;

//con Parámetros
function areasFiguras(pbase, paltura){
    let area;
    let base = pbase;
    let altura = paltura;
    area = base * altura;
    return area;
}

function figuraGeo(pfigura, pbase, paltura){
    let resultado;
    let figura = pfigura;
    let base = pbase;
    let altura = paltura;

    if (figura == "cuadrado"){
        resultado = areasFiguras(base, altura);
    }
    else if (figura == "rectangulo"){
        resultado = areasFiguras(base, altura);
    }
    else if (figura == "triangulo"){
        resultado = (areasFiguras(base, altura))/2;
    }
    else{
        resultado = "Error!!!";
    }
    return resultado;
}

//como Expresión
const areasFigurasExp = function(pbase, paltura){
    let area;
    let base = pbase;
    let altura = paltura;
    area = base * altura;
    return area;
}

const figuraGeoExp = function (pfigura, pbase, paltura){
    let resultado;
    let figura = pfigura;
    let base = pbase;
    let altura = paltura;

    if (figura == "cuadrado"){
        resultado = areasFigurasExp(base, altura);
    }
    else if (figura == "rectangulo"){
        resultado = areasFigurasExp(base, altura);
    }
    else if (figura == "triangulo"){
        resultado = (areasFigurasExp(base, altura))/2;
    }
    else{
        resultado = "Error!!!";
    }
    return resultado;
}