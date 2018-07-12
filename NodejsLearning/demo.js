
var promise = require('promise');
var eventemitter = require('events');

exports.login = function(){
    var person = new promise(function(resolve, reject){
        setTimeout(function(){
            console.log("hello");
        },7000)
    });

    return person;
}

console.log("in demo");

exports.getusers = function(){
    var emitter =  new eventemitter();
    setTimeout(function(){
        emitter.emits("7Seconds");
    },7000)
    return emitter;
}