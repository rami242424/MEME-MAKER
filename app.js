const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false; 

function onMove(event){
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
        return;
    }
    // ctx.beginPath(); // 새롭게 선을 그어줌으로써 두께가 바꿔도 기존 선들의 두께는 바뀌지 않는다. -> 사용자가 마우스를 움직일 떄, 새로운 path를 시작하게 된다.
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
// 마우스가 눌렸을 때 유저가 그리고 싶어하는걸 그리게 해주기
    isPainting = true
}

function cancelPainting(){
    isPainting = false;
    ctx.beginPath(); // 새롭게 선을 그어줌으로써 두께가 바꿔도 기존 선들의 두께는 바뀌지 않는다. -> 사용자가 마우스를 움직일 떄, 새로운 path를 시작하게 된다.=>>사용자가 페인팅을 마치면 새로운 path를 만들도록 한다. 위에 onMove funtion이나 여기 둘중에 한곳에서만 설정해도 된다.
}

// 그리고 항상 event에 접근할 수 있다는 사실이 중요하다.
// 왜냐면 event는 우리에게 input의 새로운 value(값)을 알려준다.
// function onLineWidthChange(event){
//     console.log(event.target.value);
// }
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
    // 선의 굵기는 바뀔 수 있지만 ctx.lineWidth를 계속 업데이트해서, 기존에 그려진 그림의 두께도 같이 바뀐다.
}

function onColorChange(event){
    // console.log(event.target.value); // 색 변하면 잘 입력되는지 콘솔로 확인
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);