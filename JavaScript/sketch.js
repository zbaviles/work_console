let winWidth = windowWidth;
let winHeight = windowHeight;
function setup() {
      let canvas = createCanvas(0, 0);
      background(0);
      let heroSection = select("#hero");
      heroSection.size(299, 200);
      heroSection.style("background-color", "#333");
      heroSection.style("z-index", "1"); // Ensure it is above other elements
      heroSection.style("width", "100%");
      heroSection.style("height", "auto");
      canvas.parent(heroSection);
}

function windowResized() {
      winWidth = windowWidth;
      winHeight = windowHeight;
      resizeCanvas(winWidth, winHeight);
}

function draw() {
      // Add your drawing code here
}
