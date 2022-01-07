var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//headers for cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

io.on('connection', (socket) => {
  console.log('Some client connected');
});


//connect database 
mongoose.connect('mongodb+srv://groupe5:1234@node-chat.xqlx7.mongodb.net/node-chat?retryWrites=true&w=majority',
  {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() =>console.log(`Connecté à la bdd`))
    .catch(() => console.log('Connexion à la database échouée !')); 

module.exports = app;
