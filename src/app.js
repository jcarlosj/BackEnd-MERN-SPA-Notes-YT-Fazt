/** Define el 'Express Framework' */
const express = require( 'express' ),
      app = express();

// Settings
app .set( 'port', process .env .PORT || 4000 );     // app .set() define valores por defecto para la aplicación con el nombre 'port'
                                                    // Considera Puerto para servicios en la nube (Si existe que lo use, si no que use por defecto el 8082)
module .exports = app;
