const { Router } = require('express');
const router = Router();

//Controllers imports
const { getUserGroups, getGroupStudents, addGroup, addStudentToGroup,
        deleteGroup, deleteFromGroup } = require('../controllers/grupos.controller')

//Routes

router.get('/grupo/:ced', getUserGroups);

router.get('/groupStudents/:id', getGroupStudents)

router.post('/grupo', addGroup);

router.post('/agregarAlGrupo', addStudentToGroup);

router.delete('/grupo/:id', deleteGroup);

router.delete('/eliminarDeGrupo/:id/:cedula', deleteFromGroup);


module.exports = router;