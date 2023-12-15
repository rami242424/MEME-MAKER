const canvas = document.querySelector("canvas");
// context(ctx)는 = paint brush 역할
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
ctx.moveTo(0, 0); // 선이 모서리에서 시작되도록 하기

function onClick(event){
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);