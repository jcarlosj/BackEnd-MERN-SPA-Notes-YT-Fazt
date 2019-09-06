/** Note Model */
const { Schema, model } = require( 'mongoose' );        // Usamos mongoose para modelar los datos. También podriamos hacerlo usando una clase

// Este Schema representará una colección en nuestra base de datos
const noteSchema = new Schema({
    title: String,          // Tipo String
    content: {
        type: String,       // Tipo String
        required: true      // Requerido / Obligatorio
    },  
    author: String          // Tipo String
}, {
    timestamps: true        // Crea la fecha de creación y la fecha de actualización 
});

// El nombre que tomará nuestra colección será notes, el plural del nombre de nuestro modelo en minúsculas
module .exports = model( 'Note', noteSchema );    // Asocia el Esquema de Mongoose al Modelo y lo exporta 