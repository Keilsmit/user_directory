// data file
const data = require('./data');
//requirements
const express = require('express');
const app = express();
const mustachExpress = require('mustache-express')
const path = require("path")
//set template engine
app.engine('mustache', mustachExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/', function(req, res){
  res.render('index', {users: data.users})
});

app.get('/user/:id', function(req, res){
  res.render('user', {user: data.users[req.params.id - 1]});
}
);



app.listen(3000, function(){
  console.log("application is running on port 3000")
});
