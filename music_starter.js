//dimensions 1280, 720
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let img;
var x = 0
let firstRun = true
let Hen = map(vocal,0,100,1,4);
let Arc = map(drum,0,100,1,4);
let Cla = map(other,0,100,1,4);
let Oti = map(bass,0,100,1,4);


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun){
  img1 = loadImage('MtBack.png');
  img2 = loadImage('MtMid.png');
  img3 = loadImage('MtFore.png');
  Hen_1 = loadImage('Henry.png');
  Arc_1 = loadImage('Archie.png');
  Cla_1 = loadImage('Clarke.png');
  Oti_1 = loadImage('Otis.png')
  firstRun = false}

  background(248,146,121)
  
  noStroke()
  SunRays()
  fill(245,211,131);
  let EllipseSize = map(drum,0,100,200,350)
  ellipse(950,250,EllipseSize,EllipseSize);
  
  fill(215,70,70)
  rect(0,500,1280,300)

  let Shake = map(drum,0,100,40,60)
  image(img1,0,Shake)
  image(img2,0,Shake)
  image(img3,0,Shake - 5)

  let Hen = map(vocal,0,100,1,4)
  let Arc = map(drum,0,100,1,4)
  let Cla = map(other,0,100,1,4)
  let Oti = map(bass,0,100,1,4)
  image(Hen_1,640,220)
  image(Oti_1,960,200)
  image(Arc_1,320,180)
  image(Cla_1,20,200)

  

}


function SunRays(){
  fill(255,166,131);
  push()
  translate(950,250)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(45)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(90)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(135)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(180)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(225)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(270)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();

  push()
  translate(950,250)
  rotate(315)
  rotate(x)
  fill(255,166,131)
  triangle(-1050,-175,-1050,175,0,0)
  fill(0)
  ellipse(0,0,20,20)
  x = x + 0.03
  pop();
}
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 //time dependent on counter

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// 