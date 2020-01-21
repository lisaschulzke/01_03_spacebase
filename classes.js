class Invader {
  constructor(width, height, posX, posY, appearance, id) {
    this.width = widthInvader;
    this.height = heightInvader;
    this.x = posX;
    this.y =posY;
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
