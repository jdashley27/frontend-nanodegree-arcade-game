// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

    this.sprite = 'images/char-boy.png'; // set a default

    // How to get this to execute?
    this.setSprite = function() {

            var playerImage = ["images/char-boy.png", 
                                "images/char-cat-girl.png", 
                                "images/char-horn-girl.png", 
                                "images/char-pink-girl.png", 
                                "char-princess-girl"
            ];

            var i = Math.floor(Math.random() * ( (playerImage.length - 1) - 0) + 0);

            console.log(i);

            this.sprite = playerImage[i]; 
    }
    this.x = 20 * 10;
    this.y = 350;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
var enemyA = new Enemy(0, 0, 20);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemyA];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   // player.handleInput(allowedKeys[e.keyCode]);
});
