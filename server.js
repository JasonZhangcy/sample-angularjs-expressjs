var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var cors = require('cors');

app.set('views', __dirname + '/views');
app.set('view engine' , 'ejs');

app.use(bodyParser.json());
app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('index',{ title: 'Sentence' });
});
app.post('/sample',urlencodedParser,function(req,res){
    console.log(typeof(req.body), req.body);
});
http.listen(8888, function(){
    console.log("Server listening on 8888");
});