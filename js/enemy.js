// Enemies our player must avoid
var Enemy = function (x, y, oldX, speed = generateRandomNum(50, 400)) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.oldX = x;
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Check if the player hit a bug
    //If the player hit a bug they'll die
    //The game will then be reseted.
    if (this.y === player.getY() ) {
        if (Math.abs(player.getX() - this.x) < 80) {
            reset();
        }
    } else {

    }
    if (this.x < 400) {
        this.x += (this.speed * dt);
    } else {
        this.x = this.oldX;
    }
};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
