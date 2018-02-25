var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ankesh',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'ankesh.html'));
});
app.get('/sumedh',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'sumedh.html'));
});
app.get('/ashwin',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'ashwin.html'));
});
app.get('/omkar',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'omkar.html'));
});
app.get('/shubham',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'shubham.html'));
});
app.get('/',function (req, res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
