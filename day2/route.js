var express = require('express');
var router = express.Router();
var user = require('./user')
var computetask = require('./tasks.js');
router.post('/abc' , function(){
    console.log(">>>>>>>")
})

router.use('/user',user);


router.use('/compute', computetask.commute);

module.exports = router;