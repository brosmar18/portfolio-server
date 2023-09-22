'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', logger, (req, res, next) => {
    res.status(200).send(req.log);
});

app.get('/projects', (req, res) => {
    res.status(200).send('Welcome to the projects page!');
});

app.get('/bad', (req, res, next) => {
    next('We have an error');
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
    app.listen(PORT, () => console.log('server is running'));
};

module.exports = { start, app };

