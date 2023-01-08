const { Router } = require('express');
const router = Router();

//Controllers imports
const { getUserGroups, addGroup, addStudentToGroup,
        deleteGroup, deleteFromGroup } = require('../controllers/grupos.controller')

//Routes

router.get('/grupo/:ced', getUserGroups);

router.post('/grupo', addGroup);

router.post('/agregarAlGrupo', addStudentToGroup);

router.delete('/grupo/:id', deleteGroup);

router.delete('/eliminarDeGrupo', deleteFromGroup);


module.exports = router;