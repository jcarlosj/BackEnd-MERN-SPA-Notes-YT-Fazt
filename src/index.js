/** Principal File */
require( 'dotenv' ) .config();  // Importa el paquete para obtener las variables de entorno para SO
const app = require( './app' ), // Importa Express a la Aplicación
      port = process .env .MONGODB_PORT               // 'process': Objeto global de Node
        ? process .env .MONGODB_PORT                  //    En el root del proyecto se debe crear el archivo .env con las variables de entorno deseadas (No debe agregarse al repositorio por seguridad)
        : 8082;  
require( './database' );        // Importa la base de datos

// Inicia la aplicación usando una función Asincrona
async function main() {
    // Ejecuta el Servidor de Node
    await app .listen( port );  
    console .log( `Server on port ${ port }` );
}

main();
