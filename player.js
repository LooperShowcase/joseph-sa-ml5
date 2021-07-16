class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravti = 1;
  }
  jump() {
    if (this.y == height - this.size) this.velocityY = -15;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY = this.velocityY + this.gravti;
    this.y = constrain(this.y, 0, height - this.size);
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  collided(obsToCheack) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      obsToCheack.x,
      obsToCheack.y,
      obsToCheack.size,
      obsToCheack.size
    );
    return isColliding;
  }
}
