const { Router } = require('express');
const router = Router();

//Controllers imports
const { getUserTodos, addTodo, modifyTodo,
        deleteTodo } = require('../controllers/tareas.controller')

//Routes

router.get('/tareas/:ced', getUserTodos);

router.post('/tareas', addTodo);

router.put('/tareas', modifyTodo);

router.delete('/tareas/:id', deleteTodo);


module.exports = router;