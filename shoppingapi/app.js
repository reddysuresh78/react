var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var cors = require('cors')
var mongoose = require("mongoose")

var app = express();
app.use(cors())

mongoose.connect("mongodb://localhost:27017/cln_products")

console.log("MongoDB Connected")

var products = require("./model/products" )

app.get("/wfproducts", function(req, res) {
  products.find(function (err, data){
    if(err) {
      throw err
    }
    res.json(data)
  })
})




// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('*', (req, res) => {
  res.send("My shopping products web service api")
})

app.post("/wfproducts", (req, res) => {
  let newproduct = req.body;
  console.log(newproduct)
  products.create( newproduct,  (err, data) => {
      if(err) throw err
      res.json(data)
   } )
})

app.delete("/wfproducts/:id", (req, res) => {
  let query = {_id: req.params.id}
  products.remove( query,  (err, data) => {
      if(err) throw err
      res.json(data)
   } )
})

app.put("/wfproducts/:id", (request, response) => {
  let query = { _id: request.params.id };
  let modifiedproduct = request.body
  
  console.log(query)

  let updt = { '$set' : { "name": modifiedproduct.name, "price": modifiedproduct.price } }
  
  let options = {new:true}

  products.findOneAndUpdate( query, updt, options, (err, data) => {
    if(err) throw err
    response.json(data)
    }
  )
})

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
