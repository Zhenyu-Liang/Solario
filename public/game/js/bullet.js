class Bullet extends Sprite {
    constructor(divName, assetDesc, position) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.life = GameSettings.bulletLife;
        this.dead = false;
        this.addToBoard(true);
    }

    update(dt) {
        let inc = dt * GameSettings.bulletSpeed;
        this.incrementPosition(0, -inc);
        this.life -= dt;
        if (this.life < 0) {
            this.killMe();
        }
    }

    killMe() {
        this.dead = true;
        this.removeFromBoard();
    }
}

class BulletCollection {
    constructor(player) {
        this.listBullets = [];
        this.lastAdded = 0;
        this.player = player;
        this.total_bullets = 0;
    }

    reset() {
        for (let i = 0; i < this.listBullets.length; ++i) {
            this.listBullets[i].removeFromBoard();
        }
        this.listBullets = [];
        this.lastAdded = 0;
        this.total_bullets = 0;
    }

    update(dt) {
        for (let i = this.listBullets.length - 1; i >= 0; --i) {
            if (this.listBullets[i].dead == true) {
                this.listBullets.splice(i, 1);
            } else {
                this.listBullets[i].update(dt);
            }
        }
        this.lastAdded += dt;

        if (this.lastAdded > GameSettings.bulletFireRate && 
            this.player.state != GameSettings.playerState.hitFlashing) {
                this.lastAdded = 0;
                this.listBullets.push(
                    new Bullet(
                        'bullet_' + this.total_bullets,
                        GameManager.assets['Lasers/laserBlue02_s'],
                        new Point(this.player.position.x + (this.player.size.width / 2), 
                        this.player.position.y)
                    )
                );
                this.total_bullets++;
            }
    }
}




















































