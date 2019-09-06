/** Users Controllers */
const usersController = {};

// Métodos del Controlador Users
usersController .getUsers = ( request, response ) => response .json({ message: 'GET - API Users' });
usersController .createUser = ( request, response ) => response .json({ message: 'POST - API Users' });

usersController .getUser = ( request, response ) => response .json({ message: 'GET (ID) - API User' });
usersController .updateUser = ( request, response ) => response .json({ message: 'PUT (ID) - API Users' });
usersController .deleteUser = ( request, response ) => response .json({ message: 'DELETE (ID) - API Users' })

module .exports = usersController;