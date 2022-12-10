canvas=document.getElementById("can1")
ctx=canvas.getContext("2d")
ctx.beginPath();
   ctx.strokeStyle="blue";
   ctx.lineWidth=8;
   ctx.arc(300,200,40,0,2*Math.PI)
   ctx.stroke()

canvas.addEventListener("mousedown",mouse)
function mouse(e){
   mousex = e.clientX-canvas.offsetLeft
   mousey= e.clientY-canvas.offsetTop
    circle()      
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="blue"
    ctx.lineWidth=8;
    ctx.arc(mousex,mousey,40,0,360)
    ctx.stroke()

}
ctx.beginPath();
   ctx.strokeStyle="black";
   ctx.lineWidth=8;
   ctx.arc(400,200,40,0,2*Math.PI)
   ctx.stroke()

canvas.addEventListener("mousedown",mouse)
function mouse(e){
   mousex = e.clientX-canvas.offsetLeft
   mousey= e.clientY-canvas.offsetTop
    circle()      
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="black"
    ctx.lineWidth=8;
    ctx.arc(mousex,mousey,40,0,360)
    ctx.stroke()

}
ctx.beginPath();
   ctx.strokeStyle="red";
   ctx.lineWidth=8;
   ctx.arc(500,200,40,0,2*Math.PI)
   ctx.stroke()

canvas.addEventListener("mousedown",mouse)
function mouse(e){
   mousex = e.clientX-canvas.offsetLeft
   mousey= e.clientY-canvas.offsetTop
    circle()      
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="red"
    ctx.lineWidth=8;
    ctx.arc(mousex,mousey,40,0,360)
    ctx.stroke()

}
ctx.beginPath();
   ctx.strokeStyle="yellow";
   ctx.lineWidth=8;
   ctx.arc(350,250,40,0,2*Math.PI)
   ctx.stroke()

canvas.addEventListener("mousedown",mouse)
function mouse(e){
   mousex = e.clientX-canvas.offsetLeft
   mousey= e.clientY-canvas.offsetTop
    circle()      
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="yellow"
    ctx.lineWidth=8;
    ctx.arc(mousex,mousey,40,0,360)
    ctx.stroke()

}
ctx.beginPath();
   ctx.strokeStyle="green";
   ctx.lineWidth=8;
   ctx.arc(450,250,40,0,2*Math.PI)
   ctx.stroke()

canvas.addEventListener("mousedown",mouse)
function mouse(e){
   mousex = e.clientX-canvas.offsetLeft
   mousey= e.clientY-canvas.offsetTop
    circle()      
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle="green"
    ctx.lineWidth=8;
    ctx.arc(mousex,mousey,40,0,360)
    ctx.stroke()

}
