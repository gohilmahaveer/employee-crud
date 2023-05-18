const mongoose = require('mongoose')

const database = mongoose.connect('mongodb+srv://MGGOHIL:A3D5C086@cluster0.mhzab.mongodb.net/employee').then( () => console.log('Database Connected:)'))

module.exports = database