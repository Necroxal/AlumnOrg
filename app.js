const expres = require('express');
const app = expres();
const dotenv = require('dotenv');
const db = require('./db');
dotenv.config();

db(process.env.CONEXION);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`El servidor esta escuahndo en el puerto ${PORT}`);
})
