class Invader {
  constructor(width, height, posX, posY, appearance, id) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY =posY;
    this.appearance = appearance;
    this.id = id;
  }

  shootLaser() {
    console.log("Invader " +this.id+" Laser shot")
  }

  explode() {
    console.log("Invader "+this.id+" exploded")
  }
  isHitByBullet(bulletX, bulletY) {
    //prüfen ob der Bullet den Invader trifft
  }
  static generateInvader() {
    return "ABC";
  }
}
