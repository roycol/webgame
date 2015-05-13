/// <reference path="../scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../scripts/typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../scripts/typings/soundjs/soundjs.d.ts" />
/// <reference path="../scripts/typings/preloadjs/preloadjs.d.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var assets;

//Game variables
var helloLabel;
var btn;

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "myBtn", src: "assets/images/classic.jpg" },
        { id: "clicked", src: "assets/audio/Jump.wav" }
    ]);
}

function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate for the game
    createjs.Ticker.on("tick", gameLoop); // createjs.Ticker.addEventListener

    main();
}

//our main game loop - refreshed 60 fps
function gameLoop() {
    stage.update();
}

function btnClicked(event) {
    createjs.Sound.play("clicked");
}

function btnOver() {
    btn.alpha = 0.8;
}

function btnOut() {
    btn.alpha = 1.0;
}

//our main function
function main() {
    console.log("Game is running");
    helloLabel = new createjs.Text("Hello world!!", "40px Consolas", "#FF0000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 160;
    helloLabel.y = 180;

    stage.addChild(helloLabel);

    btn = new createjs.Bitmap(assets.getResult("myBtn"));
    btn.regX = btn.getBounds().width * 0.5;
    btn.regY = btn.getBounds().height * 0.5;
    btn.x = 160;
    btn.y = 300;
    stage.addChild(btn);
    btn.on("click", btnClicked);
    btn.on("mouseover", btnOver);
    btn.on("mouseout", btnOut);
}
//# sourceMappingURL=game.js.map
