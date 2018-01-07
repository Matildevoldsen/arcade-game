//Generate random number
function generateRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}
//Reset the game to start and notify the user that they've won the game
function reset() {
    player.setX(200);
    player.setY(400);


    //Reseting & randomizing the bugs speed.
    let enemy1 = new Enemy(-90, 80);
    let enemy2 = new Enemy(100, 160);
    let enemy3 = new Enemy(-90, 240);

    allEnemies = [];
    allEnemies.push(enemy1);
    allEnemies.push(enemy2);
    allEnemies.push(enemy3);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy1 = new Enemy(-90, 80);
let enemy2 = new Enemy(100, 160);
let enemy3 = new Enemy(-90, 240);

let allEnemies = [
    enemy1,
    enemy2,
    enemy3,
];

let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.render();

    player.handleInput(allowedKeys[e.keyCode], e.keyCode);
});