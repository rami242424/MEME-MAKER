const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth =  document.getElementById('line-width');
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillRect(0, 0, 800, 800); 중복으로 많이 쓰이니 상수로 만들자
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
// canvas.width = 800;
// canvas.height = 800;
ctx.lineWidth = lineWidth.value; 

let isPainting = false; 
let isFilling = false;

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
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeClick(){
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

// Fill 동작
function onCanvasClick(){
    if(isFilling){
        // ctx.fillRect(0, 0, 800, 800);
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

// 초기화 동작
function OnDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

// erase 기능 활성화
function onEraserClick(){
    ctx.strokeStyle = "white";
    // fill 모드일때 erase를 선택하면, 다시 그리기 모드로 바꿔주기(노이해)
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(event){
    // console.dir(event.target); // input 확인해보기
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);


// 컬러를 클릭할떄마다 호출 될 함수
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", OnDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
