/**
 * Función operaciones 2.0
 * Autor: Johan Esteban Cuellar Silva
 * Lunes 01 de abril de 2024
 */

let numUno;
let numDos;

//con Parámetros

//como Expresión
const suma = function(pnumUno, pnumDos){
    let sumar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar;
}
const resta = function(pnumUno, pnumDos){
    let restar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    restar = numUno - numDos;
    return restar;
}
const multiplicacion = function(pnumUno, pnumDos){
    let multiplicar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    multiplicar = numUno * numDos;
    return multiplicar;
}
const operacion = function(poperador, pnumUno, pnumDos){
    let operador = poperador;
    let resultado;
    numUno = pnumUno;
    numDos = pnumDos

    if(operador == "suma"){
        resultado = suma(numUno, numDos);
    }
    else if(operador == "resta"){
        resultado = resta(numUno, numDos);
    }
    else if(operador == "multiplicacion"){
        resultado = multiplicacion(numUno, numDos);
    }
    else{
        resultado ="Error!!!";
    }
    return resultado;
}
