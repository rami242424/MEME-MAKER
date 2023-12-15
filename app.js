const canvas = document.querySelector("canvas");
// context(ctx)는 = paint brush 역할
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

// 색을 array로 만들어보자(움직일때마다, 새로운 선을 그릴떄 마다 색이 달라지게)
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
]

function onClick(event){
    ctx.beginPath(); // 모든 선의 경로를 매번 바꿔주기
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick); 