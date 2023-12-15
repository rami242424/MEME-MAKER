const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false; 

// 만약 isPainting이 true면, ctx.lineTo, stroke를 써서 선을 그리고 함수를 끝내준다.
// 만약 isPainting이 false면, ctx.moveTo 브러쉬만 움직여준다.

function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

// 마우스를 눌렀을 떄 유저가 그리고 싶어하는걸 그리게 해주자-> isPainting이라는 변수를 만들자.
function onMouseDown() {
    isPainting = true; // 마우스를 누르면(mouseDown) true가 된다.
}

function onMouseUp(){
    isPainting = false;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);