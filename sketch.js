var spr;
var foods = [];
var d, x;
var snake;
var score = 0;

function setup() {
  createCanvas(1500, 700);
  spr = createSprite(width / 2, height / 2, 40, 40);
  spr.shapeColor = color(0);
  spr.rotateToDirection = true;
  spr.maxSpeed = 20;
  spr.friction = 0.25;

  for (var i = 0; i < 10; i++) {
    var xp = random(20, 1480);
    var yp = random(20, 680);
    f = createSprite(xp, yp, 20, 20);
    f.shapeColor = color(500);
    foods.push(f);
  }

}
function draw() {
  background(50);

  for (x = 0; x < foods.length; x++) {
    d = dist(spr.x, spr.y, foods[x].x, foods[x].y);
    if (d < 30) {
      spr.width += 20;
      foods[x].destroy();
      foods.splice(x, 1);
      score += 1;
    }
  }

  if (foods.length == 0) {
    gameOver();
  }

  if (mouseIsPressed) {
    spr.attractionPoint(10, mouseX, mouseY);
  }

  fill("white");
  textSize(40);
  text(`Score: ${score}`, 20, 60);
  textAlign(CENTER, CENTER);

  drawSprites();
}

function gameOver() {
  swal(
    {
      title: `You Won!!!`,
      text: "Thanks for playing!!",
      confirmButtonText: "Play Again"
    },
    function (isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}
