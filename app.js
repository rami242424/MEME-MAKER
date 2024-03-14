const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 2.0 Painting Lines 클릭하는대로 선그어지게 만들기
// 2-1 click > mousemove로 바꿔보기
// 2-2 그어지는 선들 색깔 랜덤으로 다르게 만들기(배열이용)
// 2-3 선마다 다른 선으로(랜덤) 그려지기, 그려질때마다 다른 색

const color1 = [
    '#55efc4',
    '#00b894'
];

const color2 = [
    '#ffeaa7',
    '#fdcb6e'
]

ctx.lineWidth = 2;

function MouseEvent1 (event){
    ctx.beginPath();
    ctx.moveTo(0, 0); // 클릭할때마다 moveTo(0,0)로 리셋해주기
    const color = color1[Math.floor(Math.random() * color1.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function MouseEvent2 (event){
    ctx.beginPath();
    ctx.moveTo(800, 800); // 클릭할때마다 moveTo(0,0)로 리셋해주기
    const color = color2[Math.floor(Math.random() * color2.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", MouseEvent1);
canvas.addEventListener("mousemove", MouseEvent2);


