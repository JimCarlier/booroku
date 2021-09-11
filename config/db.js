require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGOD_URI,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,

            }
            )
            console.log('Hors ligne mais connecté')    
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connection;