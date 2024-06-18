const createHttpError = require('http-errors')
const MessageModel = require('../models/message')
const mongoose = require('mongoose')

exports.create = async(req, res, next) => {
    const {
        name,
        email,
        subject,
        messageBody
    } = req.body;
    try {
        if(!name || !email || !subject || !messageBody){
            throw createHttpError(400, 'Please provide all the required fields');
        }
        const message = new MessageModel({
            name,
            email,
            subject,
            messageBody
        })

        message.save()
        .then(savedMessage => {
            res.status(201).json(savedMessage); 
        })
        .catch(error => {
            res.status(500).json({ error: 'Error saving the message' });
        });
        // const result = await message.save();
        // res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const result = await MessageModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {

    const messageId = req.params.id;
    try {
        const result = await MessageModel.findByIdAndDelete(messageId).exec();
        res.status(200).send(result);
        
    } catch (error) {
        next(error)
    }
}
