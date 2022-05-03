const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const layoutRoutes = require('./routes/layoutRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', layoutRoutes);

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});