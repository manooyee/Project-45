const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var man
var manImage, fallingmanImage;
var backgroundImage = "white"
var bgImage;
var bgImage2;
var money, moneyImage;
var logo, logoImage;

var gameState = 0

function preload(){
   manImage = loadImage("images/man.png");
   fallingmanImage = loadImage("images/fallingman.png");

   moneyImage = loadImage("images/money.png");
   bgImage = loadImage("images/building.png");
   bgImage2 = loadImage("images/background2.png");

   logoImage = loadImage("images/logo.png");
}

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
    world = engine.world;

  man = new Man(300,30);
  money = new Money(300,50);


}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  if(gameState === 0){
    backgroundImage = bgImage;
    logo = createSprite(250,170,50,50);
    logo.addImage(logoImage);
    logo.scale = 0.5
    textSize(15);
    fill("black");
    text("Game description: You have droped your wallet down a building with tons of money in it.",15,300); 
    text("In order to save you money you must jump down the building",70,320);

    text("Goal: Collect your money and land safely on the ground",100,370);

    text("Rules: To grab your money, you must be on top of it and click space to collect it", 50,420);
    text("Use window sills to slow down your momentum to land safely on the ground", 70,440);

    if(keyDown("SPACE")){
      logo.destroy();
      gameState = 1
    }
  }


  if(gameState === 1){
    backgroundImage = bgImage2;
     man.display();
     money.display();
  }


  drawSprites();
}
