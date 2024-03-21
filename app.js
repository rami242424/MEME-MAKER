const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false; 
ctx.moveTo(200, 200);
ctx.lineTo(400, 400);
ctx.stroke();

function onMove(event){
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
// 마우스가 눌렸을 때 유저가 그리고 싶어하는걸 그리게 해주기
    isPainting = true
}

function cancelPainting(){
    isPainting = false;
}

// 그리고 항상 event에 접근할 수 있다는 사실이 중요하다.
// 왜냐면 event는 우리에게 input의 새로운 value(값)을 알려준다.
// function onLineWidthChange(event){
//     console.log(event.target.value);
// }
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}


canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
