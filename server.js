
var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors')
var bodyParser = require("body-parser");
var request = require("request-json");

var app = express();

app.use(cors());

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

const accountSid = 'AC1fcd6e3d7c8ec0f060c6aefdacd642d1';
const authToken = '42fefdf7e260c080f5b91d40dfb399d3';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set our api routes
app.get('/login', cors(), function (req,res){

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+'+req.query.mto, //'+17572974458',
    //to: '+17572865248',
    from: '+16153984510',
    //mediaUrl: req.query.msg, //'https://i.imgur.com/XliOd3s.gif',
    body: req.query.msg+'  \n\n http://needs.city \n\n Please do not reply to this message',
  },
  (err, message) => {
    console.log('error');
  }
);


res.end('It worked!');

});


var port = process.env.PORT || '3000';
app.set("port", port);

var server = http.createServer(app);

server.listen(port, () => 

console.log('API running on localhost')

);