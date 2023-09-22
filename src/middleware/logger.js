'use strict';

const logger = (req, res, next) => {
    req.log = 'This is a log!';

    next();
};

module.exports = logger;