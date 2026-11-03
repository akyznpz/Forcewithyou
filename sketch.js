let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);

  if (mouseIsPressed) {
    let mPos = createVector(mouseX, mouseY);

    // 마우스 방향으로 당기는 힘 (거리가 거의 0이면 방향을 정할 수 없으니 제외)
    let pull = p5.Vector.sub(mPos, ball.pos);
    if (pull.mag() > 1) {
      pull.setMag(0.5);
      ball.addForce(pull);
    }
  }

  ball.update();
  ball.show();
}
