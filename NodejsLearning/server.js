var express = require('express');
var bodyparser = require('body-parser');
var server = express();

var user = require('./demo');

user.login().then(
    function(suc){
        console.log(suc,"de")
},function(err){
    console.log(err,"er")
})

user.getusers.on('7Seconds', function(){
    console.log("7 second passed")
})