'use strict';

const logger = (req, res, next) => {
    req.log = 'Logger middleware!';

    next();
};

module.exports = logger;