/**
 * require
 */

const colors = require('colors');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);
let comando = argv._[0];
console.log(argv);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log('Archivo creado:' + colors.green(`${archivo}`));
        }).catch(e => console.log(e));
        break;

    default:
        console.log('No se reconoce este comando');
        break;
}