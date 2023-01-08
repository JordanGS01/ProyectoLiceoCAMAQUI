const { Router } = require('express');
const router = Router();

//Controllers imports
const { getUserGroups, addGroup, addStudentToGroup,
        deleteGroup, deleteFromGroup } = require('../controllers/grupos.controller')

//Routes
//INCOMPLETO
router.get('/grupo/:ced', getUserGroups);
//INCOMPLETO
router.post('/grupo', addGroup);
//INCOMPLETO
router.post('/agregarAlGrupo', addStudentToGroup);
//INCOMPLETO
router.delete('/grupo/:id', deleteGroup);
//INCOMPLETO
router.delete('/eliminarDeGrupo', deleteFromGroup);


module.exports = router;