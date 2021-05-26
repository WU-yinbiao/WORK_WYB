var express = require('express');
var path = require('path');
//var swig = require('swing');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session'); //引入session
var logger = require('morgan');
var mysql = require('mysql');

 var ejs = require('ejs');//定义ejs 

//var loveRouter=require('./routes/love');
var indexRouter = require('./routes');
var CityListRouter= require('./routes/CityList');
var ActivitysRouter=require('./routes/Activitys');
var GiftListRouter = require('./routes/GiftList');
var HelpRouter = require('./routes/Help');
var LoginRouter= require('./routes/Login');
var enterRouter = require('./routes/enter');
var ChangePwRouter = require('./routes/ChangePw');
var RegisterRouter = require('./routes/Register');
//var apiRouter = require('./routes/api');
//var mainRouter = require('./routes/main');


var app = express();

// view engine setup
//html引擎：
app.set('views',path.join(__dirname,'views'));
app.engine('.html',ejs.__express);//注册HTML模板引擎
app.set('view engine','html');//将模板引擎换作为html
//swig.setDefaults({cache:false});

//ejs引擎：
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('wyb'));
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(session({
  secret:'wyb',
  cookie:{maxAge:60000},
  resave:true,
  saveUninitialized:false
}));

app.use(express.static(path.join(__dirname, 'public')));


//app.use('/wyb',loveRouter);
app.use('/index',indexRouter);
app.use('/CityList',CityListRouter);
app.use('/Activitys',ActivitysRouter);
app.use('/GiftList',GiftListRouter);
app.use('/Help',HelpRouter);
app.use('/login',LoginRouter);
app.use('/enter',enterRouter);
app.use('/Register',RegisterRouter);
app.use('/ChangePw',ChangePwRouter);
//app.use('/api',apiRouter);
//app.use('/main',mainRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
