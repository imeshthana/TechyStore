const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const computerSchema = new Schema({
    productName:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
    
})

const laptopSchema = new Schema({
    productName:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
})

const phoneSchema = new Schema({
    productName:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
})

const Computer = mongoose.model('Computer', computerSchema);
const Laptop = mongoose.model('Laptop', laptopSchema)   
const Phone = mongoose.model('Phone', phoneSchema) 
  
module.exports = {Computer,Laptop,Phone};