var async = require('async');
var downloadService = require('./downloadService');
var upploadService = require('./uploadService');
var tasks =[];
tasks.push(downloadService.download);
tasks.push(upploadService.upload.bind(null,{images:["sample.jpg","sample1.jpg"]}));
async.parallel(tasks, function(err, result){
    console.log("result", result)
})