exports.position=function(x,y)
{
    x=x;
    y=y;
    this.setX=function(xdata)
    {
       x=xdata;
    }
    this.getX=function()
    {
        return x;
    }
    this.setY=function(ydata)
    {
        y=ydata;
    }
    this.getY=function()
    {
        return y;
    }
};