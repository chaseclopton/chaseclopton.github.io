$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 700, 150, 40, "blue");
    createPlatform(450, 575, 135, 20, "red");
    createPlatform(200, 675, 135, 20, "purple");
    createPlatform(750, 450, 135, 20, "red");
    createPlatform(550, 325, 145, 20, "red");
     createPlatform(325, 250, 145, 20, "cyan");
    // TODO 3 - Create Collectables
    createCollectable("steve", 600, 300);
    createCollectable("diamond", 500, 550);
    createCollectable("max", 800, 400);

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1250);
    createCannon("right", 300, 1250);
    createCannon("bottom", 525, 1250);
c
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
