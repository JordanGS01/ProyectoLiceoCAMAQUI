const pool = require('../connection')


const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await pool.query("SELECT cedula, nombre_completo, tipo FROM usuarios WHERE tipo!='A'")
        
        res.json({
            status: 'OK',
            data: allUsers.rows
        });
    } catch (error) {
        next(error);
    }
}

const getAllStudents = async (req, res, next) => {
    try {
        const allStudents = await pool.query("SELECT cedula, nombre_completo, tipo FROM usuarios WHERE tipo = 'E'")
        
        res.json({
            status: 'OK',
            data: allStudents.rows
        });
    } catch (error) {
        next(error);
    }
}

const getSingleUser = async (req, res, next) => {
    try {
        const { ced } = req.params;
    
        const result = await pool.query('SELECT cedula, nombre_completo, tipo FROM usuarios WHERE cedula = $1',[ced]);

        //Si el usuario no existe, se retorna un mensaje al cliente
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "El usuario no existe"
            })
        }

        return res.json({
            student: result.rows[0]
        });

    } catch (error) {
        next(error);
    }
}

const addUser = async (req, res, next) => {
    const { cedula, nombre, tipo, contra } = req.body;
    
    try {
        const result = await pool.query
        (
            "SELECT create_user($1,$2,$3,$4)",
            [cedula, nombre, tipo, contra]
        );
        
        res.json({
            status: "OK",
            message: "Agregado correctamente"
        });
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { ced } = req.params;
        const result = await pool.query('DELETE FROM usuarios WHERE cedula = $1', [ced]);
        
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

const updateUser = async (req, res, next) => {
    try {
        const { ced } = req.params;
        const { nombre, tipo } = req.body;
        const { contra } = req.headers;

        const result = await pool.query('SELECT update_user($1,$2,$3,$4)', [ced, nombre, tipo, contra])
        
        const userFound = result.rows[0].update_user;
        if (!userFound){
            return res.status(404).json({
                message: "El usuario no se ha encontrado"
            })
        }

        return res.json({
            modified: userFound
        });
    } catch (error) {
        next(error);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { cedula, contra } = req.headers;
        
        const result = await pool.query('SELECT login_user($1,$2)',[cedula,contra]);
        
        if (result.rows[0].login_user.length === 4) {
            return res.status(404).json({
                message: false
            });
        };
        
        const { login_user } = result.rows[0];
        const dataWithoutPI = login_user.replace('(','');
        const dataWithoutPD = dataWithoutPI.replace(')','');
        const arrWithUserData = dataWithoutPD.split(',');
        const userData = {
            nombre: arrWithUserData[1],
            cedula: arrWithUserData[0],
            tipo: arrWithUserData[2]
        }

        return res.json(userData);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    deleteUser,
    updateUser,
    getAllStudents,
    loginUser,
}