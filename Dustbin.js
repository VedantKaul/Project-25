class Dustbin{

constructor(){
var options = {
isStatic : true
}

this.body = Bodies.rectangle(1296, 510, 20, 130, options);
World.add(world, this.body);

this.bodx = Bodies.rectangle(1370, 585, 130, 20, options);
World.add(world, this.bodx);

this.bodz = Bodies.rectangle(1443, 515, 20, 130, options);
World.add(world, this.bodz);

this.image = loadImage("Dustbin.png")
}

display(){
fill("white");
stroke("white");
rect(this.body.x, this.body.y, this.body.width, this.body.height);
rect(1296, 510, 20, 130);

rect(this.body.x, this.body.y, this.body.width, this.body.height);
rect(1370, 585, 130, 20);

rect(this.body.x, this.body.y, this.body.width, this.body.height);
rect(1443, 510, 20, 130);

image(this.image, 1280, 425, 170, 170);
}
}