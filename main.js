canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");


mevent = "empty"


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {

    color = document.getElementById("colorv").value;
    width = document.getElementById("linev").value;
    mevent = "mousedown"
    color = document.getElementById("colorv").value;
    width = document.getElementById("linev").value;
};

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup() {


    mevent = "mouseup"

};

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {


    mevent = "mouseleave"

};

canvas.addEventListener("mousemove", my_mousemove);
color = document.getElementById("colorv").value;
width = document.getElementById("linev").value;

function my_mousemove(e) {

    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
    if (mevent == "mousedown") {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(lpx, lpy);
        ctx.lineTo(cpx, cpy);
        ctx.stroke();


    };
    lpx = cpx;
    lpy = cpy;
};

function eati() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    lpx = e.touches[0].clientX - canvas.offsetLeft;
    lpy = e.touches[0].clientY - canvas.offsetTop;

    color = document.getElementById("colorv").value;
    width = document.getElementById("linev").value;
}


canvas.addEventListener("touchmove", my_touchmove);



function my_touchmove(e) {
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(lpx, lpy)
    ctx.lineTo(cpx, cpy)
    ctx.stroke();


    lpx = cpx;
    lpy = cpy;

}