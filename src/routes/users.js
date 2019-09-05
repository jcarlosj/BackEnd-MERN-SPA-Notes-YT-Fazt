const { Router } = require( 'express' ),
      router = Router();

// Escucha la ruta
router .route( '/' ) .get( ( request, response ) => response .send( 'API Users' ) ); 

module .exports = router;