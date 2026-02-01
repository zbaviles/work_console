let winWidth = windowWidth;
let winHeight = windowHeight;
function setup() {
      let canvas = createCanvas(0, 0);
      background(0);
      let heroSection = select(".banner");
      heroSection.style("background-color", "transparent");
      heroSection.style("z-index", "1"); // Ensure it is above other elements
      heroSection.style("width", "auto");
      heroSection.style("height", "100%");
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
