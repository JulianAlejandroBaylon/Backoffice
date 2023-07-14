require('./config/conexion')

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//admitir tipo de datos
app.use(express.json())

// configurar puerto
app.set('port', port);

app.use('/api', require('./routes'))

app.listen(app.get('port'),(err)=>{
    if(err){
        console.log('error al iniciar el servidor: '+err)
    }else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
})