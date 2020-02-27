// PROJECT 1
// DJ HOFFMAN


//------------------------------------------------------


// VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES 
var state;
var musicMaker = true;
var state1=1;
var state2=2;
var state3=3;
var state4=4;
var state5=5;
var posX, posY;
var a = 0;

let soundOne;
let soundTwo;

let imageList = [];


//------------------------------------------------------


//PRELOAD PRELOAD PRELOAD PRELOAD PRELOAD PRELOAD PRELOAD 
function preload() {
  imageList[0] = loadImage("assets/cat1.png");
  imageList[1] = loadImage("assets/1cats.gif");
  imageList[2] = loadImage("assets/2arizona.gif");
  imageList[3] = loadImage("assets/cat2.png");
  imageList[4] = loadImage("assets/no.gif");
  imageList[5] = loadImage("assets/5grave.gif");
  imageList[6] = loadImage("assets/window.png");
  imageList[7] = loadImage("assets/z1.gif");
  imageList[8] = loadImage("assets/3bookstore.gif");
  imageList[9] = loadImage("assets/cursor.png");
  imageList[10] = loadImage("assets/z2.gif");
  imageList[11] = loadImage("assets/z3.gif");
  imageList[12] = loadImage("assets/z4.gif");
  imageList[13] = loadImage("assets/z5.gif");
  imageList[14] = loadImage("assets/6money.gif");
  imageList[15] = loadImage("assets/book.jpg");
  imageList[16] = loadImage("assets/cat3.png");
  imageList[17] = loadImage("assets/grave.png");
  imageList[18] = loadImage("assets/rose.png");
  imageList[19] = loadImage("assets/firework.gif");
  imageList[20] = loadImage("assets/money.gif");

  soundOne=loadSound('sounds/special.mp3');
  soundTwo=loadSound('sounds/raise.mp3');
}


//------------------------------------------------------


// SETUP SETUP SETUP SETUP SETUP SETUP SETUP SETUP SETUP 
function setup() {
  createCanvas(640, 384);

  //special friend
  soundOne.setVolume(0.3);

  //raise me up
  soundTwo.setVolume(0.3);
  noStroke();
  state=state1;

}


//------------------------------------------------------


//DRAW DRAW DRAW DRAW DRAW DRAW DRAW DRAW DRAW DRAW DRAW 
function draw() {
    background(255);

  //STATE 1
    if (state == state1) {
      draw1();
      if (key == "a") {
        drawStuff1();
      }
    } 
  //STATE 2
    else if (state == state2) {
      draw2();
      if (key == "s") {
        drawStuff2();
      }
    } 

  //STATE 3
    else if (state == state3) {
      draw3();
      if (key == "d") {
        drawStuff3();
      }
    } 
  //STATE 4
    else if (state == state4) {
      draw4();
      if (key == "f") {
        drawStuff4();
      }
    } 
  //STATE 5
    else if (state == state5) {
      draw5();
      if (key == "g") {
        drawStuff5();
      }
    }

    // //coordinates TEMPORARY !!!!!!!!
    // frameRate(12);
    // text("X: "+mouseX, 0, height/4);
    // text("Y: "+mouseY, 0, height/2);
}


//------------------------------------------------------


// STATES DRAWING STATES DRAWING STATES DRAWING STATES DRAWING STATES DRAWING 

function draw1() {

    //BG grumpy cat
    image(imageList[1], 0, 0);

    //rect
    fill(255, 119, 0, 185);
    rect(0, 0, 640, 384);

    //browser window
    image(imageList[6], 0, 0);

    //cat
    image(imageList[0], 0, 0);

    //Z1 key A
    image(imageList[7], 17, 45, 40, 40);

    //text
    fill(255);
    textSize(40);
    textAlign(CENTER);
    textFont('Lacquer'); //font Lacquer serif
    text("Grumpy Cat", width / 2, height / 5);
    textFont('Varela Round'); //font varela round sans serif
    textSize(12);
    text("AKA Tardar Sauce", width / 2, height / 1.1);
    textSize(12);
    text("Put Your Sound On", width / 1.15, height / 6);

    //make text appear in a text box
    let s = 'Click A on your keyboard!';
    fill(255); //white
    textAlign(LEFT);
    textSize(12);
    text(s, 70, 50, 100, 50); // Text wraps within text box

    //fix
    textAlign(CENTER);

    //click to continue
    fill(255, 255, 255, 150);
    textSize(12);
    text("Click Anywhere to Continue", width /1.43 , height / 18);

}

function draw2() {
    //BG arizona
    image(imageList[2], 0, 0);

    //rect
    fill(255, 119, 0, 185);
    rect(0, 0, 640, 384);

    //cat 
    image(imageList[3], -7, 40);

    //text
    fill(255);
    textSize(40);
    textAlign(CENTER);
    textFont('Lacquer'); //font Lacquer serif
    text("Arizona", width / 2, height / 5);

    //browser window
    image(imageList[6], 0, 0);

    //no.
    image(imageList[4], 305, 210, 200, 125);

    //Z2 key S
    image(imageList[10], 17, 45, 40, 40);

    //make text appear in a text box

    let s = 'Click S on your keyboard!';
    textFont('Varela Round'); //font varela round sans serif
    fill(255); //white
    textAlign(LEFT);
    textSize(12);
    text(s, 70, 50, 100, 50); // Text wraps within text box

    //fix
    textAlign(CENTER);

    //click to continue
    fill(255, 255, 255, 150);
    textSize(12);
    text("Click Anywhere to Continue", width /1.43 , height / 18);

}

