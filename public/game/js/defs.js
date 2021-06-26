const ImageFiles = [
    'Enemies/enemyRed1',
    'Enemies/enemyBlue3',
    'Enemies/enemyGreen2',
    'Enemies/enemyBlack4',
    'Enemies/enemyRed5',
    'playerShip1_blue',
    'Lasers/laserBlue02_s',
    'Explosion/explosion00_s',
    'Explosion/explosion01_s',
    'Explosion/explosion02_s',
    'Explosion/explosion03_s',
    'Explosion/explosion04_s',
    'Explosion/explosion05_s',
    'Explosion/explosion06_s',
    'Explosion/explosion07_s',
    'Explosion/explosion08_s'
];

const soundFiles = [
    'countdown',
    'explosion',
    'go',
    'loselife',
    'gameover',
    'completed'
];
const soundPath = 'assets/Sounds/';

const WayPoints = {
    STREAM60: [{
        rotation: 0,
        x: 60,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 60,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    STREAM180: [{
        rotation: 0,
        x: 180,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 180,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    STREAM300: [{
        rotation: 0,
        x: 300,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 300,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    STREAM420: [{
        rotation: 0,
        x: 420,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 420,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    STREAM540: [{
        rotation: 0,
        x: 540,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 540,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    STREAM660: [{
        rotation: 0,
        x: 660,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 660,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    STREAM60RETURN: [{
        rotation: 0,
        x: 60,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 60,
        y: 512,
        dir_x: 0,
        dir_y: 1
    }, {
        rotation: 0,
        x: 60,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAM180RETURN: [{
        rotation: 0,
        x: 180,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 180,
        y: 512,
        dir_x: 0,
        dir_y: 1
    }, {
        rotation: 0,
        x: 180,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAM300RETURN: [{
        rotation: 0,
        x: 300,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 300,
        y: 512,
        dir_x: 0,
        dir_y: 1
    }, {
        rotation: 0,
        x: 300,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAM420RETURN: [{
        rotation: 0,
        x: 420,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 420,
        y: 512,
        dir_x: 0,
        dir_y: 1
    }, {
        rotation: 0,
        x: 420,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAM540RETURN: [{
        rotation: 0,
        x: 540,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 540,
        y: 512,
        dir_x: 0,
        dir_y: 1
    }, {
        rotation: 0,
        x: 540,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAM660RETURN: [{
        rotation: 0,
        x: 660,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 660,
        y: 512,
        dir_x: 0,
        dir_y: 1
    }, {
        rotation: 0,
        x: 660,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    LEFTTORIGHTDEEP: [{
        rotation: 0,
        x: 60,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 60,
        y: 448,
        dir_x: 0,
        dir_y: 1
    },
    {
        rotation: 0,
        x: 810,
        y: 448,
        dir_x: 1,
        dir_y: 0
    }
    ],
    LEFTTORIGHTSHALLOW: [{
        rotation: 0,
        x: 60,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 60,
        y: 128,
        dir_x: 0,
        dir_y: 1
    },
    {
        rotation: 0,
        x: 810,
        y: 128,
        dir_x: 1,
        dir_y: 0
    }
    ],

    RIGHTTOLEFTDEEP: [{
        rotation: 0,
        x: 660,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 660,
        y: 448,
        dir_x: 0,
        dir_y: 1
    },
    {
        rotation: 0,
        x: -90,
        y: 448,
        dir_x: -1,
        dir_y: 0
    }
    ],

    RIGHTTOLEFTSHALLOW: [{
        rotation: 0,
        x: 660,
        y: -90,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 660,
        y: 128,
        dir_x: 0,
        dir_y: 1
    },
    {
        rotation: 0,
        x: -90,
        y: 128,
        dir_x: -1,
        dir_y: 0
    }
    ],

    INLEFTTURNDOWN: [{
        rotation: 0,
        x: -90,
        y: 256,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 480,
        y: 256,
        dir_x: 1,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 480,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    INRIGHTTURNDOWN: [{
        rotation: 0,
        x: 810,
        y: 256,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 240,
        y: 256,
        dir_x: -1,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 240,
        y: 620,
        dir_x: 0,
        dir_y: 1
    }
    ],
    INLEFTTURNUP: [{
        x: -90,
        y: 384,
        dir_x: 0,
        dir_y: 0
    },
    {
        x: 480,
        y: 384,
        dir_x: 1,
        dir_y: 0
    },
    {
        x: 480,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    INRIGHTTURNUP: [{
        x: 810,
        y: 384,
        dir_x: 0,
        dir_y: 0
    },
    {
        x: 240,
        y: 384,
        dir_x: -1,
        dir_y: 0
    },
    {
        x: 240,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    INLEFTDIAGUP: [{
        x: 120,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        x: 120,
        y: 512,
        dir_x: 0,
        dir_y: -1
    },
    {
        x: 504,
        y: 128,
        dir_x: 1,
        dir_y: -1
    },
    {
        x: 504,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    INRIGHTDIAGUP: [{
        x: 504,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        x: 504,
        y: 512,
        dir_x: 0,
        dir_y: -1
    },
    {
        x: 120,
        y: 128,
        dir_x: -1,
        dir_y: -1
    },
    {
        x: 120,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAMFROMB60: [{
        rotation: 0,
        x: 60,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 60,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAMFROMB180: [{
        rotation: 0,
        x: 180,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 180,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAMFROMB300: [{
        rotation: 0,
        x: 300,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 300,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAMFROMB420: [{
        rotation: 0,
        x: 420,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 420,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAMFROMB540: [{
        rotation: 0,
        x: 540,
        y: 620,
        dir_x: 0,
        dir_y: -1
    },
    {
        rotation: 0,
        x: 540,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ],
    STREAMFROMB660: [{
        rotation: 0,
        x: 660,
        y: 620,
        dir_x: 0,
        dir_y: 0
    },
    {
        rotation: 0,
        x: 660,
        y: -90,
        dir_x: 0,
        dir_y: -1
    }
    ]
};

const enemySpeed = {
    slow: 100 / 1000,
    medium: 150 / 1000,
    fast: 250 / 1000,
    veryfast: 450 / 1000
};


const AttackBlocks = {
    STREAMDOWN : [
        WayPoints['STREAM60'],
        WayPoints['STREAM180'],
        WayPoints['STREAM300'],
        WayPoints['STREAM420'],
        WayPoints['STREAM540'],
        WayPoints['STREAM660']
    ],
    STREAMDOWNMIXED : [
        WayPoints['STREAM300'],
        WayPoints['STREAM420'],
        WayPoints['STREAM660'],
        WayPoints['STREAM540'],
        WayPoints['STREAM180'],
        WayPoints['STREAM60']
    ],
    STREAMRETURNMIXED : [
        WayPoints['STREAM60RETURN'],
        WayPoints['STREAM180RETURN'],
        WayPoints['STREAM540RETURN'],
        WayPoints['STREAM660RETURN'],
        WayPoints['STREAM420RETURN'],
        WayPoints['STREAM300RETURN']
    ],
    BADDIETYPE1 : [
        WayPoints['INRIGHTDIAGUP']
    ],
    BADDIETYPE2 : [
        WayPoints['INLEFTDIAGUP']
    ],
    STREAMUPMIXED : [
        WayPoints['STREAMFROMB300'],
        WayPoints['STREAMFROMB420'],
        WayPoints['STREAMFROMB60'],
        WayPoints['STREAMFROMB540'],
        WayPoints['STREAMFROMB660'],
        WayPoints['STREAMFROMB180']
    ],
    SIDEASSAULT1 : [
        WayPoints['LEFTTORIGHTDEEP'],
        WayPoints['INRIGHTTURNUP']
    ],
    SIDEASSAULT2 : [
        WayPoints['RIGHTTOLEFTDEEP'],
        WayPoints['INLEFTTURNUP']
    ],
    SIDEASSAULT3 : [
        WayPoints['LEFTTORIGHTSHALLOW'],
        WayPoints['INRIGHTTURNDOWN']
    ],
    SIDEASSAULT4 : [
        WayPoints['RIGHTTOLEFTSHALLOW'],
        WayPoints['INLEFTTURNDOWN']
    ]
}

let EnemySequences = [];

const GameSettings = {
    keyPress: {
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        space: 32
    },
    targetFPS: 1000 / 60,

    bulletSpeed: 700 / 1000,
    bulletLife: 4000,
    bulletFireRate: 200,
    bulletTop: 10,

    playAreaWidth: 720,
    playAreaHeight: 576,
    playAreaDiv: '#playArea',

    playerFlashOpacity: '0.5',
    playerFlashTime: 300,
    playerFlashes: 8,

    playerDivName: 'playerSprite',
    playerStart: {
        x: 360,
        y: 440
    },
    playerStartLives: 3,
    playerState: {
        ok: 0,
        dead: 1,
        hitFlashing: 2
    },
    playerMoveStep: 8,
    enemyState: {
        ready: 1,
        dead: 0,
        movingToWaypoint: 2
    },
    pressSpaceDelay: 3000,
    gamePhase: {
        readyToplay: 1,
        countdownToStart: 2,
        playing: 3,
        gameOver: 4
    },
    countdownGap: 700,
    countDownValues: ['2', '1', 'GO!'],
    explosionTimeout: 1000

};

let GameManager = {
    assets : {},
    player: undefined,
    bullets: undefined,
    explosions: undefined,
    sounds: {},
    timeouts: [],
    phase: GameSettings.gamePhase.gameOver,
    lastUpdated: Date.now(),
    elapsedTime: 0,
    fps: 0
};






































