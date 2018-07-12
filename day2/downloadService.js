var promise = require('promise');
var fs = require('fs');
var youtube = require('youtube-dl');

exports.download =  function(cb){
    var video = youtube('http://www.youtube.com/watch?v=90AiXO1pAiA',
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
     { cwd: __dirname });
 
// Will be called when the download starts.
    video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info.filename);
    console.log('size: ' + info.size);
});
    video.on('end', function(){
        console.log("video completed");
        cb(null,'done1');
});
    video.pipe(fs.createWriteStream('myvideo.mp4'));
   
}

exports.download1 =  function(){
    
    var promised = new promise(function(res, rej){
        var video = youtube('http://www.youtube.com/watch?v=90AiXO1pAiA',
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
        // Additional options can be given for calling `child_process.execFile()`.
            { cwd: __dirname });
        
        // Will be called when the download starts.
            video.on('info', function(info) {
            console.log('Download started');
            console.log('filename: ' + info.filename);
            console.log('size: ' + info.size);
        });
            video.on('end', function(){
                console.log("video completed");
                res();
        });
            video.pipe(fs.createWriteStream('myvideo.mp4'));
        
    })
    return promised;
}