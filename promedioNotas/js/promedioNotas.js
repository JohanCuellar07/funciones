/**
 * Función: Promedio de notas
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
 */

//con Parámetros
function promedio(pnota1,pnota2,pnota3){
    let promediar;
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;

    promediar = (nota1 + nota2 + nota3) / 3;
    return promediar + " Parámetros";
}

//como Expresión
const promedioExp = function(pnota1,pnota2,pnota3){
    let promediar;
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;

    promediar = (nota1 + nota2 + nota3) / 3;
    return promediar + " Expresión";
}