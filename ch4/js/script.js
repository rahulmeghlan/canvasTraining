window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {

    canvasApp();

}

function canvasSupport() {
    return Modernizr.canvas;
}

function canvasApp() {

    if (!canvasSupport()) {
        return;
    } else {
        var theCanvas = document.getElementById("canvas");
        var context = theCanvas.getContext("2d");
    }

    var counter = 0;
    var tileSheet = new Image();
    tileSheet.addEventListener('load', eventSheetLoaded, false);
    tileSheet.src = "images/ships.png";

    function eventSheetLoaded() {
        startUp();
    }

    function drawScreen() {

        //draw a background so we can see the Canvas edges
        context.fillStyle = "#aaaaaa";
        context.fillRect(0, 0, 500, 500);
        context.drawImage(tileSheet, 32 * counter, 0, 32, 32, 50, 50, 64, 64);
        counter++;
        if (counter > 1) {
            counter = 0;
        }
    }

    function startUp() {
        gameLoop();
    }

    function gameLoop() {
        window.setTimeout(gameLoop, 100);
        drawScreen();
    }
}