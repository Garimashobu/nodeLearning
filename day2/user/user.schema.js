var mongoose = require('mongoose');

var userModel = mongoose.Schema({
    email:String,
    password: String
});

var accounts = mongoose.Schema({
    accountNo: Number,
    accountName: String
})

module.exports = mongoose.model('user', userModel);   