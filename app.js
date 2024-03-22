const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
); // htmlCollection > 자바스크립트 배열로 만들기
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 이미지의 퀄리티를 높이기 위해서 width와 height는 자바스크립트에서만 수정한다.(not css)
// canvas.width = 800;
// canvas.height = 800;

// 중복통일
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value; // 5

// 8.1
// ctx.moveTo(200, 200); // 선을 긋지 않으면 브러쉬를 움직이기만 함
// ctx.lineTo(400, 400);
// ctx.stroke();

// 8.2
let isPainting = false;
let isFilling = false;

// 마우스를 움직이고 + isPainting = true일때 그려지기
function onMove(event){
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
        return;
    } 
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY); // 브러쉬만 움직인다(그림x)
}

function startPainting(){
    isPainting = true;
}

function cancelPainting(){
    isPainting = false;
}

function onLineWidthChange(event){
    // event는 input의 새로운 value값을 알려준다.
    // console.log(event.target.value);
    // ctx.beginPath(); // 이렇게 해도 되는데, onMove에 추가하자
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

// 어떤 color가 클릭됐는지 알아내보자.
function onColorClick(event){
    // console.dir(event.target.dataset.color);
    // ctx.strokeStyle = event.target.dataset.color;
    // ctx.fillStyle = event.target.dataset.color;
    // color.value = event.target.dataset.color;
    // 중복 없애자.
    const colorValue = event.target.dataset.color; 
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue; // 사용자에게 선택한 색깔을 알려주기 위해 추가한것
}

// 캔버스를 채우거나 선을 그리는 것 선택하는 모드버튼
// 만약 isFilling일때 버튼을 클릭하면 모드를 바꾸고 싶다는 의미
// 그래서 isFilling은 false가 되고, 버튼 텍스트는 Fill로 바뀐다.
// 만약 isFilling이 아닐떄 버튼을 클릭하면, 채우기 모드로 바꾸고 싶다는 의미
// 그래서 isFilling은 true가 되고, 버튼 텍스트는 Draw로 바뀐다.

function onModeClick(){
    if (isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_HEIGHT, CANVAS_HEIGHT);

    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_HEIGHT, CANVAS_HEIGHT);
}

function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
// 마우스를 누른채로 컨버스를 떠났다가 돌아오면 그대로 계속 그리는 상태가 된다.(버그)
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
// console.log(colorOptions);

// 각 color마다 이벤트리스너를 추가해주기, COLOR를 클릭할 때마다 호출될것임
colorOptions.forEach(color => color.addEventListener("click", onColorClick)); 

// -> 이렇게 querySelectorAll 을 사용해도 됨
// const colorOptions = document.querySelectorAll("#color_option");
// colorOptions.forEach((colorOption) => {
// colorOption.addEventListener("click", clickColorOption);
// });

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);