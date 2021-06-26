function GetRandInt(from, range) {
    return Math.floor(Math.random() * range) + from;
}

function removeStars() {
    $('.star').remove();
}

function pauseStars() {
    $('.star').css({
        "animation-play-state": "paused"
    });
}

function addStar(starClass) {
    let div = document.createElement("div");
    div.classList.add("star", starClass);
    div.style.left = GetRandInt(0, 720) + "px";
    $(GameSettings.playAreaDiv).append(div);
}

function createStars() {
    for(let i = 0; i < 10; ++i) {
        let delay = i * 333;
        GameManager.timeouts.push(window.setTimeout(addStar, delay, "starSmall"));
        GameManager.timeouts.push(window.setTimeout(addStar, delay + 333, "starMedium"));
        GameManager.timeouts.push(window.setTimeout(addStar, delay + 666, "starBig"));
    }
}
















