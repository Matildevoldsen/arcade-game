class Player {
    constructor() {
        //Setting the player
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;

        this.allowedInput =
            ['up', 'down', 'left', 'right'];
    }

    handleInput(key, keyCode) {
        //Checking if the player goes outside the canvas
        if (this.x >= 400 ||
            this.x <= -20 ||
            this.y >= 450 ||
            this.y <= 0) {
            reset();
        }

        //Checking if the user has reached the water
        //If true they've won
        if (this.y <= -10) {
            this.x = 200;
            this.y = 405;
            reset();
            console.log("You Won");
        }

        /**
         * Moving the player by checking the keycode
         **/
        if (keyCode == 38) {
            console.log('moved');
            this.y -= 80;
            this.update();
        }

        if (keyCode == 40) {
            this.y += 80;
            this.update();
        }

        if (keyCode == 37) {
            this.x -= 100;
            this.update();
        }

        if (keyCode == 39) {
            this.x += 100;
            this.update();
        }
    }


    draw() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {
        this.draw();
    }

    render() {
        this.draw();
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
}
