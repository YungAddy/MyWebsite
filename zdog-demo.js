// rotating flag variable
let isSpinning = true;
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas",
  zoom: 1.5,
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function () {
    isSpinning = false;
  },
});

let dome = new Zdog.Hemisphere({
  addTo: illo,
  diameter: 60,
  // fill enabled by default
  // disable stroke for crisp edge
  stroke: false,
  color: '#0030a3',
  backface: '#d300ce',
  translate: {z: 30},
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 50,
  stroke: 10,
  color: '#05a300',
  translate: {z: -40},
});

// square
let square = new Zdog.Rect({
  addTo: illo,
  width: 50,
  height: 50,
  // position further back
// #05a300 green
  stroke: 15,
  color: "#4abeff",
  fill: false,
  translate: { z: -60},
});

new Zdog.Shape({
  addTo: illo,
  path: [ // triangle
    { x:   0, y: -70 },
    { x:  40, y:  50 },
    { x: -30, y:  -40 },
  ],
  // closed by default
  stroke: 10,
  color: '#636'
});

let pentagon = new Zdog.Polygon({
  addTo: illo,
  radius: 70,
  sides: 6,
  stroke: 10,
  color: "#ffd217",
  translate: { z: 60},
});

// update & render
illo.updateRenderGraph();
function animate() {
  // rotate illo each frame
  if (isSpinning) {
    illo.rotate.y += 0.006;
  }
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
// start animation
animate();
