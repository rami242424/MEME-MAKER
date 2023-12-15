const canvas = document.querySelector("canvas");
// context(ctx)는 = paint brush 역할
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

function onClick(event){
    ctx.moveTo(0, 0);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);