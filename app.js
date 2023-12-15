const color = document.getElementById("color");
const lineWidth =  document.getElementById('line-width');
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value; 

let isPainting = false; 

function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
    isPainting = true; 
}

function cancelPainting(){
    isPainting = false;
    ctx.beginPath(); 
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    // console.log(event.target.value); // 선택한 색상이 콘솔에 잘 뜨는지 확인
    // fillColor : 사각형을 만들면, 그 안을 채워주는 색상
    // strokeColor : 라인(선)에서 쓰임
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);