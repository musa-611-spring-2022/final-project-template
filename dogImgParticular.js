/* Animation Title */
const canvas = document.querySelector('.the-canvas');
const context = canvas.getContext('2d');
const ratio = window.devicePixelRatio || 1;
const totalLineHeight = 1200;
const totalLines = 3;
const totalDiff = totalLineHeight / totalLines;
const fontHeight = 60 * ratio - 50; // Small centering
const offsetX = 15;
const offsetY = 1;
let verticalAlign;
let line2Diff;
let line3Diff;
let line4Diff;
let iteration;
let iterations;
let animationFrame;
const startRGB = [255, 186, 73];
const endRGB = [194, 205, 215];
let fullColorSet = [];

function colourGradientor(p, rgbBeginning, rgbEnd) {
  const w = p * 2 - 1;
  const w1 = (w + 1) / 2.0;
  const w2 = 1 - w1;
  const rgb = [parseInt(rgbBeginning[0] * w1 + rgbEnd[0] * w2, 10),
    parseInt(rgbBeginning[1] * w1 + rgbEnd[1] * w2, 10),
    parseInt(rgbBeginning[2] * w1 + rgbEnd[2] * w2, 10)];
  return rgb;
}

function prepareColorSets() {
  fullColorSet = [];
  for (let i = 0; i < iterations; i++) {
    fullColorSet.push(colourGradientor(1 - i / iterations, startRGB, endRGB));
  }
}

function drawText(x, y) {
  context.fillText('DDDogs', x, y + line4Diff);
  context.strokeText('DDDogs', x, y + line4Diff);
  context.fillText('in', x, y + line3Diff);
  context.strokeText('in', x, y + line3Diff);
  context.fillText('New York City', x, y + line2Diff);
  context.strokeText('New York City', x, y + line2Diff);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = iterations - 1; i > 0; i--) {
    context.fillStyle = `rgb(${fullColorSet[i][0]},${fullColorSet[i][1]},${fullColorSet[i][2]})`;
    const x = (window.innerWidth / 2) * ratio - (i * offsetX);
    const y = verticalAlign + i * offsetY + (Math.sin(i + iteration) * 2);
    drawText(x, y);
  }
  iteration += 1;
  animationFrame = requestAnimationFrame(draw);
}

function init() {
  // Cancel any already running animations
  cancelAnimationFrame(animationFrame);
  // Set the canvas width and height
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  // Set the canvas font properties
  context.font = '350px Varela Round';
  context.textAlign = 'center';
  context.strokeStyle = '#EF6190';
  context.lineWidth = '5';
  context.textBaseline = 'middle';
  // Centering of the text
  verticalAlign = ((window.innerHeight / 2) * ratio) - totalLineHeight / 2;
  line2Diff = totalLineHeight + fontHeight - totalDiff * 1;
  line3Diff = totalLineHeight + fontHeight - totalDiff * 2;
  line4Diff = totalLineHeight + fontHeight - totalDiff * 3;
  // How many iterations will we go through?
  iterations = 10;
  prepareColorSets(iterations);
  iteration = 0;
  animationFrame = requestAnimationFrame(draw);
}

window.onresize = init;
