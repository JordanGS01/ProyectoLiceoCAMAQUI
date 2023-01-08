

const pool = require('../connection')

const getUserGroups = async (req, res, next) => {
    try {
        const { ced } = req.params;
        await pool.query
        (
            "SELECT cedula_usuario, g.nombre FROM relacion_ug as ug, (SELECT * FROM grupos) as g WHERE ug.id_grupo=g.id_grupo AND cedula_usuario=$1", 
            [ced]
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

const addGroup = async (req, res, next) => {
    const { id, nombre, cedulaProfesor } = req.body;
    
    try {
        await pool.query
        (
            "SELECT create_grupo($1,$2,$3)",
            [id, nombre, cedulaProfesor]
        ).then((answer) => {
            const { create_grupo } = answer.rows[0];
            
            if ( create_grupo ) {
                res.json({
                    status: "OK",
                    message: "Agregado correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "Ya existe un usuario con ese número de cédula"
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

const addStudentToGroup = async (req, res, next) => {
    const { id, cedula } = req.body;
    
    try {
        await pool.query
        (
            "SELECT agregar_usuario_a_grupo($1,$2)",
            [id, cedula]
        ).then((answer) => {
            const { agregar_usuario_a_grupo } = answer.rows[0];
            
            if ( agregar_usuario_a_grupo ) {
                res.json({
                    status: "OK",
                    message: "Agregado correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "El usuario no existe"
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

const deleteGroup = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM grupos WHERE id_grupo=$1', [id]);
        
        //En caso de que no se encuentre el usuario que se quiere eliminar
        if (result.rowCount === 0){
            return res.status(404).json({
                message: "El usuario no fue encontrado"
            });
        }

        //Se le notifica al servidor que todo funcionó correctamente
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const deleteFromGroup = async (req, res, next) => {
    const { id, cedula } = req.body;
    
    try {
        await pool.query
        (
            "SELECT eliminar_usuario_de_grupo($1,$2)",
            [id, cedula]
        ).then((answer) => {
            const { eliminar_usuario_de_grupo } = answer.rows[0];
            
            if ( eliminar_usuario_de_grupo ) {
                res.json({
                    status: "OK",
                    message: "Eliminado correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "No se encontró el usuario que desea eliminar"
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

module.exports = {
    getUserGroups,
    addGroup,
    addStudentToGroup,
    deleteGroup,
    deleteFromGroup
}