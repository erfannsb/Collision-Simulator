var width = window.innerWidth;
var height = window.innerHeight;
var stage = new Konva.Stage({
  container: "ds",
  width: 500,
  height: 500,
});
var layer = new Konva.Layer();
var layer2 = new Konva.Layer();

//declaring circles
var circleRadius = 10;
var circleAPos = [0, 0];
var circleBPos = [500, 250];

var circleA = new Konva.Circle({
  x: circleAPos[0],
  y: circleAPos[1],
  radius: circleRadius,
  fill: "#ef233c",
});

var circleB = new Konva.Circle({
  x: circleBPos[0],
  y: circleBPos[1],
  radius: circleRadius,
  fill: "#0077b6",
});

//hor lines: -
var l1 = new Konva.Line({
  points: [50, 500, 50, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l2 = new Konva.Line({
  points: [100, 500, 100, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l3 = new Konva.Line({
  points: [150, 500, 150, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l4 = new Konva.Line({
  points: [200, 500, 200, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l5 = new Konva.Line({
  points: [250, 500, 250, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l6 = new Konva.Line({
  points: [300, 500, 300, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l7 = new Konva.Line({
  points: [350, 500, 350, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l8 = new Konva.Line({
  points: [400, 500, 400, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var l9 = new Konva.Line({
  points: [450, 500, 450, 0],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

layer.add(l1);
layer.add(l2);
layer.add(l3);
layer.add(l4);
layer.add(l5);
layer.add(l6);
layer.add(l7);
layer.add(l8);
layer.add(l9);

//ver lines:

var v1 = new Konva.Line({
  points: [500, 50, 0, 50],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v2 = new Konva.Line({
  points: [500, 100, 0, 100],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v3 = new Konva.Line({
  points: [500, 150, 0, 150],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v4 = new Konva.Line({
  points: [500, 200, 0, 200],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v5 = new Konva.Line({
  points: [500, 250, 0, 250],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v6 = new Konva.Line({
  points: [500, 300, 0, 300],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v7 = new Konva.Line({
  points: [500, 350, 0, 350],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v8 = new Konva.Line({
  points: [500, 400, 0, 400],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

var v9 = new Konva.Line({
  points: [500, 450, 0, 450],
  stroke: "#8d99ae",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
});

layer.add(v1);
layer.add(v2);
layer.add(v3);
layer.add(v4);
layer.add(v5);
layer.add(v6);
layer.add(v7);
layer.add(v8);
layer.add(v9);

//form here!

const reset = document.getElementById("reset");
var slider = document.getElementById("myRange");
var output = document.getElementById("posV");
var vvalue = document.getElementById("speedV");

output.innerHTML = slider.value;

//circlePath Function:

//constant variables in equation:
const g = 9.807;
const theta = 60 * 0.0174533;

//declaring user input
var h = 50;

//declaring main vars:
var strikePoint, t, v0a;
//calculating V0a
function calV() {
  strikePoint = h;
  t = Math.sqrt((-2 * (strikePoint - circleBPos[0])) / g);
  v0a = (circleBPos[1] - circleAPos[1]) / (Math.cos(theta) * t);
  console.log(circleBPos[1] - circleAPos[1]);
  console.log({ v0a, t, h });
}
calV();
//controling animation
var startAllowed = true;
var animationIsOn = false;

//predicts red circle path
function getPath() {
  let lineXY = new Array();
  for (let i = 0; i < t * 100; i++) {
    let xA = v0a * Math.cos(theta) * i + circleAPos[1];
    let yA = -(1 / 2) * g * Math.pow(i, 2) + v0a * i + circleAPos[0];
    lineXY.push(yA);
    lineXY.push(xA);
  }
  let circleAPath = new Konva.Line({
    points: lineXY,
    stroke: "#575a5e",
    id: "line1",
    strokeWidth: 2,
    lineJoin: "round",
    dash: [13, 10],
    lineCap: "round",
    tension: 0.5,
  });
  let circleBPath = new Konva.Line({
    points: [circleBPos[0], circleBPos[1], 0, circleBPos[1]],
    stroke: "#575a5e",
    id: "line2",
    strokeWidth: 2,
    lineJoin: "round",
    dash: [13, 10],
    lineCap: "round",
    tension: 0.5,
  });
  layer2.add(circleBPath);

  let xTarget = v0a * Math.cos(theta) * t;
  let yTarget = -(1 / 2) * g * Math.pow(t, 2) + v0a * t;

  console.log({ xTarget, yTarget });
  let target = new Konva.Circle({
    x: yTarget,
    y: xTarget,
    radius: 15,
    fill: "#02090e",
    stroke: "#575a5e",
    strokeWidth: 2.5,
    lineJoin: "round",
    dash: [2, 10],
    lineCap: "round",
    tension: 0.5,
    id: "target",
  });
  layer2.add(circleBPath);
  layer2.add(circleAPath);
  layer2.add(target);
}
getPath();

//slider aka seekbar handle:
slider.oninput = function () {
  output.innerHTML = this.value;
  if (animationIsOn == true) {
    return;
  }
  h = this.value;
  calV();
  vvalue.innerHTML = v0a.toFixed(0);
  let shape1 = stage.find("#line1")[0] || false;
  let shape15 = stage.find("#line2")[0] || false;
  let shape2 = stage.find("#target")[0] || false;
  if (shape1 || shape15 || shape2) {
    shape1.destroy();
    shape2.destroy();
    shape15.destroy();
  }
  getPath();
};

//document reload handle
document.addEventListener("DOMContentLoaded", function (event) {
  output.innerHTML = 50;
  slider.value = 50;
});

//on start animation event:
const startButton = document.getElementById("play");
startButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (startAllowed == false) {
    return;
  }
  startAllowed = false;
  animationIsOn = true;
  slider.disabled = true;
  h = slider.value;
  calV();
  let shape1 = stage.find("#line1")[0];
  if (!shape1) {
    getPath();
  }

  //animations:
  //red
  var animA = new Konva.Animation(function (frame) {
    let time = frame.time * 0.001;
    if (time > t) {
      this.stop();
      return;
    }
    console.log(time);
    let xA = v0a * Math.cos(theta) * time - circleAPos[1];
    let yA = -(1 / 2) * g * Math.pow(time, 2) + v0a * time - circleAPos[0];
    circleA.y(xA);
    circleA.x(yA);
  }, layer);
  //blue
  var animB = new Konva.Animation(function (frame) {
    let time = frame.time * 0.001;

    if (time > t) {
      this.stop();
      return;
    }
    let yB = -(1 / 2) * g * Math.pow(time, 2) + circleBPos[0];
    console.log({ yB, t });
    circleB.x(yB);
  }, layer);
  console.log({ h, strikePoint, t, v0a });
  animA.start();
  animB.start();
});

reset.addEventListener("click", () => {
  let shape1 = stage.find("#line1")[0] || false;
  let shape15 = stage.find("#line2")[0] || false;
  let shape2 = stage.find("#target")[0] || false;
  if (shape1 || shape15 || shape2) {
    shape1.destroy();
    shape2.destroy();
    shape15.destroy();
  }
  animationIsOn = false;
  slider.disabled = false;
  let tweenA = new Konva.Tween({
    node: circleA,
    duration: 0.1,
    x: circleAPos[0],
    y: circleAPos[1],
  });
  let tweenB = new Konva.Tween({
    node: circleB,
    duration: 0.1,
    x: circleBPos[0],
    y: circleBPos[1],
  });
  tweenA.play();
  tweenB.play();
  strikePoint = 0;
  t = 0;
  v0a = 0;
  startAllowed = true;
});

layer.add(circleB);
layer.add(circleA);

stage.add(layer2);
stage.add(layer);

const howOpenButton = document.getElementById("howopen");
const howContainer = document.getElementById("howd");
const howCloseButton = document.getElementById("howclose");

howOpenButton.addEventListener("click", () => {
  howContainer.style.display = "block";
  anime({
    targets: "#howd",
    opacity: "1",
    easing: "easeInOutExpo",
  });
});

howCloseButton.addEventListener("click", () => {
  anime({
    targets: "#howd",
    opacity: "0",
    easing: "easeInOutExpo",
    duration: 1000,
  });
  setTimeout(() => {
    howContainer.style.display = "none";
  }, 1100);
});
