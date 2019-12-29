var skin;
var ufo;
var venus;
var bg;

function preload(){
  skin = loadImage('./assets/UFO2/skin.jpg');
  ufo = loadModel('./assets/UFO2/UFO2.obj',true);
  venus = loadImage('./assets/Venus.jpg');
  bg = loadImage('./assets/bg.jpg');

}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  imageMode(CENTER);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
clear();
 w = width;
 h = height;
 colX = map(mouseX, 0, w, 0, 255);
 colY = map(mouseY, 0, h, 0, 255);
push();
translate(0,0,-1000);
var imgRatio = 1015/790;
 if (width/height > imgRatio){

image(bg, 0, 0, width*8, width/imgRatio*8);
}
else{
 image(bg, 0, 0, height*imgRatio*10, height*10);

 }
// image(bg,0,0,width*8,height*8);
// background(colY,0,255-colX,100);
fill(colY,0,255-colX,100);
rectMode(CENTER);
translate(0,0,5);
rect(0,0,width*10,height*10);
pop();
  noStroke(255);
  smooth();


  // LIGHTS, MATERIALS
  camera(mouseX - w/2, mouseY - h/2, 1800, 0, 0, 0, 0, 1, 0);

  ambientLight(50, 50, 100);
  directionalLight(255, 255, 255, -1, 0, 0.2);


    var locX = mouseX - height / 2;
    var locY = mouseY - width / 2;
   pointLight(200, 55, 25, locX, locY, 900);

   // Venus
push();
  texture(venus);
  rotateY(frameCount * 0.01);
  sphere(300);
  translate(300, 0, 0);
  pop();
  // texture(moon);
  // rotateY(frameCount * 0.004);
  // sphere(30);

 // 飛碟
 push();
 rotateY(frameCount * 0.01);
 push();
  translate(600, 0, 0);
  rotateZ(-1);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * -0.1);
  texture(skin);
  model(ufo);
 // 環1
  push();
   translate(0, 0, 0);
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * -0.1);
   torus(200, 2);

   // 環2
    push();
     translate(0, 0, 0);
     rotateZ(frameCount * 0.005);
     rotateX(frameCount * 0.05);
     rotateY(frameCount * -0.01);
     torus(250, 4);
     normalMaterial();
    pop();
  pop();
pop();
pop();

push();
 // rotateZ(frameCount * 0.005);
 rotateX(frameCount * 0.05);
 // rotateY(frameCount * -0.01);
 translate(0, 1000, 0);

sphere(20);
 normalMaterial();
pop();

// 衛星
push();
 // rotateZ(frameCount * 0.005);
 rotateZ(frameCount * 0.007);
 // rotateY(frameCount * -0.01);
 translate(0, 800, 0);

sphere(80);
 normalMaterial();
 // // 衛星的衛星
 // push();
 // translate(0, 100, 0);
 // rotateZ(frameCount * 0.1);
 // // rotateX(frameCount * 0.01);
 // rotateY(frameCount * -0.1);
 // sphere(50);
 // pop();
pop();





}
