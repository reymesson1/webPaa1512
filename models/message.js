var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: String,
    messages: Array
})

module.exports = mongoose.model('Message', userSchema)