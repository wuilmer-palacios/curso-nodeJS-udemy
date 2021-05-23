const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption:true,
        describe: 'Es la base para la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type:'number',
        default: 11,
        describe: 'Hasta que numero se hace multiplicara la base'
    })
    .check((argv, option)=> {
        if (isNaN(argv.b)) {
            throw 'El valor debe ser numerico';
        }
        else{
            return true
        }
    })
    .argv;

module.exports = argv; 