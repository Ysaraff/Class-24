const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(786,290,70,70);
    box2 = new Box(986,290,70,70);
    box3 = new Box(786,250,70,70);
    box4 = new Box(986,250,70,70);
    box5 = new Box(886,150,70,70);
    ground = new Ground(600,height,1200,20)
    Pig1 = new Pig(886,290);
    Pig2 = new Pig(886,250);
    Bird1 = new Bird(200,200);
    Log1 = new Log(886,260,275,PI/2);
    Log2 = new Log(886,200,275,PI/2);
    Log3 = new Log(825,125,130,PI/7)
    Log4 = new Log(950,125,130,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    fill("white");
    text(mouseX + "," + mouseY, 200, 20);
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    Pig1.display();
    Pig2.display();
    Bird1.display();
    Log1.display();
    Log2.display();
    Log3.display();
    Log4.display();
}