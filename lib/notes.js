//NEEDS TO BE CHANGED

const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArr }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
        return false;
    }
    if (!note.text || typeof note.species !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(id, notesArr) {
    for (i = 0; i < notesArr.length; i++) {
        if (notesArr[i].id === id) {
            var result = i;
        }
    }
    notesArr.splice(result, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArr }, null, 2)
    );
};

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
};