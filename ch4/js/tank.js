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

    var animationFrames = [1, 2, 3, 4, 5, 6, 7, 8];
    var frameIndex = 0,
        stopTank = false;
    var x = 50,
        y = 50,
        dx = 0,
        dy = 1;
    var tileSheet = new Image();
    tileSheet.addEventListener('load', eventSheetLoaded, false);
    tileSheet.src = "images/tanks_sheet.png";

    function eventSheetLoaded() {
        startUp();
    }

    function drawScreen() {

        //draw a background so we can see the Canvas edges
        context.fillStyle = "#aaaaaa";
        context.fillRect(0, 0, 500, 500);
        var sourceX = Math.floor(animationFrames[frameIndex] % 8) * 32;
        var sourceY = Math.floor(animationFrames[frameIndex] / 8) * 32;
        console.log(x, y);
        if (y < 450) {
            y = y + dy;
            x = x + dx;
        }else{
            stopTank = true;
        }
        context.drawImage(tileSheet, sourceX, sourceY, 32, 32, x, y, 32, 32);

        frameIndex++;
        if (frameIndex == animationFrames.length) {
            frameIndex = 0;
        }
    }

    function startUp() {
        gameLoop();
    }

    function gameLoop() {
        if (!stopTank) {
            window.setTimeout(gameLoop, 100);
            drawScreen();
        }
    }
}