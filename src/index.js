/** Principal File */
const app = require( './app' ),
      port = 8081;

// Inicia la aplicación usando una función Asincrona
async function main() {
    // Ejecuta el Servidor de Node
    await app .listen( port );  
    console .log( `Server on port ${ port }` );
}

main();
