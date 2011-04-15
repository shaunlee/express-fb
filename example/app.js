
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer(
      express.cookieParser(),
      express.session({secret: 'hello'})
    ),
    form = require('express-form'),
    filter = form.filter,
    validate = form.validate;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

app.dynamicHelpers({
  form: function(req, res) { return req.form; },
  fb: function(req, res) { return {} }
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

app.post('/', form(
  filter('username').trim(),
  validate('username').required().is(/^[a-z]+$/, 'are you kidding')
), function(req, res){
  console.log(req.form);
  if (req.form.isValid) {
    res.send(req.form.username);
  } else {
    res.render('index', {
      title: 'Express'
    });
  }
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port);
}
