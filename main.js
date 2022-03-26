canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var lastX; 
var lastY;

canvas.addEventListener("mousedown", mousedown);
function mousedown(e) {
mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mouseup);

function mouseup(e) {
    mouseEvent = "mouseup";
    }

    canvas.addEventListener("mousemove", mousemove);

function mousemove(e) {
    currentX = e.clientX-canvas.offsetLeft;
    currentY = e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.arc(currentX,currentY,20,0,2*Math.PI);
    ctx.stroke();
}
lastX = currentX;
lastY = currentY;
    }

    canvas.addEventListener("mouseleave", mouseleave);

    function mouseleave(e) {
        mouseEvent = "mouseleave";
        }