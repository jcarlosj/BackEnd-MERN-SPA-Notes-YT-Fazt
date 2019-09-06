const { Router } = require( 'express' ),
      { getUsers, createUser, getUser, updateUser, deleteUser } = require ( '../controllers/users.controllers' ),
      router = Router();      

// Escucha la ruta
router .route( '/' ) 
    .get( getUsers )        // Recupera todos los recursos (Registros)
    .post( createUser )     // Crea o envia una entidad a un recurso en específico 
    
router .route( '/:id' )
    .get( getUser )         // Recupera un recurso específico
    .put( updateUser )      // Reemplaza el recurso específico de destino
    .delete( deleteUser );  // Borra un recurso en específico

module .exports = router;