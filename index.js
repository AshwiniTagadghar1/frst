const express = require('express')
const path = require('path')
const app=express()
app.use("/", express.static(path.join(__dirname, 'public')));
var wwwRoot = path.normalize(__dirname + '/public');
//app routes for website
app.get('/ashwini', function(req, res, next){
    res.sendFile(wwwRoot + '/html/index.html');
});
app.get('/frst', function(req, res, next){
    res.sendFile(wwwRoot + '/html/frst.html');
});


app.listen(8001,function(){
    console.log('hello world')
})
