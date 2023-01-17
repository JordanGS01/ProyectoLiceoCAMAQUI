

const pool = require('../connection')


const getUserCards = async (req, res, next) => {
    try {
        const { idGrupo, cedula } = req.params;
        await pool.query
        (
            "SELECT * FROM cartas_aprendizaje WHERE id_grupo=$1 AND cedula_usuario=$2 ORDER BY id ASC", 
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

const addCard = async (req, res, next) => {
    const { idGrupo, cedula, pregunta, respuesta } = req.body;
    
    try {
        await pool.query
        (
            "SELECT create_carta_apredizaje($1,$2,$3,$4)",
            [idGrupo, cedula, pregunta, respuesta]
        ).then((answer) => {
            const { create_carta_apredizaje } = answer.rows[0];
            
            if ( create_carta_apredizaje ) {
                res.json({
                    status: "OK",
                    message: "Creada correctamente"
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

const modifyCard = async (req, res, next) => {
    const { idCard, idGrupo, cedula, pregunta, respuesta } = req.body;

    try {
        await pool.query
        (
            "SELECT modificar_carta_aprendizaje($1,$2,$3,$4,$5)",
            [idCard, idGrupo, cedula, pregunta, respuesta]
        ).then((answer) => {
            const { modificar_carta_aprendizaje } = answer.rows[0];
            
            if ( modificar_carta_aprendizaje ) {
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

const deleteCard = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM cartas_aprendizaje WHERE id=$1', [id]);
        
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
    getUserCards,
    addCard,
    modifyCard,
    deleteCard
}