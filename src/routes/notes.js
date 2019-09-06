const { Router } = require( 'express' ),
      { getNotes, createNote, getNote, updateNote, deleteNote } = require ( '../controllers/notes.controllers' ),
      router = Router();      

// Escucha la ruta
router .route( '/' ) 
    .get( getNotes )        // Recupera todos los recursos (Registros)
    .post( createNote )     // Crea o envia una entidad a un recurso en específico 
    
router .route( '/:id' )
    .get( getNote )         // Recupera un recurso específico
    .put( updateNote )      // Reemplaza el recurso específico de destino
    .delete( deleteNote );  // Borra un recurso en específico

module .exports = router;