const { Router } = require( 'express' ),
      router = Router();
      
// Escucha la ruta
router .route( '/' ) 
    .get( ( request, response ) => response .json({ message: 'GET - API Users' }) )         // Recupera todos los recursos (Registros)
    .post( ( request, response ) => response .json({ message: 'POST - API Users' }) )       // Crea o envia una entidad a un recurso en específico 
    
router .route( '/:id' )
    .get( ( request, response ) => response .json({ message: 'GET - API Users' }) )         // Recupera un recurso específico
    .put( ( request, response ) => response .json({ message: 'PUT - API Users' }) )         // Reemplaza el recurso específico de destino
    .delete( ( request, response ) => response .json({ message: 'DELETE - API Users' }) );  // Borra un recurso en específico

module .exports = router;