const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( tabla, listar, hasta ) => {

    try {
        let salida = `========== Tabla del ${tabla} ==========\n`;
        // colors.bgWhite(salida);
        salida = colors.black.bgWhite(salida);
        
        for (let index = 0; index < hasta; index++) {
            
            salida += `${tabla} x ${index} = ${tabla * index}\n`;
            
        }
        
        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/Tabla del ${tabla}.txt`, salida);

        return tabla;
        
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}