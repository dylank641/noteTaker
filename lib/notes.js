const fs = require('fs');
const path = require('path');

//ADDS NEW NOTE
function newNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArr }, null, 2)
    );
    return note;
}

//DELETES NOTE
function delNote(id, notesArr) {
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
    newNote,
    delNote
};