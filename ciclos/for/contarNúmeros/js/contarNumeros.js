/**
 * Función: Contar números
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function contarNum(pnum){
    let num = pnum;
    for(contar = 1; contar <= num; contar++){
        console.log(contar);
    }
    return "fin";
}

//como Expresión
const contarNumExp = function(pnum){
    let num = pnum;
    for(contar = 1; contar <= num; contar++){
        console.log(contar);
    }
    return "fin";
}