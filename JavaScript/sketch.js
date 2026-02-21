let centerX, centerY;
let goldfishX, goldfishY, goldfishAngle;
let inputField, submitButton, outputText;

/**
 * Sets up the initial canvas and environment for the sketch.
 * - Creates a canvas with the width of the window and a fixed height of 200 pixels.
 * - Attaches the canvas to the hero section of the webpage.
 * - Styles the canvas to ensure proper positioning and layering.
 * - Sets the background color to sky blue.
 * - Initializes the clock center and goldfish position with random values.
 */
function setup() {
      let block = createDiv("");
      let heroSection = select("#hero"); // Select the hero section
      let canvas = createCanvas(windowWidth, 175); // Create a canvas
      block.parent(heroSection); // Attach the div to the hero section
      canvas.parent(block); // Attach the canvas to the block
      canvas.attribute("aria-hidden", "true");
      canvas.attribute("role", "presentation");
      canvas.attribute("tabindex", "-1");

      // Initialize clock center
      centerX = width / 2;
      centerY = height / 2;
      angleMode(DEGREES);

      // Initialize goldfish position
      goldfishX = random(width);
      goldfishY = random(height) / 2 + height / 4; // Start in the middle vertical area
      goldfishAngle = random(270);
}

function draw() {
      clear(); // Clear the canvas with transparency

      // Display 12-hour digital clock
      let h = hour() % 12 || 12; // Convert to 12-hour format
      let m = nf(minute(), 2);
      let s = nf(second(), 2);
      let period = hour() >= 12 ? "PM" : "AM"; // Determine AM/PM
      textSize(48);
      textAlign(CENTER, CENTER);
      fill(200,255,0, 170);
      text(`${h}:${m}:${s} ${period}`, centerX, centerY);

      // Draw goldfish
      noStroke();
      fill(255, 165, 0);
      ellipse(goldfishX, goldfishY, 20, 10);
      triangle(
            goldfishX - 10 * cos(goldfishAngle),
            goldfishY - 10 * sin(goldfishAngle),
            goldfishX - 20 * cos(goldfishAngle + 30),
            goldfishY - 20 * sin(goldfishAngle + 30),
            goldfishX - 20 * cos(goldfishAngle - 30),
            goldfishY - 20 * sin(goldfishAngle - 30),
      );

      // Update goldfish position
      goldfishX += cos(goldfishAngle) * 2;
      goldfishY += sin(goldfishAngle) * 2;

      // Bounce goldfish off walls
      if (goldfishX < 0 || goldfishX > width) {
            goldfishAngle = 180 - goldfishAngle;
      }
      if (goldfishY < 0 || goldfishY > height) {
            goldfishAngle = -goldfishAngle;
      }
}