function draw3() {

    //BG bookstore
    image(imageList[8], 0, 0);

    //rect
    fill(255, 119, 0, 185);
    rect(0, 0, 640, 384);

    //text
    fill(255);
    textSize(40);
    textAlign(CENTER);
    textFont('Lacquer'); //font Lacquer serif
    text("Book", width / 2, height / 5);

    //book
    image(imageList[15], 420, 120, 140, 200);

    //browser window
    image(imageList[6], 0, 0);

    //Z3 key D
    image(imageList[11], 17, 45, 40, 40);

    //make text appear in a text box
    let s = 'Click D on your keyboard!';
    textFont('Varela Round'); //font varela round sans serif
    fill(255); //white
    textAlign(LEFT);
    textSize(12);
    text(s, 70, 50, 100, 50); // Text wraps within text box

    //fix
    textAlign(CENTER);

    //click to continue
    fill(255, 255, 255, 150);
    textSize(12);
    text("Click Anywhere to Continue", width /1.43 , height / 18);
}

function draw4() {
	//BG bookstore...WON'T LOAD??? arizona it is...
    image(imageList[14], 0, 0);
    //rect
    fill(255, 119, 0, 185);
    rect(0, 0, 640, 384);

    //browser window
    image(imageList[6], 0, 0);

    //text
    fill(255);
    textSize(40);
    textAlign(CENTER);
    textFont('Lacquer'); //font Lacquer serif
    text("Money", width / 2, height / 5);

    //cat
    image(imageList[16], 350, 153);

    //Z4 key F
    image(imageList[12], 17, 45, 40, 40);

    //make text appear in a text box
    let s = 'Click F on your keyboard!';
    textFont('Varela Round'); //font varela round sans serif
    fill(255); //white
    textAlign(LEFT);
    textSize(12);
    text(s, 70, 50, 100, 50); // Text wraps within text box

    //fix
    textAlign(CENTER);

    //click to continue
    fill(255, 255, 255, 150);
    textSize(12);
    text("Click Anywhere to Continue", width /1.43 , height / 18);
}

function draw5() {

    // soundOne.pause();
    //soundTwo.loop();

    //BG graveyard
    image(imageList[5], 0, 0);

    //rect
    fill(255, 119, 0, 185);
    rect(0, 0, 640, 384);

    //text
    fill(255);
    textSize(40);
    textFont('Lacquer'); //font Lacquer serif
    textAlign(CENTER);
    text("RIP", width / 2, height / 5);
    text("⟳", width / 1.1, height / 5);

    //grave
    image(imageList[17], 420, 120, 180, 240);

    //browser window
    image(imageList[6], 0, 0);

    //Z5 key G
    image(imageList[13], 17, 45, 40, 40);

    //make text appear in a text box
    let s = 'Click G on your keyboard!';
    textFont('Varela Round'); //font varela round sans serif
    fill(255); //white
    textAlign(LEFT);
    textSize(12);
    text(s, 70, 50, 100, 50); // Text wraps within text box

    //fix
    textAlign(CENTER);

    //click to continue
    fill(255, 255, 255, 150);
    textSize(12);
    text("Click Anywhere to Restart", width /1.43 , height / 18);
}


//------------------------------------------------------


//MOUSE PRESSED MOUSE PRESSED MOUSE PRESSED MOUSE PRESSED MOUSE PRESSED 
function mousePressed() {
  state++;
  if( state > state5 ){
    state = state1;
  }
  if (musicMaker) {
    if (soundTwo.isPlaying()) {
      soundTwo.stop();
    }
    musicMaker = false;
    soundOne.loop();
  }
  if (state==state5) {
    soundOne.stop();
    musicMaker = true;
    soundTwo.loop();
  }
}


//------------------------------------------------------


//KEY PRESS KEY PRESS KEY PRESS KEY PRESS KEY PRESS KEY PRESS KEY PRESS 
function keyPressed() {

//STATE 1
  if (key == "1") {
    state = state1;  } 
//STATE 2
    else if (key == "2") {
    state = state2;
  } 
//STATE 3
    else if (key == "3") {
    state = state3;
  }
//STATE 4
    else if (key == "4") {
    state = state4;
  }
//STATE 5
    else if (key == "5") {
    state = state5;
  }
}


//------------------------------------------------------


// Functions for the effects within the states!!!

