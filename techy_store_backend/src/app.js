require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors());
app.use(express.json())

const createHttpError = require('http-errors')

const orderRouter = require('./routes/order')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const reviewRouter = require('./routes/review')
const messageRouter = require('./routes/message')
const cartItemRouter = require('./routes/cartItem')

app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);
app.use('/api/cartItems', cartItemRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use('/api/reviews', reviewRouter);

app.use((err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(err.status).send({ message: err.message || "Error Unkown"})
    }
})

module.exports = app;

