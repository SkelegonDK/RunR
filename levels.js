"use strict"
var levelObject = {

    platforms: [],
    currentLevel: -1,
    movingPlatforms: [],
    levelNumber: 1,
    init: function () {

        levelObject.temp = preloaderObject.queue.getResult("levelsJson");

    },
    movePlatforms: function () {
        var i;
        for (i = 0; i < levelObject.movingPlatforms.length; i++) {
            if (levelObject.movingPlatforms[i].movingDir == 'x') {
                if (levelObject.movingPlatforms[i].dir == 'forwards') {
                    levelObject.movingPlatforms[i].x += 0.3;
                    if (levelObject.movingPlatforms[i].x >= levelObject.movingPlatforms[i].max) {
                        levelObject.movingPlatforms[i].dir = 'backwards';
                    }
                } else {
                    levelObject.movingPlatforms[i].x -= 0.3;
                    if (levelObject.movingPlatforms[i].x <= levelObject.movingPlatforms[i].min) {
                        levelObject.movingPlatforms[i].dir = "forwards";

                    }
                }
            } else {

            }
        }
    },
    nextLevel: function () {

        
        
        //
        // LEVEL COUNTER
        //
        document.getElementById("levelCounter").innerHTML = levelObject.levelNumber++;

        
        
        var i;
        var rx;
        var ry;

        levelObject.currentLevel++;
        levelObject.levelData = levelObject.temp.levelsJson[levelObject.currentLevel];

        var sheet = new createjs.SpriteSheet(preloaderObject.queue.getResult('tiles'));
        
        for (i = 0; i < levelObject.levelData.platforms.length; i++) {
            console.log("run")
                //
                // REPEAT TILES
                //

            // Repeat tile.x value
            for (rx = 0; rx < levelObject.levelData.platforms[i].repeatX; rx++) {


                var t = new createjs.Sprite(sheet, levelObject.levelData.platforms[i].sprite);
                if (levelObject.levelData.platforms[i].movingDir == 'x') {
                    t.movingDir = 'x';
                    t.dir = 'forwards';
                    t.min = levelObject.levelData.platforms[i].min;
                    t.max = levelObject.levelData.platforms[i].max;
                    levelObject.movingPlatforms.push(t)

                }
                t.x = levelObject.levelData.platforms[i].x + 48 * rx;
                t.y = levelObject.levelData.platforms[i].y;
                t.width = t.height = 48;
                gameObject.stage.addChild(t);
                levelObject.platforms.push(t);
            }

            // Repeat tile.y value
            for (ry = 0; ry < levelObject.levelData.platforms[i].repeatY; ry++) {


                var t = new createjs.Sprite(sheet, levelObject.levelData.platforms[i].sprite);
                t.x = levelObject.levelData.platforms[i].x;
                t.y = levelObject.levelData.platforms[i].y - 48 * ry;
                gameObject.stage.addChild(t);
                levelObject.platforms.push(t);

            }



            // ANIMATE PLATFORM



        }


    }
}
