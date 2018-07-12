var userService = require('./user.service')

exports.create = function(req, res){
    userService.createUser(req.body)
    .on('done', function(data){
        res.send(req.body);
        //res.send('successfully created');
    })
    /*.on('Already', function(data){
        res.send("Already Available");
    })
    .on('error',function(data){
        res.send("Unable to create data")
    })*/
};

