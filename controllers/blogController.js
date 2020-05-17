var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test@cluster0-shard-00-00-mwmr1.mongodb.net:27017,cluster0-shard-00-01-mwmr1.mongodb.net:27017,cluster0-shard-00-02-mwmr1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});




//create a schema :like a blueprint
var blogSchema = new mongoose.Schema({
    item: String
});

//create a model
var blog = mongoose.model('blog',blogSchema);
var itemOne = blog({item:'dd'}).save (function(err){
    if(err) throw err;
   ;
});

console.log('item saved')

var data = [{item:'aa'},{item:'bb'},{item:'cc'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/blog',function(req,res){
        res.render('blog');
    });
    app.post('/blog',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);


    });
    app.delete('/blog',function(req,res){

    });

};
