/**
 * Función: Pago Total de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
 */

//con Parámetros
function valorSueldo(pvalorDia, pdiasTrabajados){
    let sueldo;
    let valorDia = pvalorDia;
    let diasTrabajados = pdiasTrabajados;

    sueldo = diasTrabajados * valorDia;
    return sueldo;
}

//como Expresión
const valorSueldoExp = function(pvalorDia, pdiasTrabajados){
    let sueldo;
    let valorDia = pvalorDia;
    let diasTrabajados = pdiasTrabajados;

    sueldo = diasTrabajados * valorDia;
    return sueldo;
}