var database;
var dog, happyDog, foodS, foodStock;
var dogImg1, dogImg2;

function preload(){
dogImg = loadImage("images/Dog.png")
dogImg1 = loadImage("images/happydog.png")

}

function setup(){
database = firebase.database();
canvas = createCanvas(500,500);

dog = createSprite(250,300,150,150);
dog.addImage(dogImg);
dog.scale = 0.15;

foodStock = data.ref('Food')
foodStock.on("value", readStock)
textSize(20);

}

function draw(){
background(46, 139, 187);

if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogImg1);

}

drawSprites();
fill(255,255,255);
stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
foodS = data.val();

}

function writeStock(x){

if(x<=0){
   x=0;
}else{
   x=x-1
}

database.ref('/').update({
   Food:x
})
}















