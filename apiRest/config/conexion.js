const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:  '127.0.0.1',
    user: 'root',
    password: 'Vrakka.com!',
    port: 3306,
    database: 'Vrakka'
});

conexion.connect((err)=> {
    if(err){
        console.log('Error en la conexion', err)
    }else{
        console.log('Conexion efectiva')
    }
})

module.exports= conexion;