const createHttpError = require('http-errors')
const UserModel = require('../models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

exports.create = async (req, res, next) => {
    const {
        userName,
        email,
        password
    } = req.body;
    try {
        if(!userName || !email || !password){
            throw createHttpError(400, 'Please provide all the required fields');
        }
        const user = new UserModel({
            userName,
            email,
            password
        })

        const result = await user.save();
        res.status(201).send(result);

    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const {
        userName,
        password
    } = req.body;

    try {
        if (!userName || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const user = await UserModel.findOne({ userName: userName }).exec();

        if (!user) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = (password===user.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Password is incorrect')
        }

        const loguser = await UserModel.findOne({ userName:userName }).exec();

        const token = jwt.sign(
            {
                user_id: loguser._id,
                email: loguser.email,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        )

        // loguser.token = token;

        res.status(200).json({ token });
        // const result = await loguser.save();
        // res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}
