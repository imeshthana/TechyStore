const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).send('Token not provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        res.status(400).send('Invalid token');
    }
    return next();
}

// const jwt = require('jsonwebtoken');

// const jwtMiddleware = (req, res, next) => {
//     const token = req.headers['x-access-token'];

//     if (!token) {
//         return res.status(401).send('Token not provided');
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         return res.status(400).send('Invalid token');
//     }
// };

// module.exports = jwtMiddleware;
