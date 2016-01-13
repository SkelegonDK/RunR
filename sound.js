"use strict"
var gameSoundObject = {
    
    init:function(){
        //
        // HERO CONTROL SOUNDS
        //
        this.walkSound = new createjs.Sound.play("walkSound", {
            volume: 0.1,
            loop:-1
        });
        this.walkSound.stop();
        
        this.jumpSound = new createjs.Sound.play("jumpSound", {
            volume: 1,
            
        });
        this.jumpSound.stop();
        
        this.respawnSound = new createjs.Sound.play("respawnSound", {
            volume: 1,
        });
        this.respawnSound.stop();
        
        //
        // STAGE SOUNDS
        //
        this.splashSound = new createjs.Sound.play("splashSound", {
            volume: 1,
            loop:-1
        });
        this.splashSound.stop();
        
        this.stageSound = new createjs.Sound.play("stageSound", {
            volume: 0.1,
            loop:-1
        });
        this.stageSound.stop();
    }
}
