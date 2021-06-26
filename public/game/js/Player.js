class Player extends Sprite {
    constructor(divName, position, assetDesc, boundaryRect) {
        super(divName, position, assetDesc.fileName, 
            new Size(assetDesc.width, assetDesc.height));
        this.lives = GameSettings.playerStartLives;    
        this.score = 0;
        this.highScore = 0;
        this.hit = false;
        this.lastFlash = 0;
        this.numFlashes = 0;
        this.state = GameSettings.playerState.ok;
        this.boundaryRect = boundaryRect;
        this.boundaryRect.shift(this.anchorShift.x, this.anchorShift.y);
    }

    reset() {
        this.state = GameSettings.playerState.ok;
        this.score = 0;
        this.hit = false;
        this.lastFlash = 0;
        this.numFlashes = 0;
        this.lives = GameSettings.playerStartLives;
        this.setLives();
        this.setScore();
        this.setHighScore();
        this.setPosition(GameSettings.playerStart.x, GameSettings.playerStart.y, true );
    }

    update(dt) {

        switch(this.state) {
            case GameSettings.playerState.hitFlashing:
                this.lastFlash += dt;
                if (this.lastFlash > GameSettings.playerFlashTime) {
                    this.lastFlash = 0;
                    this.numFlashes++;
                    if (this.numFlashes == GameSettings.playerFlashes) {
                        this.state = GameSettings.playerState.ok;
                        $('#' + this.divName).show();
                        this.hit = false;
                        $('#' + this.divName).css({'opacity' : '1.0'});
                    } else {
                        if (this.numFlashes % 2 == 1) { 
                            $('#' + this.divName).hide();
                        } else {
                            $('#' + this.divName).show();
                        }
                    }
                }
            break;
        }

        if (this.hit == true && this.state != GameSettings.playerState.hitFlashing) {
            this.state = GameSettings.playerState.hitFlashing;
            this.lastFlash = 0;
            this.numFlashes = 0;
            this.lives--;
            this.setLives();
            playSound('loselife');
            console.log('player hit!!');
            if (this.lives > 0) {
                $('#' + this.divName).css({'opacity' : GameSettings.playerFlashOpacity});
            }
        }

    }

    move(x, y) {
        let xStep = GameSettings.playerMoveStep * x;
        let yStep = GameSettings.playerMoveStep * y;

        if (this.boundaryRect.OutsideHorizontal(xStep + this.position.x) == true) {
            xStep = 0;
        }
        if (this.boundaryRect.OutsideVertical(yStep + this.position.y) == true) {
            yStep = 0;
        }

        this.incrementPosition(xStep, yStep);
    }

    incrementScore (amount) {
        this.score += amount;
        this.setScore();
        this.setHighScore();
    }

    setLives() {
        $('#lives').text('x ' + this.lives);
    }
    setScore() {
        $('#score').text(this.score);
    }
    setHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        $('#highScore').text(this.highScore);
    }


}



















