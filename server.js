const express = require('express');
const logger = require('morgan');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/users',users)
// public route
app.listen(8888,function(){
    console.log('server is running on 8888');
})
var bookStore = [
    {
        title: "html",
        author: "me",
        pages: 143,
        year: 2017        
    },
    
];
app.use(logger('dev'));
app.get('/getdata',function(req,res){
    res.render('index',{dell:bookStore});

});
var Schema = mongoose.Schema;
var tableschema = new Schema({
   username:{type:String,required:true},
   email:{type:String,required:true}
 
});
var model = mongoose.model('pug',tableschema);
module.exports = model;
app.post("/save",function(req, res){
    console.log(req.body);
   res.send("username and passcode is saved in database");
   
  });
       