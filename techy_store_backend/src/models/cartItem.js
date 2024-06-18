const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    item:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    count:{
        type: Number,
        required:true
    }
})

const CartItem = mongoose.model('cartItem',cartItemSchema);

module.exports = CartItem;