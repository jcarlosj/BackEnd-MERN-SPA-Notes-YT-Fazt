const mongoose = require( 'mongoose' ),             // Importa paquete 'mongoose' (ORM) para MongoDB
      URI = 'mongodb://localhost/mern-stack';       // 'mern-stack': Nombre de la base de datos (se creará si no existe)

// Conexión a una instancia o servidor de MongoDB
mongoose .connect( URI, {
    useCreateIndex: true,       // Falso por defecto. Configurado para truehacer que la compilación de índice predeterminada de Mongoose se use en createIndex()
    useNewUrlParser: true,      // Bandera para permitir a los usuarios recurrir al antiguo analizador (Controlador DB MongoDB)
});

const connection = mongoose .connection;

// Valida si la conexión se abre
connection .once( 'open', () =>  {
    console .log( `Base de datos conectada` );
});