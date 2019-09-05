const { Router } = require( 'express' ),
      router = Router();

// Escucha la ruta
router .route( '/' ) 
    .get( ( request, response ) => response .send( 'GET - API Users' ) ) 
    .post( ( request, response ) => response .send( 'POST - API Users' ) )
    .put( ( request, response ) => response .send( 'PUT - API Users' ) )
    .delete( ( request, response ) => response .send( 'DELETE - API Users' ) ); 

module .exports = router;