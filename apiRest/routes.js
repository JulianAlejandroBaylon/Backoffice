const routes = require('express').Router();
const conexion = require('./config/conexion');

//Asignamos las rutas
//Metodo get
routes.get('/', (req, res)=>{
    let sql = 'select * from Users'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//metodo get unico
routes.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'select * from Users where id = ?'
    conexion.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//metodo agregar
routes.post('/', (req, res)=>{
    const{nick, name, rol, stat} = req.body

    let sql = `insert into Users(nick, name, rol, stat) values('${nick}', '${name}', '${rol}', '${stat}')`
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Usuario agregado'})
            console.log("Datos insertados")
        }
    })
})
//Delete
routes.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from Users where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario eliminado'})
        }
    })
});

//actualizar
routes.put('/:id',(req, res)=>{
    const{id}=req.params
    const{name, nick, rol, stat} = req.body

    let sql = `update Users set
                name ='${name}',
                nick='${nick}',
                rol='${rol}',
                stat='${stat}'
                where id = '${id}'`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario modificado'})
        }
    })

})

module.exports= routes;
