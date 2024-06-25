/*
 * Función: Indicar si el número es mayor, menor o igual
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
*/

//con Parámetros
function mmNum(pnum1, pnum2){
    let imp;
    let num1 = pnum1;
    let num2 = pnum2;

    if(num1 == num2){
        imp = "Son iguales";
    }
    else if(num1 > num2){
            imp = "es mayor "+num1," y es menor"+num2;
        }
        else{
            imp = "es mayor "+num2," y es menor"+num1;
        }
    return imp;
}

//como Expresión
const mmNumExp = function(pnum1, pnum2){
    let imp;
    let num1 = pnum1;
    let num2 = pnum2;

    if(num1 == num2){
        imp = "Son iguales";
    }
    else if(num1 > num2){
            imp = "es mayor "+num1," y es menor"+num2;
        }
        else{
            imp = "es mayor "+num2," y es menor"+num1;
        }
    return imp;
}