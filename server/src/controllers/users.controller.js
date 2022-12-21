const pool = require('../connection')


const getAllUsers = async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM usuarios')
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
}

const getAllStudents = async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT cedula, nombre_completo, tipo FROM usuarios WHERE tipo = 'E'")
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
}

const getSingleUser = async (req, res) => {
    try {
        const { ced } = req.params;
    
        const result = await pool.query('SELECT cedula, nombre_completo, tipo FROM usuarios WHERE cedula = $1',[ced]);

        //Si el usuario no existe, se retorna un mensaje al cliente
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "El usuario no existe"
            })
        }

        return res.json(result.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
}
//TODO: Modificarlo para que se encripte la contraseña
const addUser = async (req, res) => {
    const { cedula, nombre, tipo, contra } = req.body;
    
    try {
        const result = await pool.query
        (
            "SELECT create_user($1,$2,$3,$4)",
            [cedula, nombre, tipo, contra]
        );
        console.log(result);
        res.json('Se agregó correctamentte');
    } catch (error) {
        res.json({ error: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const result = await pool.query('DELETE FROM usuarios WHERE cedula = $1', [id]);
        
        //En caso de que no se encuentre el usuario que se quiere eliminar
        if (result.rowCount === 0){
            return res.status(404).json({
                message: "El usuario no fue encontrado"
            });
        }

        //Se le notifica al servidor que todo funcionó correctamente
        return res.sendStatus(204);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, tipo, contra } = req.body;

        const result = await pool.query('SELECT update_user($1,$2,$3,$4)', [id, nombre, tipo, contra])
        
        const userFound = result.rows[0].update_user;
        if (!userFound){
            return res.status(404).json({
                message: "El usuario no se ha encontrado"
            })
        }

        return res.json(userFound);
    } catch (error) {
        console.log(error);
    }
}

//TODO: Crear función para validar el login
const loginUser = async (req, res) => {
    try {
        const { ced, contra } = req.body;

        const result = await pool.query('SELECT login_user($1,$2)',[ced,contra]);
        
        //if(result.rows[0])
        if (result.rows[0].login_user.length === 4) {
            return res.status(404).json({
                message: false
            });
        };
        console.log(result);
        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
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