const { Router } = require('express');
const router = Router();

//Controllers imports
const { addNote, deleteNote, getUserNote,
        modifyNote } = require('../controllers/apuntes.controller')

//Routes

router.get('/apuntes', getUserNote);

router.post('/apuntes', addNote);

router.put('/apuntes', modifyNote);

router.delete('/apuntes/:id', deleteNote);


module.exports = router;