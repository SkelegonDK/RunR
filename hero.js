"use strict"
var heroObject = {

    //
    // heroObject VARIABLES
    //
    heroSpeed: 5,
    jumpSpeed: 5,
    maxGravity: 8,
    standingOnPlatform: false,

    //
    // GET HERO FUNCTION
    // 
    getHero: function () {
        var catSprite = new createjs.SpriteSheet(preloaderObject.queue.getResult("cat"));

        var hero = new createjs.Sprite(catSprite, "right");

        hero.regX = 25;
        hero.x = 50;
        hero.y = 50;
        hero.width = 10;
        hero.height = 40;
        hero.gravityEffect = 0;




        // Return the hero to the function
        return hero;
    },

    //
    // HERO MOVE FUNCTION - CONTROLS ARE DEFINED IN controls.js, controlObject
    //
    moveHero: function () {

        //   
        // JUMP LOGIC
        //


        // CHECK FOR PLATFORM
        var i;
        heroObject.standingOnPlatform = false;

        for (i = 0; i < levelObject.platforms.length; i++) {
            if (objectOnPlatform(gameObject.hero, levelObject.platforms[i])) {
                //console.log("hit")
                heroObject.standingOnPlatform = true;

                break;
            }
        }
        if (!heroObject.standingOnPlatform) {
            heroObject.canJump = false;
            // APPLY GRAVITY - NOT WORKING no increase in values
            gameObject.hero.y += gameObject.hero.gravityEffect;
            gameObject.hero.gravityEffect++;

            if (gameObject.hero.gravityEffect > heroObject.maxGravity) {
                gameObject.hero.gravityEffect = heroObject.maxGravity;
            }
        }
        // HIT TEST EXTENDED

        function objectOnPlatform(moving, stationary) {

            if (moving.x < stationary.x + stationary.width &&
                moving.x + moving.width > stationary.x && Math.abs(
                    (moving.y + moving.height) - stationary.y) < 5
            ) {
                //console.log("hit")
                moving.y = stationary.y - moving.height;
                return true;
            }

            return false;
        }



        // HERO CONTROLS
        if (controlObject.left) {
            gameObject.hero.x -= heroObject.heroSpeed;
            gameObject.hero.scaleX = -1;

            if (gameObject.hero.x < 0) {
                gameObject.hero.x = 0;
            }
        }

        if (controlObject.right) {
            gameObject.hero.scaleX = 1;
            gameObject.hero.x += heroObject.heroSpeed;





            if (gameObject.hero.x > gameObject.stage.canvas.width - gameObject.hero.width) {
                gameObject.hero.x = gameObject.stage.canvas.width - gameObject.hero.width
            }
        }

        if (controlObject.up) {
            console.log(gameObject.hero.gravityEffect);
            console.log(heroObject.maxGravity);
            console.log(gameObject.hero.regX);
            
            gameObject.hero.y -= heroObject.jumpSpeed * 6;

            if (gameObject.hero.y < 0) {
                gameObject.hero.y = 0
            }
        }

        if (controlObject.down) {
            gameObject.hero.y += heroObject.heroSpeed;

            if (gameObject.hero.y > gameObject.stage.canvas.height - gameObject.hero.height) {
                gameObject.hero.y = gameObject.stage.canvas.height - gameObject.hero.height
            }
        }
    }
}
