/**
 * Función: Indicar si es menor o mayor de edad
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
 */

//con Parámetros
function mmEdad(pedad){
    let imp;
    let edad = pedad;

    if(edad>=18){
        imp = "mayor de edad";
    }
    else{
        imp = "menor de edad";
    }
    return imp;
}

//como Expresión
const mmEdadExp = function(pedad){
    let imp;
    let edad = pedad;

    if(edad>=18){
        imp = "mayor de edad";
    }
    else{
        imp = "menor de edad";
    }
    return imp;
}