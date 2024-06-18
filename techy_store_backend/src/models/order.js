const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userName:{
        type: String,
        required:true
    },
    totalPrice:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    contactNumber:{
        type: Number,
        required:true
    },
    cardNumber:{
        type: Number,
        required:true
    },
    postal:{
        type: Number,
        required:true
    },
    cardHoldersName:{
        type: String,
        required:true
    },
    evcNumber:{
        type: Number,
        required:true
    }

})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;