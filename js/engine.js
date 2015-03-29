var Engine = (function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        patterns = {},
        lastTime,
        playerScore; // the player's score

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    function main() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        lastTime = now;
        win.requestAnimationFrame(main);
    }

    // Should define a hit box for collisions
    function checkCollisions() {
        
        // Reset the player's position when then hit the water.
        if( player.y < 0) {
            reset();
        }

        // Calculate the enemies' hitbox and see if they collide with the player
        allEnemies.forEach(function(enemy) {
           

            // Need to determine if the enemy crosses into the players field of vision
            if( (enemy.y - enemy.hitBox) < player.y  && 
                enemy.y > (player.y - player.hitBox) &&
                (enemy.x - enemy.hitBox) < player.x &&
                enemy.x > (player.x - player.hitBox) )
            {
                // Resets the player
                reset();
            }

            // Detect if player collides with Gem
            if( (gem.y - gem.hitBox) < player.y &&
                gem.y > (player.y - player.hitBox) &&
                (gem.x - gem.hitBox) < player.x &&
                gem.x > (player.x - player.hitBox) )
            {
                // set a new gem location/image
                gem.setX();
                gem.setY();
                gem.setSprite();

                // add the gem points to the player's total
                player.gemCount++;

                // Add more enemies
                addEnemies(player.gemCount);
            }

        });
    }

    function init() {
        lastTime = Date.now();
        main();
    }

    function update(dt) {
        updateEntities(dt);
        checkCollisions();
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    function render() {
        var rowImages = [
                'images/water-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/grass-block.png',
                'images/grass-block.png'
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

    // This is constantly rendering
    function renderEntities() {
        
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
        gem.render();
        
    }

    function reset() {
        //reset player back to their beginning position
        player.x = player.begPosX;
        player.y = player.begPosY;
    }

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png',
        'images/gem-blue.png',
        'images/gem-green.png',
        'images/gem-orange.png',
        'images/heart.png',
        'images/key.png',
        'images/rock.png',
        'images/selector.png',
        'images/star.png'
    ]);

    // This initiates the engine
    Resources.onReady(init);

    global.ctx = ctx;

    function addEnemies(count) {

        for( i=0; i < count + count; i++) {
            var enemy = new Enemy(-200, 50); // need to randomize position
            
            enemy.setY();
            enemy.render();
            allEnemies.push(enemy);
        }
    }

})(this);
