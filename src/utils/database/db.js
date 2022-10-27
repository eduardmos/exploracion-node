const mongoose = require ('mongoose');

//Ruta de la base de datos.Esta es local,podria ser la ruta de mongo atlas.
const DB_URL = 'mongodb://localhost:27017/dragon-ball';

//comprobacion
if(!DB_URL) throw new Error('No se encuentra la URL a la base de datos');

const connectDb = async () => {
    try{
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
//probamos que funciona con el console.log
    console.log(`conectado con exito a la db ${name} en ${host}`);
    }catch(error){
    console.log('error conectando a la base de datos', error)
    }
};

module.exports = {
    connectDb,
    DB_URL,
}
