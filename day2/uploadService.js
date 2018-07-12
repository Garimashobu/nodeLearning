var cloudinary = require('cloudinary');
var async = require('async');

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