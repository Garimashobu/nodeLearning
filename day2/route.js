var express = require('express');
var router = express.Router();
var user = require('./user')
router.post('/abc' , function(){console.log(">>>>>>>")})

router.use('/user',user);
module.exports = router;