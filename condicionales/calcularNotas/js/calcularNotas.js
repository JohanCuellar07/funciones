/**
 * Función: Calcular notas
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function calcularPorcen(pnota, pporcen){
    let resul;
    let nota = pnota;
    let porcen = pporcen;
    resul = nota * porcen;

    return resul;
}

function definirNota(psuma){
    let imp;
    let suma = psuma;
    if(suma > 4.5){
        imp = "nota superior";
    }
    else{
        if(suma <= 4.5 && suma > 3.5) {
            imp = "nota buena";
        }
        else{
            if(suma <= 3.5 && suma > 3) {
                imp = "nota media";
            }
            else{
                imp = "nota baja";
            }
        }
    }
    return imp;
}

//como Expresión
const calcularPorcenExp = function(pnota, pporcen){
    let resul;
    let nota = pnota;
    let porcen = pporcen;
    resul = nota * porcen;

    return resul;
}

const definirNotaExp = function(psuma){
    let imp;
    let suma = psuma;
    if(suma > 4.5){
        imp = "nota superior";
    }
    else{
        if(suma <= 4.5 && suma > 3.5) {
            imp = "nota buena";
        }
        else{
            if(suma <= 3.5 && suma > 3) {
                imp = "nota media";
            }
            else{
                imp = "nota baja";
            }
        }
    }
    return imp;
}