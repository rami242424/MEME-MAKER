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

canvas.addEventListener("mousemove", onClick); // click > mousemove로 바꿈으로써 클릭이 아닌 마우스를 움직이므로써 그림이 그려지게 한다.