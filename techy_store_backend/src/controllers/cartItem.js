const createHttpError = require('http-errors')
const CartItem = require('../models/cartItem')
const mongoose = require('mongoose')

exports.addToCart = async(req, res, next) => {
    const {
        item,
        price,
        count
    } = req.body;
    try {
        //const itemId = mongoose.Types.ObjectId(Product);

        if(!item || !price || !count){
            throw createHttpError(400, 'Please provide all the required fields');
        }
        const productItem = new CartItem({
            item,
            price,
            count
        })

        const result = await productItem.save();
        res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const result = await CartItem.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {

    const itemId = req.params.id;
    try {
        const result = await CartItem.findByIdAndDelete(itemId).exec();

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}
