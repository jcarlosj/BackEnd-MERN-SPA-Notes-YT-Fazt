/** User Model */
const { Schema, model } = require( 'mongoose' );        // Usamos mongoose para modelar los datos. También podriamos hacerlo usando una clase

// Este Schema representará una colección en nuestra base de datos
const userSchema = new Schema({
    userName: {
        type: String,       // Tipo String
        required: true,     // Requerido / Obligatorio
        trim: true,         // Propiedad que elimina espacios al principio/final de una cadena y espacios duplicados entre palabras 
        unique: true        // Campo con valor único (no se debe repetir)
    }
}, {
    timestamps: true        // Crea la fecha de creación y la fecha de actualización 
});
// El nombre que tomará nuestra colección será users, el plural del nombre de nuestro modelo en minúsculas
module .exports = model( 'User', userSchema );      // Asocia el Esquema de Mongoose al Modelo y lo exporta 