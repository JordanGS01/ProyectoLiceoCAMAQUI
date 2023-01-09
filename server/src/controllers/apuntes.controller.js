

const pool = require('../connection')


const getUserNote = async (req, res, next) => {
    try {
        const { idGrupo, cedula } = req.body;
        await pool.query
        (
            "SELECT * FROM apuntes WHERE id_grupo=$1 AND cedula_usuario=$2", 
            [idGrupo, cedula]
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

const addNote = async (req, res, next) => {
    const { idGrupo, cedula, contenido } = req.body;
    
    try {
        await pool.query
        (
            "SELECT create_apunte($1,$2,$3)",
            [idGrupo, cedula, contenido]
        ).then((answer) => {
            const { create_apunte } = answer.rows[0];
            
            if ( create_apunte ) {
                res.json({
                    status: "OK",
                    message: "Creado correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "El usuario no existe en el grupo referenciado"
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

const modifyNote = async (req, res, next) => {
    const { idNote, idGrupo, cedula, contenido } = req.body;

    try {
        await pool.query
        (
            "SELECT modificar_apunte($1,$2,$3,$4)",
            [idNote, idGrupo, cedula, contenido]
        ).then((answer) => {
            const { modificar_apunte } = answer.rows[0];
            
            if ( modificar_apunte ) {
                res.json({
                    status: "OK",
                    message: "Modificado correctamente"
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

const deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM apuntes WHERE id=$1', [id]);
        
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
    getUserNote,
    addNote,
    modifyNote,
    deleteNote
}