frontend-nanodegree-arcade-game
===============================
This game is a part of my nano-degree from [Udacity](https://udacity.com/)
# Frogger Game
The game engine, resource.js, and images was provided by Udacity.

## Basic Functionality 
In this game we have a player and the enemies (bugs). You can move left, right, up or down. If you hit a bug you'll lose and you'll start over, if you don't hit a bug you'll win when you reach the water.

## Install 
To install the game download the files inside the dist folder.

Installation for users without Gulp, NPM, or Yarn:
* Use the git download button afterwards copy dist folder into preferred directory.
* Use git clone and afterwards copy dist folder into preferred directory.

Installation for users who have gulp:
* Download the entire project.
* Clone the entire project to your computer.

## How to run the project
Use the **cd** command into your head directory. Then in the terminal run **gulp default** - This only counts for users who have gulp installed.

## Gulp Commands
Here's a list of the commands I coded into the gulp file.
* **Gulp copy-html** will copy the HTML file to the dist folder. Only necessary if you are not using gulp default.
* **Gulp default** will copy the HTML file to the dist folder, and compress necessary JavaScript files.
* **Gulp copy-images** will copy the images files to the dist/images folder.
* **Gulp compress** will copy the JavaScript files to the dist/js folder.
 

## Game logic

* **You win if you:** reach the water without hitting a bug.
* **Loses if you:** hit a bug.
* **If you die or win:** you'll be able to play the game again.

