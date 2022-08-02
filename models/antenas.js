var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: String,
    name: String,
    x: String,
    y: String
})

module.exports = mongoose.model('Antenas', userSchema)