function loadSound(fileName) {
    GameManager.sounds[fileName] = new Audio(soundPath + fileName + '.wav');
}

function initSounds() {
    for (let i = 0; i < soundFiles.length; ++i) {
		loadSound(soundFiles[i]);
	}
}

function playSound(sound) {
    GameManager.sounds[sound].play();
}


