var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bullRouter = require('./routes/bull');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var bull = require("./models/bull");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bull', bullRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);



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

const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});



async function recreateDB(){
  // Delete everything
  await bull.deleteMany();
  let instance1 = new
  bull({Bull_Breed:'Abergele', Bull_Size:'large',Bull_Value:25.4});
  let instance2 = new
  bull({Bull_Breed:"Sibi Bhagnari",Bull_Size:"Medium",Bull_Value:75});
  let instance3 = new
  bull({Bull_Breed:"Gir",Bull_Size:"Large",Bull_Value:100});

  instance1.save().then( () => {
    console.log('First Object is created');
    }).catch( (e) => {
    console.log('There was an error', e.message);
    });
  instance2.save().then( () => {
      console.log('second Object is created');
      }).catch( (e) => {
      console.log('There was an error', e.message);
      });
  instance3.save().then( () => {
        console.log('third Object is created');
        }).catch( (e) => {
        console.log('There was an error', e.message);
        });
  }
  let reseed = true;
  if (reseed) { recreateDB();}
  


module.exports = app;


