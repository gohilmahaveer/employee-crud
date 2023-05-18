const mongoose = require("mongoose")

const Model = new mongoose.Schema({
    "firstname": { type: String },
    "lastname": { type: String },
    "address": { type: String },
    "email": { type: String },
    "mobile": { type: String },
    "uniqueFileName": { type: String }
})

const empDb = mongoose.model('employee', Model)

module.exports = empDb