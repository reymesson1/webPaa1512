var Message = require('../models/message.js');
var mongoose = require('mongoose');

exports.getMessage = async(req,res)=>{

  let messages = await Message.find({})
  
  res.send(messages);
  
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

  console.log(obj.messages);

  // const ObjectId = mongoose.Types.ObjectId;        
    
  // var newMessage = await Message.findOne({"_id": ObjectId("62e7e9ac9ac3cb8a3936b2f3")},function(err,message){
  var newMessage = Message.findOne({"id": 1},function(err,message){

    message.messages.push(obj.messages)

    message.save(function(err,m){
      console.log("Message updated");
    })
  })

}

