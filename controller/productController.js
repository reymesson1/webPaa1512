var product = require('../models/product.js');
var test = require('../models/position.js');

exports.getMaster = async(req,res)=>{

      let Product = product.product;

      let Position = test.position

      var position  = new Position(12,12);

      var data = new Product(position,["ayuda", "", "", "", "hambre"]);

      let sendData = {"position":data.getPosition(),"message":data.getMessage()}; 
  
      res.send(sendData); 

}

exports.setMaster = async(req,res)=>{

  let newProduct = req.body;

  res.send(req.body);


}

