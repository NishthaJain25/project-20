var cat,rat;
var cati,rati;
var gi;
var m2 , m3,m4;
var c2,c3,c4;



function preload() {
    //load the images here
cati = loadAnimation("images/cat1.png"); 
gi = loadImage("images/garden.png");
rati = loadAnimation("images/mouse1.png");
m2 = loadAnimation("images/mouse2.png"); 
m3 = loadAnimation("images/mouse3.png"); 
m4 = loadAnimation("images/mouse4.png"); 
c2 = loadAnimation("images/cat2.png");
c3 = loadAnimation("images/cat3.png");
c4 = loadAnimation("images/cat4.png"); 
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

     cat = createSprite(800,600,50,50);
     cat.addAnimation("ani",cati);
     cat.scale =0.2;
     rat = createSprite(100,640,50,50);
     rat.addAnimation("anit",rati);
     rat.scale = 0.2;

}

function draw() {

    background(gi);

    cat.x = mouseX;
    cat.y = mouseY;
    //Write condition here to evalute if tom and jerry collide
    if(cat.x -rat.x < cat.width/2+rat.width/2 && 
      rat.x-cat.x < rat.width/2 + cat.width/2 &&
      cat.y-rat.y<cat.height/2+ rat.height/2 &&
      rat.y-cat.y<rat.height/2+cat.height/2){

      cat.addAnimation("img",c2);
      rat.addAnimation("imi",m2);  
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyPressed("LEFT")){
  rat.changeAnimation("img",m3);
  cat.changeAnimation("imgi",c3);

}

}
