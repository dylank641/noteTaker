let path = require('path');
let router = require('express').Router();


// ROUTE TO GET TO HOME PAGE
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


// ROUTE TO GET TO NOTES PAGE
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;