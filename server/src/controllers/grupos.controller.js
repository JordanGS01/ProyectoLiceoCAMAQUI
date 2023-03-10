

const pool = require('../connection')

const getUserGroups = async (req, res, next) => {
    try {
        const { ced } = req.params;
        await pool.query
        (
            "SELECT cedula_usuario, g.nombre, g.id_grupo FROM relacion_ug as ug, (SELECT * FROM grupos) as g WHERE ug.id_grupo=g.id_grupo AND cedula_usuario=$1", 
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

const getGroupStudents = async (req, res, next) => {
    try {
        const { id } = req.params;
        await pool.query
        (
            "SELECT cedula_usuario, g.nombre, g.id_grupo, u.nombre_completo FROM relacion_ug as ug, (SELECT * FROM grupos) AS g, (SELECT * FROM usuarios) AS u WHERE (ug.id_grupo=g.id_grupo AND ug.cedula_usuario=u.cedula AND ug.id_grupo=$1 AND u.tipo='E')", 
            [id]
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

const getGroupProfessor = async (req, res, next) => {
    try {
        const { id } = req.params;
        await pool.query
        (
            "SELECT u.nombre_completo as nombre FROM relacion_ug as ug, (SELECT * FROM grupos) AS g, (SELECT * FROM usuarios) AS u WHERE (ug.id_grupo=g.id_grupo AND ug.cedula_usuario=u.cedula AND ug.id_grupo=$1 AND u.tipo='P')", 
            [id]
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
                    message: "Ya existe un usuario con ese n??mero de c??dula"
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
                    message: "Usuario agregado correctamente"
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
                message: "El grupo no fue encontrado"
            });
        }

        //Se le notifica al servidor que todo funcion?? correctamente
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

const deleteFromGroup = async (req, res, next) => {
    const { id, cedula } = req.params;
    
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
                    message: "No se encontr?? el usuario que desea eliminar"
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
    getGroupStudents,
    getGroupProfessor,
    addGroup,
    addStudentToGroup,
    deleteGroup,
    deleteFromGroup
}