const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 2.0 Painting Lines 클릭하는대로 선그어지게 만들기
// 2-1 click > mousemove로 바꿔보기
// 2-2 그어지는 선들 색깔 랜덤으로 다르게 만들기(배열이용)

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
];

ctx.lineWidth = 2;
function MouseEvent (event){
    ctx.moveTo(0, 0); // 클릭할때마다 moveTo(0,0)로 리셋해주기
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", MouseEvent);


