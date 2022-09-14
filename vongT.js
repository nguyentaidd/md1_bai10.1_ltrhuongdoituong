class vongT{
    x; y; radius;
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    setX(x){
        this.x= x;
    }
    getX(){
        return this.x
    }
    setY(y){
        this.y= y;
    }
    getY(){
        return this.y
    }
    setRadius(radius){
        this.radius=radius;
    }
    getRadius(){
        return this.radius
    }
    getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    getRandomColor(){
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        return "rgb(" + red + "," + blue + "," + green +")";
    }
    drawCircle(ctx){
        ctx.beginPath();
        ctx.fillStyle=this.getRandomColor()
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

}