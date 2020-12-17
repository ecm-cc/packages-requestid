module.exports = requestId;

const { v4: uuidv4 } = require('uuid');

const reqIdHeader = 'x-dv-request-id';

function requestId(req, res, next) {
    req.requestId = req.get(reqIdHeader) || uuidv4();
    next();
}
