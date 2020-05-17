 var path =require('path');

var express = require('express');
var blogControllers = require('./controllers/blogController');



var app = express();

//set up template engine

app.set('views',path.join(__dirname,'controllers/views'));
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
blogControllers(app);


//port
app.listen(300);
console.log('listening to port 30');

