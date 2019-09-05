const { Router } = require( 'express' ),
      router = Router();

// Escucha la ruta
router .route( '/' ) 
    .get( ( request, response ) => response .json({ message: 'GET - API Users' }) ) 
    .post( ( request, response ) => response .json({ message: 'POST - API Users' }) )
    .put( ( request, response ) => response .json({ message: 'PUT - API Users' }) )
    .delete( ( request, response ) => response .json({ message: 'DELETE - API Users' }) ); 

module .exports = router;