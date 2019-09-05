const { Router } = require( 'express' ),
      router = Router();

// Escucha la ruta
router .route( '/' ) .get( ( request, response ) => response .send( 'API Notes' ) );

module .exports = router;