var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
app.options('*', cors())

var productController = require('./controller/productController');

app.get('/product', productController.getMaster);
app.post('/setproduct', productController.setMaster);


app.listen(8085, function(){
    console.log("Listening from 8085...");
});