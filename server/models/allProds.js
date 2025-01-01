const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({
    prodId: {
        type: Number,
        required: true,
        unique: true
    },
    prodName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    prodImage: {
        type: String,
        required: true
    }
})

const prodModel = mongoose.model("product", prodSchema)
module.exports = prodModel