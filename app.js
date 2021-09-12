require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const conkt = require('./config/db');
conkt()


app.use('/user', cors(), require('./routes/userRoute'))
app.use('/', cors(), require('./routes/profileRoute'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(process.env.MONGOD_URI)
    console.log(`Serving running on ${PORT}`)
})