/**
 * Función: Contar números
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function contarNum(pnum){
    let contar = 0;
    let num = pnum;
    while(contar < num){
        contar = contar + 1;
        console.log(contar)
    }
    return "fin";
}

//como Expresión
const contarNumExp = function(pnum){
    let contar = 0;
    let num = pnum;
    while(contar < num){
        contar = contar + 1;
        console.log(contar)
    }
    return "fin";
}