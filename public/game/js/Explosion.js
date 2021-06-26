class Explosions {
    constructor(assetName) {
        this.count = 0;
        this.offset = undefined;
        this.setOffSet(assetName);
    }

    setOffSet(assetName) {
        let asset = GameManager.assets[assetName];
        this.offSet = new Point((asset.width/2)*-1, (asset.height/2)*-1); 
    }

    createExplosion(position) {
        let div = document.createElement("div");
        div.classList.add("explosion");
        let divId = 'explosion_' + this.count;
        div.id = divId;
        div.style.left = (position.x + this.offSet.x) + 'px';
        div.style.top = (position.y + this.offSet.y) + 'px';
        $(GameSettings.playAreaDiv).append(div);
        setTimeout(function() {
            $('#' + divId).remove();
        }, GameSettings.explosionTimeout);

        this.count++;
    }
}