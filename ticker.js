"use strict"
var tickerObject = {
    
    start: function(){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick",this.tock)
    },
    
    tock:function(e){
        heroObject.moveHero();
        levelObject.movePlatforms();
        gameObject.stage.update(e);
    }

}
