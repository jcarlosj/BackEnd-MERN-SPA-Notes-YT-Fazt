/** Notes Controllers */
const notesController = {};

// Métodos del Controlador Users
notesController .getNotes = ( request, response ) => response .json({ message: 'GET - API Notes' });
notesController .createNote = ( request, response ) => response .json({ message: 'POST - API Notes' });

notesController .getNote = ( request, response ) => response .json({ message: 'GET (ID) - API Note' });
notesController .updateNote = ( request, response ) => response .json({ message: 'PUT (ID) - API Notes' });
notesController .deleteNote = ( request, response ) => response .json({ message: 'DELETE (ID) - API Notes' })

module .exports = notesController;