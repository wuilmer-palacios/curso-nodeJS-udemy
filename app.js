const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then(tabla => {
    console.log(`Tabla del ${tabla} creada exitosamente`);
})
.catch(error => {
    console.log(`${error}`);
})



// const [ , , arg3 = 'base=5'] = process.argv;
// const [ ,base=5] = arg3.split('=');