// Gems to score points for our player
var Gem = function() {

    // Generate random sprite image
    this.sprite ="images/gem-blue.png";


    this.setSprite = function() {

            var gemImage = [ "images/gem-blue.png",
                                "images/gem-green.png",
                                "images/gem-orange.png",
            ];

            var i = Math.floor(Math.random() * gemImage.length);
            this.sprite = gemImage[i]; 
    };

    this.x = 100;
    this.setX = function() {
        var posX = [2, 102, 202, 302, 402];
        var i = Math.floor(Math.random() * posX.length);
        this.x = posX[i];
        console.log(posX[1]);
    }

    this.y = 40;
    this.setY = function() {
        var posY = [40, 120, 200];
        var i = Math.floor(Math.random() * posY.length);
        this.y = posY[i];
    }
    this.hitBox = 60;
}

// Place in the Gem(s)
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var gem = new Gem();
gem.setSprite();
gem.setX();
gem.setY();

// Enemies our player must avoid
var Enemy = function(x, y, speed, name) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.hitBox = 60;
    this.name = name;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // reset it's position, or remove it and add a new enemy?
    if(this.x > 505) {
        this.x = -50;
    }
    else {
        this.x = this.x + this.speed * dt;
    }
    
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

            var playerImage = [ "images/char-boy.png", 
                                "images/char-cat-girl.png", 
                                "images/char-horn-girl.png", 
                                "images/char-pink-girl.png", 
                                "images/char-princess-girl.png"
            ];

            var i = Math.floor(Math.random() * playerImage.length);
            this.sprite = playerImage[i]; 
    }


    this.begPosX = 200; // Beginning X position, to always reset player to
    this.begPosY = 380; // Beginning Y position, to always reset player to
    this.x = this.begPosX;
    this.y = this.begPosY;
    this.hitBox = 60;

    this.handleInput = function(keyDirection) {

            // define actions per key input
            if(keyDirection == "left") {
                if( (player.x -100) >= 0) {
                    player.x = player.x - 100;
                }
            }

            if(keyDirection == "right") {
                if( (player.x + 100) < 500) {
                    player.x = player.x + 100;
                }
            }
            
            if(keyDirection == "up") {
                if( (player.y - 80) > 0) {
                    player.y = player.y - 80;
                }
            }
            
            if(keyDirection == "down") {
                
                if( (player.y + 80) < 400) {
                    player.y = player.y + 80;
                }
            }
    } // end handleInput()

    // For collision detection?
    this.update = function() {
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
var enemyA = new Enemy(0, 50, 80, "A");
var enemyB = new Enemy(0, 140, 60, "B");
var enemyC = new Enemy(0, 230, 20, "C");

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemyA, enemyB, enemyC];

// Should loop through the allEnemies and update position
//enemyA.update(20);

// How to add new enemies to the map?

// Place the player object in a variable called player
var player = new Player();

// Display Random Image on Screen load
player.setSprite();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
