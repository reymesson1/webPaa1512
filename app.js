var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
app.options('*', cors())
var mongoose = require('mongoose');

var messageController = require('./controller/messageController');

app.get('/message', messageController.getMessage);
app.post('/setmessage', messageController.setMessage);
app.post('/setshortmessage', messageController.setShortMessage);

mongoose.connect('mongodb://localhost:27017/ignacio',(err)=>{
    if(!err){
        console.log('Connected to mongo Database');
    }
})

app.listen(8085, function(){
    console.log("Listening from 8085...");
});

