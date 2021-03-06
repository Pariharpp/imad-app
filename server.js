var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');// for get a post requiest for username(inside body)JSON
var config={
    user:'pariharprahalad26',
    database:'pariharprahalad26',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

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
    var hashed = crypto.pbkdf2Sync(input, salt, 100000, 1024, 'sha512');
    return ["pbkdf2","100000",salt,hashed.toString('hex')].join("$");
    
}    
app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'random-string-prahalad-parihar');
    res.send(hashedString);
});
//For creating username and password
app.post('/create-user',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var salt= crypto.randomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    Pool.query('INSERT INTO "user"(username,password) VALUES($1,$2)',[username, dbString],function (err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });

});


app.post('login',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    pool.query('SELECT * FROM  "user"  WHERE username=$1',[username],function (err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.lenght===0){
                res.send(403).send('Username/ password is invalid');
            }
            else{
                // chack for password
                var dbString = result.rows[0].password;
                var salt = dbString.split('$')[2];
                var hashedPassword = hash(password,salt);
                if(hashedPassword===dString){
                    res.send('loged in ');
                }
                else{
                   res.send(403).send('Username/ password is invalid');  
                }
               // res.send(JSON.stringify(result.rows));
            }
            
        }
    });

});

var Pool= new Pool(config);

app.get('/testdb',function(req,res){
    //make select requ.
    
    //return response
    Pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send('User successfully Created:'+username);
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
app.get('/algo/index',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'index.html'));
});
app.get('/algo/indexstyle.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'algo', 'indexstyle.css'));
});
app.get('/algo/Education',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'Education.html'));
});
app.get('/algo/farmer',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'farmer.html'));
});
app.get('/algo/SeniorC',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'SeniorC.html'));
});
app.get('/algo/update',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'update.html'));
});
app.get('/algo/recent',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'recent.html'));
});
app.get('/algo/contact',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'contact.html'));
});

app.get('/algo/about',function(req,res){
   res.sendFile(path.join(__dirname, 'algo', 'about.html'));
});
/*app.get('/algo/',function(req,res){
   res.sendFile(path.join(__dirname, ' wwww', 'mahadbt.gov.in'));
});*/


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

