let counterM = 0;
let counterV = 0;
let counterE = 0;
let counterMA = 0;
let counterJ = 0;
let counterS = 0;
let counterU = 0;
let counterN = 0;
let extraCanvas;
let mercuryY;
let mercuryX;
//distance
let mD;
let venusY;
let venusX;
let vD;
let earthY;
let earthX;
let eD;
let marsY;
let marsX;
let maD;
let jupiterY;
let jupiterX;
let jD;
let saturnY;
let saturnX;
let sD;
let uranusY;
let uranusX;
let uD;
let neptuneY;
let neptuneX;
let nD;
function setup() {
  createCanvas(600, 700);
  extraCanvas = createGraphics(600, 700);
  extraCanvas.clear();

}
function draw() {
  background(0);
  mercuryY = sin(counterM) * 42.5 + 300;
  mercuryX = cos(counterM) * 42.5 + 300;
  fill(255, 150, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 85);
  //Mercury
  // noStroke();
  stroke(0);
  fill(220, 220, 220);
  circle(mercuryX, mercuryY, 10);
  counterM += 0.001;
  venusY = sin(counterV) * 55 + 300;
  venusX = cos(counterV) * 55 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 110);
  //Venus
  // noStroke();
  stroke(0);
  fill(222, 184, 135);
  circle(venusX, venusY, 12);
  counterV -= 0.0075;
  earthY = sin(counterE) * 67.5 + 300;
  earthX = cos(counterE) * 67.5 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 135);
  //Earth
  stroke(0);
  fill(0, 191, 255);
  circle(earthX, earthY, 12);
  counterE += 0.006;
  marsY = sin(counterMA) * 80 + 300;
  marsX = cos(counterMA) * 80 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 160);
  //Mars
  stroke(0);
  fill(220, 20, 60);
  circle(marsX, marsY, 10);
  counterMA += 0.005;
  jupiterY = sin(counterJ) * 120 + 300;
  jupiterX = cos(counterJ) * 120 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 240);
  //Jupiter
  stroke(0);
  fill(255, 248, 220);
  circle(jupiterX, jupiterY, 60);
  counterJ += 0.003;
  saturnY = sin(counterS) * 190 + 300;
  saturnX = cos(counterS) * 190 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 385);
  //Saturn
  stroke(0);
  fill(222, 184, 135);
  circle(saturnX, saturnY, 50);
  counterS += 0.0025;
  uranusY = sin(counterU) * 240 + 300;
  uranusX = cos(counterU) * 240 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 480);
  //uranus
  stroke(0);
  fill(240, 248, 255);
  circle(uranusX, uranusY, 30);
  counterU += 0.002;
  neptuneY = sin(counterN) * 280 + 300;
  neptuneX = cos(counterN) * 280 + 300;
  fill(220, 220, 0);
  noStroke();
  circle(300, 300, 50);
  //background strokes
  noFill();
  stroke(255);
  circle(300, 300, 560);
  //neptune
  stroke(0);
  fill(100, 149, 237);
  circle(neptuneX, neptuneY, 30);
  counterN += 0.0012;
  image(extraCanvas, 0, 0);
}
function mouseClicked() {
  //First clear the canvas
  extraCanvas.clear();
  mD = dist(mercuryX, mercuryY, mouseX, mouseY);
  vD = dist(venusX, venusY, mouseX, mouseY);
  eD = dist(earthX, earthY, mouseX, mouseY);
  maD = dist(marsX, marsY, mouseX, mouseY);
  jD = dist(jupiterX, jupiterY, mouseX, mouseY);
  sD = dist(saturnX, saturnY, mouseX, mouseY);
  uD = dist(uranusX, uranusY, mouseX, mouseY);
  nD = dist(neptuneX, neptuneY, mouseX, mouseY);
  if (mD < 10) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Mercery" +
        "\n" +
        "Gravitational Strength: " +
        "3.70m/s^2" +
        "\n" +
        "Orbit Time: " +
        "88 Days" +
        "\n" +
        "Orbit Circumference: " +
        "35M Miles" +
        "\n" +
        "Distance from Earth: " +
        "28M Miles",
      50,
      600
    );
  } else if (vD < 12) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Venus" +
        "\n" +
        "Gravitational Strength: " +
        "8.36m/s^2" +
        "\n" +
        "Orbit Time: " +
        "225 Days" +
        "\n" +
        "Orbit Circumference: " +
        "67M Miles" +
        "\n" +
        "Distance from Earth: " +
        "62M Miles",
      50,
      600
    );
  } else if (eD < 12) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Earth" +
        "\n" +
        "Gravitational Strength: " +
        "9.80m/s^2" +
        "\n" +
        "Orbit Time: " +
        "365 Days" +
        "\n" +
        "Orbit Circumference: " +
        "92M Miles" +
        "\n" +
        "Distance from Earth: " +
        "0M Miles",
      50,
      600
    );
  } else if (maD < 10) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Mars" +
        "\n" +
        "Gravitational Strength: " +
        "3.72m/s^2" +
        "\n" +
        "Orbit Time: " +
        "687 Days" +
        "\n" +
        "Orbit Circumference: " +
        "141M Miles" +
        "\n" +
        "Distance from Earth: " +
        "33.9M Miles",
      50,
      600
    );
  } else if (jD < 60) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Jupiter" +
        "\n" +
        "Gravitational Strength: " +
        "24.79m/s^2" +
        "\n" +
        "Orbit Time: " +
        "4,380 Days" +
        "\n" +
        "Orbit Circumference: " +
        "483M Miles" +
        "\n" +
        "Distance from Earth: " +
        "365M Miles",
      50,
      600
    );
  } else if (sD < 50) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Saturn" +
        "\n" +
        "Gravitational Strength: " +
        "10.44m/s^2" +
        "\n" +
        "Orbit Time: " +
        "10,585 Days" +
        "\n" +
        "Orbit Circumference: " +
        "886M Miles" +
        "\n" +
        "Distance from Earth: " +
        "746M Miles",
      50,
      600
    );
  } else if (uD < 30) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Uranus" +
        "\n" +
        "Gravitational Strength: " +
        "8.87m/s^2" +
        "\n" +
        "Orbit Time: " +
        "30,660 Days" +
        "\n" +
        "Orbit Circumference: " +
        "1783M Miles" +
        "\n" +
        "Distance from Earth: " +
        "1600M Miles",
      50,
      600
    );
  } else if (nD < 30) {
    extraCanvas.clear();
    extraCanvas.fill(255);
    extraCanvas.text(
      "Name: " +
        "Neptune" +
        "\n" +
        "Gravitational Strength: " +
        "11.15m/s^2" +
        "\n" +
        "Orbit Time: " +
        "60,225 Days" +
        "\n" +
        "Orbit Circumference: " +
        "2795M Miles" +
        "\n" +
        "Distance from Earth: " +
        "2700M Miles",
      50,
      600
    );
  } else {
    extraCanvas.clear();
  }
}