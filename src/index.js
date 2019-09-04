/** Principal File */
const app = require( './app' ), // Importa Express a la Aplicación
      port = 8081;
require( './database' );        // Importa la base de datos

// Inicia la aplicación usando una función Asincrona
async function main() {
    // Ejecuta el Servidor de Node
    await app .listen( port );  
    console .log( `Server on port ${ port }` );
}

main();
