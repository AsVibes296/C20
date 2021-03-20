var movingRec
var fixedRec

function setup() {
  createCanvas(1200,400);

 fixedRec= createSprite(100, 200, 50, 50); 
 movingRec= createSprite(500, 200, 50, 50);
 fixedRec.shapeColor=("green")
 movingRec.shapeColor=("green")
fixedRec.debug=true
movingRec.debug=true



}

function draw() {
  backgroun("black");
  movingRec.x=World.mouseX  
  movingRec.y=World.mouseY
/*if(movingRec.x-fixedRec.x<=movingRec.width/2+fixedRec.width/2 && fixedRec.x-movingRec.x<=movingRec.width/2+fixedRec.width/2 && 
  movingRec.y-fixedRec.y<=movingRec.height/2+fixedRec.height/2 && fixedRec.y-movingRec.y<=movingRec.height/2+fixedRec.height/2)
 {
  fixedRec.shapeColor=("red")
  movingRec.shapeColor=("red")

 }
 else
 {
  fixedRec.shapeColor=("green")
  movingRec.shapeColor=("green")
 }*/
  drawSprites();
}