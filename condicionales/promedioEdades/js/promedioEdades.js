/**
 * Función: Calcular la edad de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function calcularEdad(panioAct, panioNac){
    let edad;
    let anioAct = panioAct;
    let anioNac = panioNac;
    edad = anioAct - anioNac;
    return edad;
}

function definirEdad(pedad){
    let impEdad;
    let edad = pedad;
    let promedio = pedad;
    if(edad>17 || promedio>17){
        impEdad = "mayor de edad";
    }
    else{
        impEdad = "menor de edad";
    }
    return impEdad;
}

//como Expresión
const calcularEdadExp = function(panioAct, panioNac){
    let edad;
    let anioAct = panioAct;
    let anioNac = panioNac;
    edad = anioAct - anioNac;
    return edad;
}

const definirEdadExp = function(pedad){
    let impEdad;
    let edad = pedad;
    let promedio = pedad;
    if(edad>17 || promedio>17){
        impEdad = "mayor de edad";
    }
    else{
        impEdad = "menor de edad";
    }
    return impEdad;
}