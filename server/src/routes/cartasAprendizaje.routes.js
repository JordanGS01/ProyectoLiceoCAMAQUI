const { Router } = require('express');
const router = Router();

//Controllers imports
const { addCard, deleteCard, getUserCards,
        modifyCard } = require('../controllers/cartasAprendizaje.controller')

//Routes

router.get('/cartasAprendizaje', getUserCards);

router.post('/cartasAprendizaje', addCard);

router.put('/cartasAprendizaje', modifyCard);

router.delete('/cartasAprendizaje/:id', deleteCard);


module.exports = router;