const canvas = document.querySelector("canvas");
// context(ctx)는 = paint brush 역할
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

function onClick(event){
    // console.log(event); // 콘솔로 클릭한 좌표값은 offsetX,Y라는 것을 알 수 있다.
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);