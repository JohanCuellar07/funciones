/**
 * Función: Calcular la tabla del 5
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function calcularTabla(pnum){
    let resul, cont;
    let num = pnum;
    for(cont = 1; cont <= num; cont++){
        resul = num * cont;
        console.log(""+num,"X "+cont,"= "+resul);
    }
    return "fin";
}

//como Expresión
const calcularTablaExp = function(pnum){
    let resul, cont;
    let num = pnum;
    for(cont = 1; cont <= num; cont++){
        resul = num * cont;
        console.log(""+num,"X "+cont,"= "+resul);
    }
    return "fin";
}