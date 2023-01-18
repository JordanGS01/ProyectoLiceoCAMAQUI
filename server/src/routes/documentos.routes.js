const { Router } = require('express');
const router = Router();

//Controllers imports
const { getGroupDocuments, addDocument,
        deleteGroupDocument } = require('../controllers/grupos.controller')

//Routes

router.get('/documentos/:id', getGroupDocuments);

router.post('/documentos', addDocument);

router.delete('/eliminarDeGrupo/:id', deleteGroupDocument);


module.exports = router;