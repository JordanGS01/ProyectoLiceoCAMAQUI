const { Router } = require('express');
const router = Router();

//Controllers imports
const { getGroupNews, addNew, modifyNew,
        deleteNew } = require('../controllers/noticias.controller')

//Routes

router.get('/noticias/:idGrupo', getGroupNews);

router.post('/noticias', addNew);

router.put('/noticias', modifyNew);

router.delete('/noticias/:id', deleteNew);


module.exports = router;