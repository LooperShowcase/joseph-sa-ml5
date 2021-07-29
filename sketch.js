let player;
let img;
let playerimg;
let obs;
let Obstacles = [];
let resultP;
let worldClassifier;
function preload() {
  img = loadImage("background.jpg");
  playerimg = loadImage("player.png");
  obs = loadImage("obstacle.png");
  let options = {
    probabilityThreshold: 0.85,
  };
  worldClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);

  worldClassifier.classify(gotResultes);
  player = new Player();
}
function gotResultes(errors, results) {
  let word = results[0].label;
  if (word === "up") {
    player.jump();
  }
  console.log(results[0].label, results[0].confidence);
}
function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}
function draw() {
  if (random(1) < 0.01) {
    Obstacles.push(new Obstacle());
  }
  background(img);

  for (let ele of Obstacles) {
    ele.show();
    ele.move();
    if (player.collided(ele) === true) {
      console.log("GAME OVER!");
      noLoop();
      textSize(32);
      text("Game_Over", 10, 30);
      fill(0, 102, 153);
    }
  }
  player.show();
  player.move();
}
