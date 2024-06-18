const express = require('express');
const jwtMiddleware = require('../middlewares/verifyToken'); // Import your middleware

const router = express.Router();

protectedRouter.use(jwtMiddleware);

protectedRouter.get('/protected-resource', (req, res) => {
    const userId = req.user.user_id;

    res.status(200).send(`Protected resource for user ID: ${userId}`);
});

module.exports = router;
