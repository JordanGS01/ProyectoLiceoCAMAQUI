const { Router } = require('express');
const router = Router();

//Controllers imports
const { getFiles} = require('../controllers/documentos.controller')

//Routes

router.get('documentos/:idCurso', getFiles);


module.exports = router;