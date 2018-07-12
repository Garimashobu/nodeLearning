console.log("loading main file");
//require("./data");
require('nodemon');
/*var http = require('http');
var httpServer = http.createServer(function(rq,rs){
    console.log("request receivced");
    rs.end("hi");
});

httpServer.listen(9000, function(){
    console.log("server is running");
});*/

var express = require('express');
var server = express();
//var bodyparser = require("body-parser");
//server.use(bodyparser.json());

var router = express.Router()

/*server.get('/',function(re, rs){
    console.log("server run");
    console.log("ggh",re.query);
    rs.setHeader('auth-token', 'sdgashjaksfsfkdfjsd')
    var s =re.get("auth-token");
    console.log("sdasf",s);
    rs.send(obj)
});
server.get('/:username/:company',function(re, rs){
    console.log("ggg",re.params);
    rs.send(re.params)
});

server.get('/:username',function(re, rs,next){
    rs.send(re.params.username);
   if(re.params.username='garima'){
       next();
   }else{
       rs.send("not authorized")
   }
}, function(re,re){
    re.send("user list");
});*/
var postData = {
    name:"garima"
}
server.post('/create', function(){}, function(res,req){
    console.log("body",req.body)
})

router.get('/getoneUser', function(req,res){
    console.log("this is one router")
});

module.exports = router;

//server.listen(9000, function(){
  //  console.log("server is running");
//});

