const pool = require('../connection')


const getAllUsers = (req, res) => {
    res.send('retrieven a list of users')
}

const getSingleUser = (req, res) => {
    res.send('Trayendo la info de un usuario')
}

const addUser = async (req, res) => {
    const { cedula, nombre, tipo, contra } = req.body;
    
    const result = await pool.query
    (
        "INSERT INTO usuarios (cedula,nombre_completo,tipo,contra) VALUES ($1,$2,$3,$4)",
        [cedula, nombre, tipo, contra]
    );
    
    res.send('Creando la info de la base de datos')
}

const deleteUser = (req, res) => {
    res.send('Eliminando la info de la base de datos')
}

const updateUser = (req, res) => {
    res.send('Actualizando la info de la base de datos')
}

module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    deleteUser,
    updateUser,
}