function setup() {
  // create the canvas (800px wide, 600px high)
  createCanvas(800, 600);
  

  // make the text nice and big - adjust the size parameter
  // to make *your* name fit nicely on the nametag
  textSize(150);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  noStroke();

  // set backgroud squares to images.
  rect(0, 0, width, height);
  var img = createImage(80, 80);
  img.loadPixels();
  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      img.set(i, j, color(0, 90, 102, (i % img.width) * 2));
    }
  }
  img.updatePixels(); // palce a 4*3 square as a whole.
  
  image(img, 80, 100);image(img, 160, 190);image(img, 240, 280);image(img,320,370);
  image(img, 160, 100);image(img, 240, 190);image(img, 320, 280);image(img,400,370);
  image(img, 240, 100);image(img, 320, 190);image(img, 400, 280);image(img,480,370);
  image(img, 320, 100);image(img, 400, 190);image(img, 480, 280);image(img,560,370);
  image(img, 400, 100);image(img, 480, 190);image(img, 560, 280);image(img,640,370);
  
  }

  

function draw() {

  // your cool nametag code goes in this draw function
  // replace my name with your name!
  
  //
  
  stroke('#e8e8e8');
  rect (267,394,30,30);
  rect (110,388,20,20);
  rect (590,130,30,30);
  stroke('#b4aeae');
  rect (670,220,20,20);
  rect (184,300,30,30);
  

  // texture
  var c = color('Pink');
  fill(c);
  stroke(255);
  strokeWeight(48);
  textSize(200);
  textFont('Forte');
  text("Lily", 230,335);

  
}

// this function is here so that when you hit the spacebar, the current version
// of the nametag sketch will be saved to your downloads folder
function keyTyped() {
  if (key === " ") {
	saveCanvas("nametag.png");
  }
}
