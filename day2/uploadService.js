var cloudinary = require('cloudinary');
var async = require('async');
var promise = require('promise');

cloudinary.config({ 
    cloud_name: 'dnaawwqvl', 
    api_key: '379694163834836', 
    api_secret: 'bqCK64xi0_kI5Oj_dTNDuqx6Pi0' 
  });

  exports.upload = function(images, uploadcb){
      console.log(typeof(images), images);
      async.each(images, function(name, cb){
        cloudinary.uploader.upload(__dirname+'/images/'+name, function(imageData, err) { 
            if(imageData){
                cb(null, imageData);
            } else {
                cb(err);
            }
          });

      }, function(err){
          console.log(err);
          uploadcb(err , 'upload done')
      })
  }


  exports.upload1 = function(images){
      var promised = new promise(function(res, rej){
        console.log(typeof(images), images);
    async.each(images, function(name, cb){
      cloudinary.uploader.upload(__dirname+'/images/'+name, function(imageData, err) { 
        if(imageData){
            cb(null, imageData);
        } else {
            cb(err);
        }
        });

    }, function(err){
        console.log(">>> err" ,  err);
        if(err){
            rej(err)
        }else{
            res('images done');
        }
    })
    })

    return promised;
    
}