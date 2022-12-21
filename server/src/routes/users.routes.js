const { Router } = require('express');
const router = Router();

//Controllers imports
const { getAllUsers, getSingleUser, 
        addUser, deleteUser, updateUser,
        getAllStudents, loginUser } = require('../controllers/users.controller')

//Routes
router.get('/users', getAllUsers);

router.get('/students', getAllStudents);

router.get('/login', loginUser);

router.get('/users/:ced', getSingleUser);

router.post('/users', addUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);


module.exports = router;