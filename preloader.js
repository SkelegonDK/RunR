"use strict"
var preloaderObject = {
    //
    // SETUP PRELOADER QUEUE
    //
    queue: new createjs.LoadQueue(true),
    loadText: new createjs.Text("", "30px ubuntu", "#f00"),

    load: function () {

        gameObject.stage.addChild(this.loadText);
        this.queue.installPlugin(createjs.Sound);
        createjs.Sound.alternateExtensions = ["mp3"];
        this.queue.on("progress", this.progress, this);
        preloaderObject.queue.on("complete", gameObject.setupGame, gameObject);
        this.queue.loadManifest([
            //
            // SOUND TO PRELOAD
            //
            {id: "splashSound", src: "sound/RunR_splash.mp3"},
            {id: "fallSound", src: "sound/RunR_fall.mp3"},
            {id: "respawnSound", src: "sound/RunR_respawn.mp3"},
            {id: "jumpSound", src: "sound/RunR_jump.mp3"},
            {id: "stageSound", src: "sound/RunR_stage.mp3"},
            {id: "walkSound", src: "sound/RunR_walk.mp3"},

            //
            // JSON TO PRELAOD
            //
            
            {id: "cat", src: "json/cat.json"},
            {id: "tiles", src: "json/tiles.json"},
            {id: "levelsJson", src: "json/levels.json"},


            //
            // IMAGES TO PRELOAD
            //
            
            "img/cat.png",
            "img/tileset.png",
            "img/splash.png",
            
        ])
    },

    //
    // 0 - 100% LOADER FUNCTION
    //
    progress: function (e) {
        this.loadText.text = Math.floor(e.progress * 100) + "% DONE";
        this.loadText.x = gameObject.stage.canvas.width / 2;
        this.loadText.shadow = new createjs.Shadow("#f00", 20, 20, 30);
        gameObject.stage.update();
    }
}
