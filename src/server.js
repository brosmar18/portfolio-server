'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', logger, (req, res, next) => {
    res.status(200).send(req.log);
});

app.get('/projects', (req, res, next) => {
    next('Project route');
});

app.get('*', notFound);

const start = () => {
    app.listen(PORT, () => console.log('server is running'));
};

module.exports = { start, app };

