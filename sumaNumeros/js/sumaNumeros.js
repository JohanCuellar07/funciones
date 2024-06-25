/**
 * Función suma de dos números
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
 */

//con Parámetros
function suma(pnumUno, pnumDos){
    let sumar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar + " - Parámetros";
}

//como Expresión
const sumaExp = function(pnumUno, pnumDos){
    let sumar;
    let numUno = pnumUno;
    let numDos = pnumDos;
    sumar = numUno + numDos;
    return sumar + " - Expresión";
}