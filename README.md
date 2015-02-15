# Frogger Game

##Contents

1. Overview
2. Playing The Game
3. Game Mechanics
4. Ideas To Enhance The Game
5. Synopsis

##Overview
I found this game to be a challenging project, as I don't have a lot of experience building games. I had some struggle with figuring out how the various mechanics of the game worked, and to get all of assets to render correctly. The most challenging aspect of this was the time it required to play around with the engine, and understand how to execute the components of the game. With this said, I was able to get a stable version of the game to work. Unfortunately, there are so many more things I would like to do to this, but must move on in favor of progressing on to other projects.

##Playing The Game
The mechanics of the game are very simple. You can move the player left, up, down, and right by using their respective arrow keys on the keyboard. The objective of the game is to keep collecting gems, while avoiding being hit by the bugs. More bugs will spawn with every acquired gem. At this point, there is no end to the game.

##Game Mechanics

###The Player
With the player, I've written a script that will randomly generate a image for the player. This allows the character to change every time they play (potentially). The player's mechanics are simple, as I've utilized the game engine to let the player move left, right, up, and down based on their respective key events that are entered. I've attached boundaries to the player, so they cannot leave the confines of the canvas.

###The Enemy
The enemies are rendered with a random speed attached to them. When they cross the threshold of the canvas, their speed is recalculated, so they could then be faster or slower than the time they ran before. A very rudimentary hitbox algorithm has been written to determine when they collide with the player. Upon collision with the player, the player is reset to his original position.

###The Gem
As with the Player, the Gem's sprite is randomly generated. When the player collides with the gem, the gem is sent to a new, random location along with a randomly selected image. The player's gem count is then used to help spawn additional enemies.

##Ideas To Enhance The Game
As the game currently stands, there is little game pyschology utilized to encourage a player from continuation. The following are ideas that could be built into the game, to add additional incentive for playing the game:

###Keeping Score
With each gem the player collects, their score total could be displayed and added unto. Each color of gem could hold it's own point value, for instance: Blue = 500, Green = 1000, and Orange = 5000. At the end of the game (see "Player's Life" further in this document), the score could be saved to a JavaScript cookie on the user's browser. This score could be pulled up on a user's new visit to the website, and their "High Score" could be displayed to create incentive to beat it.

###Player's Life
A game is not much fun without a challenge. The player could have a set number of lives (like 5), which could be displayed for them to see. Each time they hit the enemy, one of their lives could be lost. If the player loses all of their lives, the game could end. They would then have to reset the game to begin anew

###Smarter Enemies
The enemies' algorithm could be greatly enhanced, so they can randomly change speeds. Also, new enemies could be added that have a faster (or much slower speed). The enemies also need to be changed so there are not so many that move at once, to give the user opportunity to get in and out at higher levels.

##Synopsis
As the game stands now, it is pretty generic. As mentioned in the "Game Mechanics" section, there are a number of ways to improve the game's enticement. I've chosen to leave the game as is, in favor of moving on to projects which hold higher interest for myself. Though, this was a challenging (and satisfying) project.