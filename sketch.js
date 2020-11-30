var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distanceX=0
var database;
var score = 0;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var backgroundImg;

var rockImg, coinsImg;

var rock1, rock2;

var bullets;

var xPos=375;

var coinGroup;



function preload(){
  //track = loadImage("images/track.jpg");
  car1_img = loadImage("images/Player1.png");
  car2_img = loadImage("images/Player2.png");
  car3_img = loadImage("images/Player3.png");
  car4_img = loadImage("images/Player4.png");
  //ground = loadImage("images/ground.png");
  backgroundImg = loadImage("images/background.png"); 
  rockImg = loadImage("images/Rocks2.png");
  coinsImg = loadImage("images/Coins2.png");
  coinGroup = new Group();
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bg = createSprite(700,350,1400,700);
  bg.addImage(backgroundImg);
  bg.scale = 4;

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
}
