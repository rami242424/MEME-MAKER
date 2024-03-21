const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser_btn");


// const colorOptions = document.getElementsByClassName("color-option");
// colorOption을 배열로 만들어 이벤트리스너를 만들어 주기위해 아래 과정 필요
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);

const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");

// 중복 방지를 위해
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false; 
let isFilling = false;

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

// 어떤 컬러가 클릭됐는지 알기위해 만드는 함수
function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

// 1. 캔버스 전체를 채우거나
// 2. 선을 그리거나
function onModeClick(){
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

// Fill 모드에서 클릭시 전체 채우기
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

// destroy란 하얀색깔을 선택하고+채우기모드로 바꿔서 클릭하는 것과 같은 동작이다.
function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

// eraser
function onEraserClick(){
    ctx.strokeStyle = "white";
    // Fill 채우기 모드일때 erase를 클릭하면, 다시 Draw모드로 바꿔준다.
    isFilling = false;
    modeBtn.innerText = "Fill";
}

// file input
function onFileChange(event){
    // console.dir(event.target);
    const file = event.target.files[0];

    const url = URL.createObjectURL(file); // 브라우저의 메모리에서 파일의 url 얻어오기
    // console.log(url);
    const image = new Image();
    // 위에 표현과 같은 표현
    // document.createElement("img");

    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoulbleClick(event){
    const text = textInput.value;
    if (text !== "") {
        ctx.save(); // ctx의 현재(변경되기전) 상태, 색상, 스타일 등 모든 것을 저장함.
        ctx.lineWidth = 1;
        ctx.font = "68px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        // ctx.strokeText(text, event.offsetX, event.offsetY); // 상태수정
        // console.log(event.offsetX, event.offsetY);
        ctx.restore(); // 수정을 완료한 후 (즉 save와 restore 사이에서는 어떤 수정을 해도 저장되지 않는다.) 이전에 저장 된 상태로 돌아감
    }
    
}

// 캔버스 안에 있는 이미지를 저장하기
function onSaveClick(){
    // console.log(canvas.toDataURL());
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}


canvas.addEventListener("dblclick", onDoulbleClick);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

// 각 컬러마다 이벤트리스너를 추가하기 위해 만들어줌 => 아래 함수는 color를 클릭할 때마다 호출된다.
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);