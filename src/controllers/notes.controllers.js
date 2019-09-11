/** Notes Controllers */
const notesController = {},
      Note = require( '../models/Note' );       // Importa el Modelo de datos

// Métodos del Controlador Users
notesController .getNotes = async( request, response ) => {
    /** Consulta a la BD: Retornando [ { ... },{ ... },{ ... } ]  -> Array con todos los objetos */
    const notes = await Note .find();   // Es una operación Asincrona por lo que se puede usar: un callback, una Promesa o en este último caso convertir nuestra funcion en una funcion asincrona
    response .json( notes );
}

notesController .createNote = async ( request, response ) => {
    console .log( 'Enviado por el Cliente', request .body );      // Representa los datos que envia el 'cliente'

    const { author, title, content, date } = request .body,
        
        /** Crea Objeto con el Schema Note */
        newNote = new Note({            
            author: author,
            title: title,
            content: content,
            date: date,
        });

    console .log( 'Objeto Schema Note', newNote );

    /** Registra en la BD */
    await newNote .save();              // Es una operación Asíncrona 

    response .json({ message: 'Note Saved' });
}

notesController .getNote = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const note = await Note .findById( request .params .id );
    console .log( note );
    response .json( note );
}

notesController .updateNote = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL
    const { author, title, content, date } = request .body;

    const note = await Note .findOneAndUpdate( request .params .id, {
        title: title,       // Forma clasica de asignar un valor
        author,             // Forma ES6
        content,
        date
    });
    console .log( note );
    response .json({ message: 'Note Updated' });
}

notesController .deleteNote = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const note = await Note .findByIdAndDelete( request .params .id );
    console .log( note );
    response .json({ message: 'Note Deleted' });
}


module .exports = notesController;