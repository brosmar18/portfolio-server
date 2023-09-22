'use strict';

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
});

const start = () => {
    app.listen(PORT, () => console.log('server is running'));
};

module.exports = { start, app };

