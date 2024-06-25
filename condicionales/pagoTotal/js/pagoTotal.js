/**
 * Función: Pago Total de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Martes 02 de abril de 2024
 */

//con Parámetros
function valorSalarioTot(psalario){
    let salario = psalario;
    salud = salario * 0.12;
    pension = salario * 0.16;
    arl = salario * 0.052;
    
    deducibles = salud + pension + arl;
    retencion = salario * 0.04;
    
    if(salario > salarioMin * 2){
        salarioSub = salario + subsidioTra;
    }
    else{
        salarioSub = salario;
    }
    if(salario > salarioMin * 4){
        salarioRet =salarioSub - retencion;
    }
    else{
        salarioRet = salarioSub;
    }
    pagoTotal = salarioRet - deducibles;
    
    console.log("salario: "+salario);
    console.log("subsidio de transporte: "+subsidioTra);
    console.log("salud: "+salud);
    console.log("pension: "+pension);
    console.log("arl: "+arl);
    console.log("retencion: "+retencion);
    console.log("deducibles: "+deducibles);
    return pagoTotal;
}

//como Expresión
const valorSalarioTotExp = function(psalario){
    let salario = psalario;
    salud = salario * 0.12;
    pension = salario * 0.16;
    arl = salario * 0.052;
    
    deducibles = salud + pension + arl;
    retencion = salario * 0.04;
    
    if(salario > salarioMin * 2){
        salarioSub = salario + subsidioTra;
    }
    else{
        salarioSub = salario;
    }
    if(salario > salarioMin * 4){
        salarioRet =salarioSub - retencion;
    }
    else{
        salarioRet = salarioSub;
    }
    pagoTotal = salarioRet - deducibles;
    
    console.log("salario: "+salario);
    console.log("subsidio de transporte: "+subsidioTra);
    console.log("salud: "+salud);
    console.log("pension: "+pension);
    console.log("arl: "+arl);
    console.log("retencion: "+retencion);
    console.log("deducibles: "+deducibles);
    return pagoTotal;
}

console.log("Pago Total: "+valorSalarioTotExp(salario));
