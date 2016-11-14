var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var router = express.Router();

var app = express();
var server = http.Server(app);


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../dist")));


router.get("/login", function(req, res){
  res.sendFile(path.join(__dirname, "login.html"));
});

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});



app.use("/", router);


server.listen(process.env.PORT || 3001);

module.exports = app;
