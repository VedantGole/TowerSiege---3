const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;



 function setup() {
    createCanvas(800, 700);
    myEngine = Engine.create();
    myWorld = myEngine.world;


    polygon = new Poly(150, 250, 40);
      
    //Line 6
    cube1 = new Cube(675, 425, 30, 30);
    cube2 = new Cube(645, 425, 30, 30);
    cube3 = new Cube(615, 425, 30, 30);
    cube4 = new Cube(585, 425, 30, 30);
    cube5 = new Cube(555, 425, 30, 30);
    cube6 = new Cube(525, 425, 30, 30);
    cube7 = new Cube(495, 425, 30, 30);

    //Line 5
    cube8 = new Cube(660, 395, 30, 30);
    cube9 = new Cube(630, 395, 30, 30);
    cube10 = new Cube(600, 395, 30, 30);
    cube11 = new Cube(570, 395, 30, 30);
    cube12 = new Cube(540, 395, 30, 30);
    cube13 = new Cube(510, 395, 30, 30);
    
    //Line 4
    cube14 = new Cube(645, 365, 30, 30);
    cube15 = new Cube(615, 365, 30, 30);
    cube16 = new Cube(585, 365, 30, 30);
    cube17 = new Cube(555, 365, 30, 30);
    cube18 = new Cube(525, 365, 30, 30)

    //Line 3
    cube19 = new Cube(630, 335, 30, 30);
    cube20 = new Cube(600, 335, 30, 30);
    cube21 = new Cube(570, 335, 30, 30);
    cube22 = new Cube(540, 335, 30, 30);

    //Line 2
    cube23 = new Cube(615, 305, 30, 30);
    cube24 = new Cube(585, 305, 30, 30);
    cube25 = new Cube(555, 305, 30, 30);

    //Line 1
    cube26 = new Cube(600, 275, 30, 30);
    cube27 = new Cube(570, 275, 30, 30);
    
    //Line 0
    cube28 = new Cube(585, 245, 30, 30)


    B1 = new Bottom(585, 450, 240, 20);
    bottom = new Bottom(400, 690, 800, 20);

    sling = new SlingShot(polygon.body, {x : polygon.body.position.x, y : polygon.body.position.y});

    score = 0;
    


 }

 function draw() {
     background(50);
    Engine.update(myEngine);
    drawSprites();

    polygon.display();

    cube1.display();
    cube2.display();
    cube3.display();
    cube4.display();
    cube5.display();
    cube6.display();
    cube7.display();
    cube8.display();
    cube9.display();
    cube10.display();
    cube11.display();
    cube12.display();
    cube13.display();
    cube14.display();
    cube15.display();
    cube16.display();
    cube17.display();
    cube18.display();
    cube19.display();
    cube20.display();
    cube21.display();
    cube22.display();
    cube23.display();
    cube24.display();
    cube25.display();
    cube26.display();
    cube27.display();
    cube28.display();

    cube1.score();
    cube2.score();
    cube3.score();
    cube4.score();
    cube5.score();
    cube6.score();
    cube7.score();
    cube8.score();
    cube9.score();
    cube10.score();
    cube11.score();
    cube12.score();
    cube13.score();
    cube14.score();
    cube15.score();
    cube16.score();
    cube17.score();
    cube18.score();
    cube19.score();
    cube20.score();
    cube21.score();
    cube22.score();
    cube23.score();
    cube24.score();
    cube25.score();
    cube26.score();
    cube27.score();
    cube28.score();

    sling.display();

    B1.display();
    bottom.display();

    textSize(25);
    text("score: " + score, 650, 40);
     //console.log(mouseX, mouseY); 
   }



   function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});
  }
  
  function mouseReleased(){
      sling.fly();
  }

   function keyPressed(){
     if(keyCode == 32){
         Matter.Body.setPosition(polygon.body, {x : 150, y : 250});
         Matter.Body.setVelocity(polygon.body, {x : 0, y : 0});
        sling.attach(polygon.body);
      }
  }

