let router = require('express').Router();
let { v4: uuidv4 } = require('uuid');
let { newNote, delNote } = require('../../lib/notes');
let { notesArr } = require('../../db/db.json');


// ROUTE TO GET NOTES
router.get('/notes', (req, res) => {
    res.json(notesArr);
});

// ROUTE TO POST NOTEES
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4();

    const note = newNote(req.body, notesArr);
    res.json(note);

});

// DELETE NOTES ROUTE
router.delete('/notes/:id', (req, res) => {
    const result = delNote(req.params.id, notesArr);
    res.json(result);
});

module.exports = router;