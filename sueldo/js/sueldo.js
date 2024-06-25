/**
 * Función: Pago Total de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Martes 16 de abril de 2024
 */

//con Parámetros
function sueldo(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let totalSueldo;

    totalSueldo = diasTrabajados * valorDia;

    return totalSueldo;
}

function salud(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSalud;

    pagoSalud = sueldo(diasTrabajados, valorDia) * 0.12;

    return pagoSalud;
}

function pension(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoPension;

    pagoPension = sueldo(diasTrabajados, valorDia) * 0.16;

    return pagoPension;
}

function arl(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoArl;

    pagoArl = sueldo(diasTrabajados, valorDia) * 0.052;

    return pagoArl;
}

function descuento(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let valorDescuento;
    
    valorDescuento= salud(diasTrabajados, valorDia) + pension(diasTrabajados, valorDia) + arl(diasTrabajados, valorDia);

    return valorDescuento;
}

function pagoTotal(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSueldo;

    pagoSueldo = sueldo(diasTrabajados, valorDia) - descuento(diasTrabajados, valorDia);

    return pagoSueldo;
}

//como Expresión
const sueldoExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let totalSueldo;

    totalSueldo = diasTrabajados * valorDia;

    return totalSueldo;
}

const saludExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSalud;

    pagoSalud = sueldoExp(diasTrabajados, valorDia) * 0.12;

    return pagoSalud;
}

const pensionExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoPension;

    pagoPension = sueldoExp(diasTrabajados, valorDia) * 0.16;

    return pagoPension;
}

const arlExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoArl;

    pagoArl = sueldoExp(diasTrabajados, valorDia) * 0.052;

    return pagoArl;
}

const descuentoExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let valorDescuento;
    
    valorDescuento= saludExp(diasTrabajados, valorDia) + pensionExp(diasTrabajados, valorDia) + arlExp(diasTrabajados, valorDia);

    return valorDescuento;
}

const pagoTotalExp = function(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSueldo;

    pagoSueldo = sueldoExp(diasTrabajados, valorDia) - descuentoExp(diasTrabajados, valorDia);

    return pagoSueldo;
}
