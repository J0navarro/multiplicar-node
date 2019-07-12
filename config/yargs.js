const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Impriime una tabla de multiplicar', opts)
    .command('crear', 'Impriime una tabla de multiplicar en un archivo txt y muestra el mensaje de exito', opts)
    .help()
    .argv;

module.exports = {
    argv
}