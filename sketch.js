var img;
var img2;
let x = 200;
 let y = 200;
 let speed = 2;
let jogo = false; 

function preload(){
  img = loadImage("eu.png")
  img2 = loadImage("eu3.png")
}

 function setup() {
 createCanvas (400, 400);
 }

 function draw() {
 if(jogo==false){
   background (img)
   circle(mouseX, mouseY, 10)
   text(mouseX+":"+mouseY,39,20)
   if (mouseX>=78 && mouseY>=37 && mouseX<=300 && mouseY<=125){
     noFill();
     stroke("black");
     strokeWeight(6);
     rect(78,38,225,90)
   
    if(mouseIsPressed){
      fill("red")
      rect(78,38,225,90)
      jogo = true;
    }}
     
     if (mouseX>=78 && mouseY>=160 && mouseX<=297 && mouseY<=251){
     noFill();
     stroke("black");
     strokeWeight(6);
     rect(78,160,225,90)
   
    if(mouseIsPressed){
      fill("blue")
      rect(78,160,225,90)
    }}
       
     if (mouseX>=78 && mouseY>=290 && mouseX<=300 && mouseY<=370){
     noFill();
     stroke("black");
     strokeWeight(6);
     rect(78,290,225,85)
   
    if(mouseIsPressed){
      fill("green")
      rect(78,290,225,85)
    }}
 }
       
   else{
      background(img2)
  if (keyIsDown(LEFT_ARROW) && keyIsDown(32) || keyIsDown(65) && keyIsDown(32)) {
      x -= speed * 2;
  }else if (keyIsDown (LEFT_ARROW) || keyIsDown (65)) {
 x -= speed;
 }

 if (keyIsDown(RIGHT_ARROW) && keyIsDown (32) || keyIsDown (68) && keyIsDown (32)) {
 x += speed * 2;
 }else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
 x += speed;
 }

   if (keyIsDown(UP_ARROW) && keyIsDown (32) || keyIsDown (87) && keyIsDown(32)) {
 y -= speed * 2;
} else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  y -= speed * 2
 
}if (keyIsDown(DOWN_ARROW) && keyIsDown(32) || keyIsDown(83) && keyIsDown (32)) {
   
    y += speed * 2
     } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
     y += speed * 2
}
   
   fill("beige")
   rect (x, y, 50, 30)
   
   fill("blue")
   rect (x+15, y, 20, 60)

   fill("black")
   rect (x+15, y-20,20,20)
   
   fill("")
   rect(x+15, y, 20, 30)
   
 }
 }
 