/**
 * Función: Calcular la tabla del 9 e identificar si
 * el resultado es par o impar
 * Autor: Johan Esteban Cuellar Silva
 * Viernes 12 de abril de 2024
 */

//con Parámetros
function calcularTablas(pnumHasTab, pnumHas){
    let resul;
    let contPar = 0;
    let contImpar = 0;
    let numHasTab = pnumHasTab;
    let numHas = pnumHas;
    
    for(numTab = 1; numTab <= numHasTab; numTab++){
        for(cont = 1; cont <= numHas; cont++){
            resul = numTab * cont;
            console.log(""+numTab,"X "+cont,"= "+resul);
            if(resul%2 == 0){
                contPar = contPar + 1;
                console.log("buzz");
            }
            else{
                contImpar = contImpar + 1;
                console.log("bass");
            }
        }
        cont = 0;
    }
    console.log("resultado pares: "+contPar);
    console.log("resultado impares: "+contImpar);
    return "fin";
}



//como Expresión
const calcularTablasExp = function(pnumHasTab, pnumHas){
    let resul;
    let contPar = 0;
    let contImpar = 0;
    let numHasTab = pnumHasTab;
    let numHas = pnumHas;
    
    for(numTab = 1; numTab <= numHasTab; numTab++){
        for(cont = 1; cont <= numHas; cont++){
            resul = numTab * cont;
            console.log(""+numTab,"X "+cont,"= "+resul);
            if(resul%2 == 0){
                contPar = contPar + 1;
                console.log("buzz");
            }
            else{
                contImpar = contImpar + 1;
                console.log("bass");
            }
        }
        cont = 0;
    }
    console.log("resultado pares: "+contPar);
    console.log("resultado impares: "+contImpar);
    return "fin";
}

console.log(calcularTablas(5, 5));

