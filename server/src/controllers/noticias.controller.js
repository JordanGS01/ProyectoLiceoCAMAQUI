

const pool = require('../connection')


const getGroupNews = async (req, res, next) => {
    try {
        const { idGrupo } = req.params;
        await pool.query
        (
            "SELECT * FROM noticias WHERE id_grupo=$1 ORDER BY id ASC", 
            [idGrupo]
        ).then((answer) => {
            res.json({
                status: 'OK',
                data: answer.rows
            });
        }, (error) => {
            res.json({
                status: 'Fail',
                error: error
            });
        });
    } catch (error) {
        next(error);
    }
}

const addNew = async (req, res, next) => {
    const { idGrupo, titulo, contenido } = req.body;
    
    try {
        await pool.query
        (
            "SELECT create_noticia($1,$2,$3)",
            [idGrupo, titulo, contenido]
        ).then((answer) => {
            const { create_noticia } = answer.rows[0];
            
            if ( create_noticia ) {
                res.json({
                    status: "OK",
                    message: "Creada correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "No existe un grupo con el código ingresado"
                });
            }

        }, (error) => {
            res.json({
                status: "Fail",
                message: error
            });
        });
    } catch (error) {
        next(error);
    }
}

const modifyNew = async (req, res, next) => {
    const { idGrupo, idNoticia, titulo, contenido } = req.body;

    try {
        await pool.query
        (
            "SELECT modificar_noticia($1,$2,$3,$4)",
            [idGrupo, idNoticia, titulo, contenido]
        ).then((answer) => {
            const { modificar_noticia } = answer.rows[0];
            
            if ( modificar_noticia ) {
                res.json({
                    status: "OK",
                    message: "Modificada correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "No existe un grupo con el código ingresado"
                });
            }

        }, (error) => {
            res.json({
                status: "Fail",
                message: error
            });
        });
    } catch (error) {
        next(error);
    }
}

const deleteNew = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM noticias WHERE id=$1', [id]);
        
        //En caso de que no se encuentre el usuario que se quiere eliminar
        if (result.rowCount === 0){
            return res.status(404).json({
                message: "La noticia no fue encontrada"
            });
        }

        //Se le notifica al servidor que todo funcionó correctamente
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getGroupNews,
    addNew,
    modifyNew,
    deleteNew
}