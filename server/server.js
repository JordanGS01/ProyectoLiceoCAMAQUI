const client = require('./connection');
const express = require('express')
const cors = require('cors');

//Inicialización de la app
const app = express();

//Cors se utiliza para poder conectar los dos servidores que se tienen: (client y server)
app.use(cors());

//Puerto en el que estará escuchando el API
app.listen(3300, () => {
    console.log("Server is now listening at port 3300");
})

client.connect();

//Requests a la base de datos
app.get('/aceras', (req, res) => {
    
    const q = 'SELECT id, ST_AsSVG(geom) as svg, descipcion, "Techado", tipo as titulo FROM tec.aceras';
    
    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/zonas_verdes', (req, res) => {

    const q = "SELECT id, ST_AsSVG(geom) as svg, nombre as titulo FROM tec.zonas_verdes";

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/vialidad', (req, res) => {

    const q = "SELECT id, ST_AsSVG(geom) as svg, tipo, nombre as titulo FROM tec.vialidad";

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/edificios', (req, res) => {

    const q = "SELECT id, ST_AsSVG(geom) as svg, nombre as titulo, niveles FROM tec.edificios";

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/zona_segura/:id', (req, res) => {
    const { id } = req.params;

    const q = `SELECT id, id_edificio, ST_AsSVG(geom) AS svg FROM tec.zonas_seguras WHERE id_edificio=${id}`;

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/edificio_zoom/:id', (req, res) => {
    const { id } = req.params;

    const q = `SELECT id, ST_AsSVG(geom) as svg, nombre as titulo, niveles FROM tec.edificios WHERE id=${id}`;

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/dimensiones/:id', (req, res) => {
    const { id } = req.params;

    const q = `SELECT  ST_Xmin(bb) AS xmin,
                    ST_Ymax(bb)*-1 AS ymax,
                    (ST_Xmax(bb) - ST_Xmin(bb))*2 AS ancho,
                    (ST_Ymax(bb) - ST_Ymin(bb))*2 AS alto
                FROM (SELECT ST_Extent(ST_Union(e.geom,zs.geom)) AS bb FROM tec.edificios AS e,
                    (SELECT id_edificio,geom FROM tec.zonas_seguras) AS zs
                    WHERE e.id=${id} and zs.id_edificio=${id}) AS extent`;

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})

app.get('/ruta_evacuacion/:id', (req, res) => {
    const { id } = req.params;

    const q = `SELECT id_edificio AS id, ST_AsSVG(geom) AS svg FROM tec.rutas_evacuacion WHERE id_edificio=${id}`;

    client.query(q, (err, result) => {
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err);
        }
    });
    client.end;

})