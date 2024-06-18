const createHttpError = require('http-errors')
const ReviewModel = require('../models/review')
const mongoose = require('mongoose');
const User = require('../models/user');

exports.create = async(req, res, next) => {
    const {
        name,
        reviewBody
    } = req.body;
    try {
        if(!reviewBody|| !name){
            throw createHttpError(400, 'Please provide the required fields');
        }

        const review = new ReviewModel({
            name,
            reviewBody
        })

        review.save()
        .then(savedReview => {
            res.status(201).json(savedReview); 
        })
        .catch(error => {
            res.status(500).json({ error: 'Error saving the message' });
        });

        // const result = await review.save();
        // res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const result = await ReviewModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {

    const reviewId = req.params.id;
    try {
        const result = await ReviewModel.findByIdAndDelete(reviewId).exec();
        res.status(200).send(result);
        
    } catch (error) {
        next(error)
    }
}