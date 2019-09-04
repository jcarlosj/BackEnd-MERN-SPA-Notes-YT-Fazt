/** Principal File */
const app = require( './app' ),
      port = 8081;

// Ejecuta el Servidor de Node
app .listen( port, () => {
    console .log( `Server on port ${ port }` );
});