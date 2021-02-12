/*----------------------------------------------------------------------/
/   Autor: Ismael Gutierrez Casao
/   Descripción: Este programa recoge un archivo y lo convierte en un
/                archivo DVM.
/
/
/
/*----------------------------------------------------------------------*/

var readline = require('readline');
const funciones = require('./functions');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Qué archivo quieres leer ? ', function (respuesta) {
    

            console.log("\n");
            funciones.leer_archivo(respuesta);
            console.log("\n");

    rl.close();
  });



