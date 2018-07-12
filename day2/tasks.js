var promise = require('promise');
var downloadService = require('./downloadService');
var upploadService = require('./uploadService');
exports.commute = function(req,res){
    console.log(req.body);
    var tasks =[];

    promise.all([downloadService.download1(req.body.url), upploadService.upload1(req.body.images)])
    .then(function(results){
        console.log(">>>> all taks done" , results);
        res.send('all done');
    })
    .catch(function(err){
        console.log("err by any task")
    }) 
}

   