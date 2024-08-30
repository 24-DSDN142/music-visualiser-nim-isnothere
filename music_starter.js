//dimensions 1280, 720
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let img;
var x = 0
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  background(248,146,121)
  img = loadImage('MtBack.png');
  
  noStroke()
  SunRays()
  fill(245,211,131);
  let EllipseSize = map(drum,0,100,200,350)
  ellipse(950,250,EllipseSize,EllipseSize);
  
  fill(215,70,70)
  rect(0,520,1280,200)

  image(img, 100, 100)
  

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