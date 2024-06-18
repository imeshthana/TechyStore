const createHttpError = require('http-errors')
const orderModel = require('../models/order')
const mongoose = require('mongoose')


exports.create = async(req, res, next) => {
    const {
        userName,
        totalPrice,
        address,
        contactNumber,
        cardNumber,
        cardHoldersName,
        evcNumber,
        postal

    } = req.body;
    try {
        // const userId = mongoose.Types.ObjectId(User);

        if(!userName || !address || !contactNumber || !cardNumber){
            throw createHttpError(400, 'Please provide all the required fields');
        }
        const order = new orderModel({
            userName,
            totalPrice,
            address,
            contactNumber,
            cardNumber,
            cardHoldersName,
            evcNumber,
            postal

        })

        const result = await order.save();
        res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const result = await orderModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {

    const orderId = req.params.id;
    try {
        const result = await orderModel.findByIdAndDelete(orderId).exec();

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}
