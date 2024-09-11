//dimensions 1280, 720
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let img;
var x = 0
let firstRun = true

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun){
  img1 = loadImage('MtBack.png');
  img2 = loadImage('MtMid.png');
  img3 = loadImage('MtFore.png');
  Drums = loadImage('Drums.png')
  Hen_0 = loadImage('Henry_0.png');
  Hen_1 = loadImage('Henry_1.png');
  Hen_2 = loadImage('Henry_2.png');
  Arc_0 = loadImage('Archie_0.png');
  Arc_1 = loadImage('Archie_1.png')
  Arc_2 = loadImage('Archie_2.png');
  Cla_0 = loadImage('Clarke_0.png');
  Cla_1 = loadImage('Clarke_1.png');
  Cla_2 = loadImage('Clarke_2.png');
  Oti_0 = loadImage('Otis_0.png')
  Oti_1 = loadImage('Otis_1.png')
  Oti_2 = loadImage('Otis_2.png')
  firstRun = false}
  

  background(248,146,121)
  
  noStroke()
  SunRays()
  fill(245,211,131);
  let EllipseSize = map(drum,0,100,200,350)
  ellipse(950,250,EllipseSize,EllipseSize);
  
  fill(215,70,70)
  rect(0,500,1280,300)

  let Shake = map(other,0,100,40,70)
  image(img1,0,Shake)
  image(img2,0,Shake)
  image(img3,0,Shake - 5);

  let Hen = map(vocal,0,100,0,4);
  let Arc = map(drum,0,100,0,4);
  let Cla = map(other,0,100,0,4);
  let Oti = map(bass,0,100,0,4);
 

  //Archie if statements
  if (2 <= Arc && Arc <= 3){image(Arc_1,0+Arc,-30+Arc*3)}
  if (Arc < 2){image(Arc_0,0+Arc,-30+Arc*3)}
  if (Arc > 3){image(Arc_2,0+Arc,-30+Arc*3)}
  image(Drums,0,-30+Arc*5)

  //Otis if statements
  if (2 <= Oti && Oti <= 3){image(Oti_1,0+Oti,0+Arc*3)}
  if (Oti < 2){image(Oti_0,0+Oti,0-Arc*3)}
  if (Oti > 3){image(Oti_2,0+Oti,10-Arc*3)}

  //Henry if statements
  if (2 <= Hen && Hen <= 3){image(Hen_1,50+Hen,0+Arc*3)}
  if (Hen < 2){image(Hen_0,50+Hen,0-Arc*3)}
  if (Hen > 3){image(Hen_2,50+Hen,0-Arc*3)}

  //Clarke if statements
  if (2 <= Cla && Cla <= 3){image(Cla_1,-20+Cla,0+Arc*3)}
  if (Cla < 2){image(Cla_0,-20+Cla,0-Arc*3)}
  if (Cla > 3){image(Cla_2,-20+Cla,0-Arc*3)}

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
