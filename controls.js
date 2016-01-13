"use strict"
var controlObject = {
    
    //
    // KEYS SET TO FALSE
    //
    up: false,
    down: false,
    left: false,
    right: false,

    //
    // INIT FUNCTION TO LISTEN FOR EVENTS ON WINDOW OBJECT
    // FUNCTION IS ADDED IN game.js, setupGameObject
    //
    init: function () {
        window.onkeyup = this.keyUp;
        window.onkeydown = this.keyDown;
    },

    //
    // KEY DOWN EVENTS
    //
    keyDown: function (e) {
        
    
        
        switch (e.keyCode) {
        case 37:
            // This code checks if left is not true, then play walk sound.
            if (controlObject.left != true) {
                gameSoundObject.walkSound.play();
                
            }
            controlObject.left = true;
            break;

        case 32:
            controlObject.up = true;
                
                    gameSoundObject.jumpSound.play();
                
            break;

        case 39:
            if (controlObject.right != true) {
                gameSoundObject.walkSound.play();
            }
            controlObject.right = true;
            break;

        case 40:
            controlObject.down = true;
            break;
        }
    },
    
    //
    // KEY UP EVENTS
    //
    keyUp: function (e) {
        switch (e.keyCode) {
        case 37:
            controlObject.left = false;
            gameSoundObject.walkSound.stop();
            break;
        case 32:
            controlObject.up = false;
            break;
        case 39:
            controlObject.right = false;
            gameSoundObject.walkSound.stop();
            break;
        case 40:
            controlObject.down = false;
            break;
        }
    }
}
