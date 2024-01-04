const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다.
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(200, 200);
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 3;

// 문
ctx.fillRect(300, 300, 50, 100);

// 천장
ctx.fillRect(200, 200, 200, 5);
// 지붕
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
