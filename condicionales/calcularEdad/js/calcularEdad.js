/**
 * Función: Calcular la edad de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
 */

//con Parámetros
function calcularEdad(panioAct, panioNac){
    let edad;
    let anioAct = panioAct;
    let anioNac = panioNac;

    edad = anioAct - anioNac;

    return edad;
}

function indicarEdad(panioAct, panioNac){
    let imp;
    let anioAct = panioAct;
    let anioNac = panioNac;
    let edad = calcularEdad(anioAct, anioNac);

    if(edad>17){
        imp = "mayor de edad";
    }
    else{
        imp = "menor de edad";
    }
    return imp;
}

//como Expresión
const calcularEdadExp = function(panioAct, panioNac){
    let edad;
    let anioAct = panioAct;
    let anioNac = panioNac;

    edad = anioAct - anioNac;

    return edad;
}

const indicarEdadExp = function(panioAct, panioNac){
    let imp;
    let anioAct = panioAct;
    let anioNac = panioNac;
    let edad = calcularEdadExp(anioAct, anioNac);

    if(edad>17){
        imp = "mayor de edad";
    }
    else{
        imp = "menor de edad";
    }
    return imp;
}