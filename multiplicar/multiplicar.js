const fs = require('fs');
const colors = require('colors');

let data = '';
let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El parametro introducido ${base} no es un numero`);
    }
    if (!Number(limite)) {
        throw new Error(`El parametro introducido ${base} no es un numero`);
    }
    for (let i = 1; i <= limite; i++) {
        data += (`${base} x ${i} = ${base * i}\n`);
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) throw err;

    });

    return (`tabla-${base}-al-${limite}.txt`);

}
let listarTabla = (base, limite) => {
    console.log(`===========================`.green);
    console.log(`====Tabla del ${base} al ${limite}====`.green);
    console.log(`===========================`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);

    }
}
module.exports = {
    crearArchivo,
    listarTabla
}