function drawStuff1(){

    //make text appear in a text box
    let s = 'Oh no! Why are you putting Tardar Sauce in Jail?';
    textFont('Varela Round'); //font varela round sans serif
    fill(255); //white
    textAlign(CENTER);
    textSize(20);
    text(s, 450, 150, 150, 150); // Text wraps within text box

    stroke(255, 0, 0); //color red
    strokeWeight(5);
    line(width/1.5, 44, width/1.5, frameCount*5.5); //far right
    line(width/1.7, 44, width/1.7, frameCount*5.5);
    line(width/2, 44, width/2, frameCount*5.5);
    line(width/2.4, 44, width/2.4, frameCount*5.5);
    line(width/3, 44, width/3, frameCount*5.5); //far left

  //cursor devil >>>>>>>>>>>:) 
  image(imageList[9], mouseX, mouseY, 50, 50);

  //realign everything else
  textAlign(CENTER);
  noStroke();

}


function drawStuff2(){

    //make text appear in a text box
    let s = 'Tardar Sauce, nicknamed Grumpy Cat, was an American Internet celebrity cat. She was the subject of a popular Internet meme in which humorously negative, cynical images are made from photographs of her. She was born April 4, 2012 in Morristown, Arizona, U.S.';
    fill(255);
    textAlign(LEFT);
    textSize(15);
    text(s, 50, 150, 200, 200); // Text wraps within text box
    text("- Wikipedia ", width /7 , height / 1.09);


  //make eyes bigger when hovering
  if ((mouseX > 490) && (mouseX < 520) && (mouseY > 85) && (mouseY < 120)){
    fill(181, 0, 21); //red
    ellipse(512, 92, 15, 15);
    ellipse(497, 106, 15, 15);

  }
  else {
    fill(0); //black
  }
  ellipse(512, 92, 5, 5);
  ellipse(497, 106, 5, 5);

    //make text appear when hovering over eyes
  if ((mouseX > 300) && (mouseX < 500) && (mouseY > 210) && (mouseY < 335)){
    fill(255); //white
    text("Check out my eyes!", width / 1.9, height / 3.5);

  }
  else {
    fill(255); //white
  }
  text("", width / 1.6, height / 1.8);

  //cursor devil >>>>>>>>>>>:)  
  image(imageList[9], mouseX, mouseY, 50, 50);

  //realign everything else
  textAlign(CENTER);
}

function drawStuff3(){

    //make text appear in a text box
    let s = 'The official Grumpy Cat book, Grumpy Cat: A Grumpy Book, was published on July 23, 2013, by Chronicle Books. The book is available in both print and digital formats from retailers worldwide. It debuted at #8 hardcover nonfiction on the Publishers Weekly best seller list.';
    fill(255);
    textAlign(LEFT);
    textSize(15);
    text(s, 50, 150, 225, 200); // Text wraps within text box
    text("- Wikipedia ", width /7 , height / 1.09);


  //FIREworks
  image(imageList[19], 340, 90, 300, 300);

  //cursor devil >>>>>>>>>>>:)
  image(imageList[9], mouseX, mouseY, 50, 50);

  //realign everything else
  textAlign(CENTER);
}

function drawStuff4(){

      //make text appear in a text box
    let s = 'In March 2013, Bryan Bundesen indicated that Grumpy Cat earned them income in the "mid-five figures", which increased to "low-six-figures" by May 2013. As of August 2018, the Bundesens have not disclosed the Grumpy Cat brand^s net worth, though online speculation estimated it between $1 million and $100 million.';
    fill(255);
    textAlign(LEFT);
    textSize(15);
    text(s, 50, 150, 250, 200); // Text wraps within text box
    text("- Wikipedia ", width /7 , height / 1.09);

    //Money
    image(imageList[20], 340, 30, 300, 200);

  //cursor devil >>>>>>>>>>>:)  
  image(imageList[9], mouseX, mouseY, 50, 50);

  //realign everything else
  textAlign(CENTER);
}
 
function drawStuff5(){

  //make text appear in a text box
    let s = 'Tardar Sauce died at her home in the arms of her owner Tabatha following complications from a urinary tract infection on May 14, 2019 at age 7. Her death was announced on May 17, 2019, on social media and she was mourned by many people across the globe. Tributes were posted worldwide.';
    fill(255); //white
    textAlign(LEFT);
    textSize(15);
    text(s, 50, 150, 200, 200); // Text wraps within text box
    text("- Wikipedia ", width /7 , height / 1.09);

  //make text appear when hovering over grave
  if ((mouseX > 433) && (mouseX < 535) && (mouseY > 235) && (mouseY < 340)){
    let s = '*You give a rose to Tardar, just like they do on the Bachelor.*';
    fill(255); //white
    textAlign(LEFT);
    textSize(15);
    text(s, 300, 170, 150, 100); // Text wraps within text box
    image(imageList[18], 440, 260, 70, 70); //rose
  }
  else {
    fill(255); //white
  }

  //cursor devil >>>>>>>>>>>:)
  image(imageList[9], mouseX, mouseY, 50, 50);

  //realign everything else
  textAlign(CENTER);
}



//------------------------------------------------------
//---------------------- THE END -----------------------
//------------------------------------------------------

