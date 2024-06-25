/**
 * Función: Contar números e indicar si son pares o impares
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function contarNum(pnum){
    let contar = 0;
    let num = pnum;
    while(contar < num){
        contar = contar + 1;
        if(contar%2 == 0){
            console.log(""+contar,"es par");
        }
        else{
            console.log(""+contar,"es impar");
        }
    }
    return "fin";
}

//como Expresión
const contarNumExp = function(pnum){
    let contar = 0;
    let num = pnum;
    while(contar < num){
        contar = contar + 1;
        if(contar%2 == 0){
            console.log(""+contar,"es par");
        }
        else{
            console.log(""+contar,"es impar");
        }
    }
    return "fin";
}