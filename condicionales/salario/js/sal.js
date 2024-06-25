/**
 * Función: Pago Total de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Martes 16 de abril de 2024
 */

//con Parámetros
function salario(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let totalSalario;

    totalSalario = diasTrabajados * valorDia;

    return totalSalario;
}

function salud(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSalud;

    pagoSalud = salario(diasTrabajados, valorDia) * 0.12;

    return pagoSalud;
}

function pension(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoPension;

    pagoPension = salario(diasTrabajados, valorDia) * 0.16;

    return pagoPension;
}

function arl(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoArl;

    pagoArl = salario(diasTrabajados, valorDia) * 0.052;

    return pagoArl;
}

function deducibles(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoDeducibles;
    
    pagoDeducibles = salud(diasTrabajados, valorDia) + pension(diasTrabajados, valorDia) + arl(diasTrabajados, valorDia);

    return pagoDeducibles;
}

function subsidioTra(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let subsidioTrans = salario(diasTrabajados, valorDia);
    let subsidioTransporte;

    if (subsidioTrans <= 2 * salarioMin){
        subsidioTransporte = 162000;
    }
    else{
        subsidioTransporte = 0;
    }

    return subsidioTransporte;
}

function retencion(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let valorRet = salario(diasTrabajados, valorDia);
    let valorRetencion;

    if (valorRet <= 4 * salarioMin){
        valorRetencion = valorRet * 0.04;
    }
    else{
        valorRetencion = 0;
    }

    return valorRetencion;
}

function pagoTotal(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSueldo;

    pagoSueldo = salario(diasTrabajados, valorDia) + subsidioTra(diasTrabajados, valorDia) - retencion(diasTrabajados, valorDia) - deducibles(diasTrabajados, valorDia);

    return pagoSueldo;
}

//como Expresión
const salarioExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let totalSalario;

    totalSalario = diasTrabajados * valorDia;

    return totalSalario;
}

const saludExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSalud;

    pagoSalud = salarioExp(diasTrabajados, valorDia) * 0.12;

    return pagoSalud;
}

const pensionExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoPension;

    pagoPension = salarioExp(diasTrabajados, valorDia) * 0.16;

    return pagoPension;
}

const arlExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoArl;

    pagoArl = salarioExp(diasTrabajados, valorDia) * 0.052;

    return pagoArl;
}

const deduciblesExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoDeducibles;
    
    pagoDeducibles = saludExp(diasTrabajados, valorDia) + pensionExp(diasTrabajados, valorDia) + arlExp(diasTrabajados, valorDia);

    return pagoDeducibles;
}

const subsidioTraExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let subsidioTrans = salarioExp(diasTrabajados, valorDia);
    let subsidioTransporte;

    if (subsidioTrans <= 2 * salarioMin){
        subsidioTransporte = 162000;
    }
    else{
        subsidioTransporte = 0;
    }

    return subsidioTransporte;
}

const retencionExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let valorRet = salarioExp(diasTrabajados, valorDia);
    let valorRetencion;

    if (valorRet <= 4 * salarioMin){
        valorRetencion = valorRet * 0.04;
    }
    else{
        valorRetencion = 0;
    }

    return valorRetencion;
}

const pagoTotalExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSueldo;

    pagoSueldo = salarioExp(diasTrabajados, valorDia) + subsidioTraExp(diasTrabajados, valorDia) - retencionExp(diasTrabajados, valorDia) - deduciblesExp(diasTrabajados, valorDia);

    return pagoSueldo;
}