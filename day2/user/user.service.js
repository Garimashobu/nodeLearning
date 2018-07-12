var mongo = require('mongodb').MongoClient;
var promise = require('promise');
var eventEmitter = require('events');
var userModel = require('./user.schema')
var mongoose = require('mongoose');
var cloudinary = require('cloudinary');
var http =  require('http');

const url = 'mongodb://localhost:27017';

var database = 'mongoData';
/*cloudinary.config({ 
    cloud_name: 'dnaawwqvl', 
    api_key: '379694163834836', 
    api_secret: 'bqCK64xi0_kI5Oj_dTNDuqx6Pi0' 
  });

cloudinary.uploader.upload(__dirname+'/sample.jpg', function(result) { 
  console.log(result) 
});*/
exports.create = function(user){
    var emitter = new eventEmitter();
    mongo.connect(url,function(err, client){
        if(err){
            console.log(err)
        } else{
            var currentDb = client.db(database);
            currentDb.collection('users').findOne(user, function(error, result){
                console.log(user.name)
                if(error) {
                    emitter.emit('error');
                } else if(result) {
                    emitter.emit('Already');
                } else {
                    currentDb.collection('users').insert(user, function(req, res){
                        emitter.emit('done');
                    })
                }

            });
            
        }
    })
    return emitter;
};



exports.createUser = function(data){
    //var user = new userModel(data);
    var emitter = new eventEmitter();
    userModel.insertMany(data, function(err, result){
        console.log("err", err, "result", result);
        emitter.emit('done');
    })
    return emitter;
}

