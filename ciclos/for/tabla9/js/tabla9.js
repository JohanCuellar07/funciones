/**
 * Función: Calcular la tabla del 9 e identificar si
 * el resultado es par o impar
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function calcularTabla(pnumTab, pnumHas){
    let resul;
    let numTab = pnumTab;
    let numHas = pnumHas;
    
    for(cont = 1; cont <= numHas; cont++){
        resul = numTab * cont;
        console.log(""+numTab,"X "+cont,"= "+resul);
        if(resul%2 == 0){
            console.log("resultado par");
        }
        else{
            console.log("resultado impar");
        }
    }
    return "fin";
}

//como Expresión
const calcularTablaExp = function(pnumTab, pnumHas){
    let resul;
    let numTab = pnumTab;
    let numHas = pnumHas;
    
    for(cont = 1; cont <= numHas; cont++){
        resul = numTab * cont;
        console.log(""+numTab,"X "+cont,"= "+resul);
        if(resul%2 == 0){
            console.log("resultado par");
        }
        else{
            console.log("resultado impar");
        }
    }
    return "fin";
}