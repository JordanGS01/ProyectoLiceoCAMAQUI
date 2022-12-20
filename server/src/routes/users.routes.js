const { Router } = require('express');
const router = Router();

//Controllers imports
const { getAllUsers, getSingleUser, 
        addUser, deleteUser, updateUser } = require('../controllers/users.controller')

//Routes
router.get('/users', getAllUsers)

router.get('/users/10', getSingleUser)

router.post('/users', addUser)

router.delete('/users', deleteUser)

router.put('/users', updateUser)


module.exports = router;