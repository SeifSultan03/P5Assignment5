let sound = new Tone.Players({
  Dog: "dog.mp3",
  Woosh: "woosh.mp3",
  Bottles: "bottles.mp3",
  Puppy: "pup3.mp3",
});

let PingPong = new Tone.PingPongDelay(0, 0.2);

sound.connect(PingPong);
PingPong.toDestination();

function setup() {
  createCanvas(400, 250);

  dogButton = createButton("Dog");
  dogButton.position(50, 40);
  dogButton.mousePressed(() => {
    sound.player("Dog").start();
  });

  wooshButton = createButton("Woosh");
  wooshButton.position(100, 40);
  wooshButton.mousePressed(() => {
    sound.player("Woosh").start();
  });

  bottlesButton = createButton("Bottles");
  bottlesButton.position(170, 40);
  bottlesButton.mousePressed(() => {
    sound.player("Bottles").start();
  });

  puppyButton = createButton("Puppy");
  puppyButton.position(240, 40);
  puppyButton.mousePressed(() => {
    sound.player("Puppy").start();
  });

  delaySlider = createSlider(0, 0.9, 0, 0.05);
  delaySlider.position(180, 135);
  delaySlider.mouseMoved(() => {
    PingPong.delayTime.value = delaySlider.value();
  });
}

function draw() {
  background(100);
  textSize(20);
  fill("white");
  text("pingpong delay", 30, 150);
}