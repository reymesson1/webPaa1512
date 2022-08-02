var Message = require('../models/message.js');
var Antenas = require('../models/antenas.js');
var mongoose = require('mongoose');

exports.getMessage = async(req,res)=>{

  let messages = await Message.find({})

  let data = ""
  let arrDataSpe = []

  
  for(var x=0;x<messages[0].messages.length;x++){

    for(var y=0;y< messages[0].messages[x].message.length;y++){

      if(messages[0].messages[x].message[y] != ''){

        arrDataSpe[y] = messages[0].messages[x].message[y];

      }


    }

  }

  for(var x=0;x<arrDataSpe.length;x++){

    data += arrDataSpe[x] + " "

  }

  
  
  var lengthX = messages[0].messages.length-1
  var antena = messages[0].messages[lengthX].name
  
  let antenas = await Antenas.find({"name": antena})
  let antenasX = antenas[0].x
  let antenasY = antenas[0].y

  var output = {

    "position": {
      "x": antenas[0].x,
      "y": antenas[0].y
    },
    "message": data
  }

  
  res.send(output);
  
}

exports.setMessage = async(req,res)=>{

  let newMessage = req.body;

  let message = new Message(newMessage);

  message.save(function(err){
    if(!err){
      console.log('Message saved');
    }else{
      console.log(err)
    }
  })

  res.send(req.body);


}

exports.setShortMessage = async(req,res)=>{

  var obj = req.body;

  var newMessage = Message.findOne({"id": 1},function(err,message){

    message.messages.push(obj.messages[0])

    message.save(function(err,m){
      console.log("Message updated");
    })
  })

}

