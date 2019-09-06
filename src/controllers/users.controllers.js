/** Users Controllers */
const usersController = {},
      User = require( '../models/User' );       // Importa el Modelo de datos;

// Métodos del Controlador Users
usersController .getUsers = async ( request, response ) => { 
    /** Consulta a la BD: Retornando [ { ... },{ ... },{ ... } ]  -> Array con todos los objetos */
    const users = await User .find();   // Es una operación Asincrona por lo que se puede usar: un callback, una Promesa o en este último caso convertir nuestra funcion en una funcion asincrona
    response .json( users ); 
};

usersController .createUser = async ( request, response ) => { 
    console .log( 'Enviado por el Cliente', request .body );      // Representa los datos que envia el 'cliente'

    const { userName } = request .body,
        
        /** Crea Objeto con el Schema Note */
        newUser = new User({            
            userName
        });

    console .log( 'Objeto Schema User', newUser );

    /** Registra en la BD */
    await newUser .save();              // Es una operación Asíncrona 

    response .json({ message: 'User Saved' });
}

usersController .getUser = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const user = await User .findById( request .params .id );
    console .log( user );
    response .json( user );
}

usersController .updateUser = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL
    const { userName } = request .body;

    const user = await User .findOneAndUpdate( request .params .id, {
        userName
    });
    console .log( user );
    response .json({ message: 'User Updated' });
}

usersController .deleteUser = async ( request, response ) => {

    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const user = await User .findByIdAndDelete( request .params .id );
    console .log( user );
    response .json({ message: 'User Deleted' });
}

module .exports = usersController;