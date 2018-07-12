var express = require('express');
var routes = require('./route');
var bodyparser = require('body-parser');

var server = express();
var mongoose = require('mongoose');
var uploadService = require('./uploadService');
mongoose.connect('mongodb://localhost:27017/mongoData', function(err, result){
    console.log('err',err)
})
server.use(bodyparser.json());
server.use(express.static(__dirname+'/public'));

server.use(routes);
server.listen(9000, function(){
    console.log("server is running");
});

server.post('/uploadImages', function(req,res){
    console.log(req.body);
    uploadService.upload(req.body, function(){
        console.log('once done let me know');
        res.send('all done');
    })
})

