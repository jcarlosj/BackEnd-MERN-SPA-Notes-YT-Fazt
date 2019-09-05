const express = require( 'express' ),       // Importa paquete de Express
      cors = require( 'cors' ),             // Importa paquete de Cors (Intercambio de datos entre servidores)
      app = express();

// Settings
app .set( 'port', process .env .PORT || 4000 );     // app .set() define valores por defecto para la aplicación con el nombre 'port'
                                                    // Considera Puerto para servicios en la nube (Si existe que lo use, si no que use por defecto el 8082)
// Middlewares
app .use( cors() );                                 // Habilita el Cross-origin resource sharing (CORS)
app .use( express .json() );                        // Analiza las solicitudes entrantes con cargas JSON

// Routes
app .get( '/api/notes', ( request, response ) => response .send( 'API Notes' ) );
app .get( '/api/users', ( request, response ) => response .send( 'API Users' ) );

// Export Modulo Express
module .exports = app;
