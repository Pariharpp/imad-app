var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;
var crypto = rquire('crypto');
var config={
    user:'pariharprahalad26',
    database:'pariharprahalad26',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
function hash(input,salt){
    //create hash code
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
    
}    
app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'random-String');
    res.send(hashedString);
});
var Pool= new Pool(config);

app.get('/test',function(req,res){
    //make select requ.
    
    //return response
    Pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
   
   });
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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

var names=[];
app.get('/submit-name/',function(req,res){
    //get name
    var name = req.query.name;
    names.push(name);
    //JSON 
    res.send(JSON.stringify(names));
    res.send(names);
});

