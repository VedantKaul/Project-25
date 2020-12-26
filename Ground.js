class Ground{
constructor(){

var options = {
isStatic:true
}

this.body = Bodies.rectangle(800, 650, 1600, 20, options);
this.width = width;
this.height = height;

World.add(world, this.body);

}
display(){
var pos = this.body.position;
fill("yellow");
stroke("yellow");
rect(this.body.x, this.body.y, this.body.width, this.body.height);
rect(800, 605, 1600, 20);

}
}