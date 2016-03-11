(function () {
    var x = 250,
        y = 10,
        speed = 5,
        canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        goDown = true,
        goUp = false;

    function gameLoop() {
        setTimeout(gameLoop, 20);
        updateCanvas();
    }

    function drawScreen() {

    }

    function updateCanvas(){
        context.fillStyle = "#EEEEEE";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "#000000";
        context.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
        if(y < 500 && goDown) {
            y += speed;
        }else{
            goDown = false;
            y -= speed;
            if(y < 10){
                goDown = true;
            }
        }
        context.fillStyle = "#000000";
        context.beginPath();
        context.arc(x,y,15,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }

    function init(){
        drawScreen();
        gameLoop();
    }

    init();
})();