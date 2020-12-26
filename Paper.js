class Paper{
constructor(){

var options = {
isStatic : false,
restitution : 0.2,
density : 1.2,
friction : 0.5
}

this.body = Matter.Bodies.circle(200, 200, 60, options);
this.image = loadImage("Crushed_Paper.png");

World.add(world, this.body);
}

display(){
var pos = this.body.position;
fill(255,105,180);
image(this.image, pos.x, pos.y, 50, 50);
}
}