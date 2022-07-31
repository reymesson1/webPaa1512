

exports.product=function(position,message)
{
    position=position;
    message=message;
    this.setPosition=function(positiondata)
    {
       position=positiondata;
    }
    this.getPosition=function()
    {
        return {"x": position.getX(), "y": position.getY()};
    }
    this.setMessage=function(messagedata)
    {
        message=messagedata;
    }
    this.getMessage=function()
    {
        return message;
    }

};