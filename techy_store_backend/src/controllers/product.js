const createHttpError = require('http-errors')
const mongoose = require('mongoose');
const { Computer, Laptop, Phone } = require('../models/product');
const path = require('path')
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'images/newImages');
//     },
//     filename: function (req, file, cb) {
//         // Generate a unique filename (you can customize this according to your needs)
//         cb(null, file.originalname + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

exports.create = async (req, res, next) => {
    const { 
        productName, 
        category, 
        price,
        description,
        image
    } = req.body
    // const image = req.file.path

    try {

        if (!productName || !category || !price) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        let product;
        switch (category) {
            case 'computer':
                product = new Computer({ productName, category, price,  description, image});
                break;
            case 'laptop':
                product = new Laptop({ productName, category, price, description, image});
                break;
            case 'phone':
                product = new Phone({ productName, category, price, description, image});
                break;
            default:
                throw createHttpError(400, 'Invalid category');
        }

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);

    } catch (error) {
        next(error);
    }
};

// exports.create = async (req, res, next) => {

//     upload.single('image')(req, res, function (err) {
//         if (err) {
//             return next(err);
//         }

//         const imagePath = req.file.path;

//         const { productName, category, price, description } = req.body;
//         // const product = new Product({ productName, price, description, image: imagePath });

//         let product;
//         switch (category) {
//             case 'computer':
//                 product = new Computer({ productName, category, price,  description, image: imagePath});
//                 break;
//             case 'laptop':
//                 product = new Laptop({ productName, category, price, description, image: imagePath});
//                 break;
//             case 'phone':
//                 product = new Phone({ productName, category, price, description, image: imagePath});
//                 break;
//             default:
//                 throw createHttpError(400, 'Invalid category');
//         }
//         product.save()
//             .then(savedProduct => {
//                 res.status(201).json(savedProduct);
//             })
//             .catch(error => {
//                 next(error);
//             });
//     });
// };



exports.getAllComputer = async (req, res, next) => {
    try {
        const result = await Computer.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getAllLaptop = async (req, res, next) => {
    try {
        const result = await Laptop.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getAllPhones = async (req, res, next) => {
    try {
        const result = await Phone.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.deleteComputer = async (req, res, next) => {
    const computerId = req.params.id;

    try {
        const result = await Computer.findByIdAndDelete(computerId).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.deleteLaptop = async (req, res, next) => {
    const laptopId = req.params.id;

    try {
        const result = await Laptop.findByIdAndDelete(laptopId).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.deletePhone = async (req, res, next) => {
    const phoneId = req.params.id;

    try {
        const result = await Phone.findByIdAndDelete(phoneId).exec();

        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {

    const productId = req.params.id;

    const {
        productName, 
        category, 
        price, 
        description,
        image 

    } = req.body;


    try {

        if (!productName || !image || !price || !category) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        let product
        switch (category) {
            case 'computer':
                product = await Computer.findById(productId).exec();
                break;
            case 'laptop':
                product = await Laptop.findById(productId).exec();
                break;
            case 'phone':
                product = await Phone.findById(productId).exec();
                break;
            default:
        }

        if (!product) {
            throw createHttpError(404, 'Product not found');
        }

        product.productName = productName;
        product.description = description;
        product.price = price;
        product.image = image;
        product.category= category;


        switch (category) {
            case 'computer':
                product = new Computer({ productName, category, price,  description, image});
                break;
            case 'laptop':
                product = new Laptop({ productName, category, price, description, image});
                break;
            case 'phone':
                product = new Phone({ productName, category, price, description, image});
                break;
            default:
                throw createHttpError(400, 'Invalid category');
        }

        const result = await product.save();
        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}