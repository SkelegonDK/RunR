"use strict"
var gameObject = {
    
    //
    // DEFINING GAME STAGE
    //
    stage: new createjs.Stage("mixer"),
    // gameObject.init() is added at bottom of
    // body to preload game assests after the DOM is created.
    init: function () {
        preloaderObject.load();
        tickerObject.start();
        gameSoundObject.init();
    },
    
    //
    // SETTING UP GAME
    //
    setupGame: function () {
        this.stage.removeAllChildren();
        levelObject.init();
        levelObject.nextLevel()
        this.hero = heroObject.getHero();
        gameObject.stage.addChild(this.hero);
        gameSoundObject.stageSound.play();
        controlObject.init();
        this.MuteAll();
        
        console.log("Game i ready");
        
        
    },
    
    // MUTE
    MuteAll: function () {
        document.getElementById('mute').addEventListener('click', function (e) {
            if (createjs.Sound.muted !== true) {
                createjs.Sound.muted = true;
                document.getElementById("mute").style.backgroundColor = "red";
            } else {
                createjs.Sound.muted = false;
                document.getElementById("mute").style.backgroundColor = "lime";
            }
        })
    },
}
