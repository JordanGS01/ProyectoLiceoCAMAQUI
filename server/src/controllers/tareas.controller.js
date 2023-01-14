

const pool = require('../connection')


const getUserTodos = async (req, res, next) => {
    try {
        const { ced } = req.params;
        await pool.query
        (
            "SELECT * FROM tareas WHERE cedula_usuario=$1 ORDER BY id ASC", 
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

const addTodo = async (req, res, next) => {
    const { cedula, titulo, contenido } = req.body;
    
    try {
        await pool.query
        (
            "SELECT create_todo($1,$2,$3)",
            [cedula, titulo, contenido]
        ).then((answer) => {
            const { create_todo } = answer.rows[0];
            
            if ( create_todo ) {
                res.json({
                    status: "OK",
                    message: "Creado correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "No existe un usuario registrado con la cédula ingresada"
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

const modifyTodo = async (req, res, next) => {
    const { cedula, id, titulo, contenido } = req.body;

    try {
        await pool.query
        (
            "SELECT modificar_todo($1,$2,$3,$4)",
            [cedula, id, titulo, contenido]
        ).then((answer) => {
            const { modificar_todo } = answer.rows[0];
            
            if ( modificar_todo ) {
                res.json({
                    status: "OK",
                    message: "Modificado correctamente"
                });
            } else {
                res.json({
                    status: "Fail",
                    message: "No existe un usuario registrado con la cédula ingresada"
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

const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM tareas WHERE id=$1', [id]);
        
        //En caso de que no se encuentre el usuario que se quiere eliminar
        if (result.rowCount === 0){
            return res.status(404).json({
                message: "El TODO no fue encontrado"
            });
        }

        //Se le notifica al servidor que todo funcionó correctamente
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getUserTodos,
    addTodo,
    modifyTodo,
    deleteTodo
}