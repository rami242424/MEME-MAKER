const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다.
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);

ctx.stroke();
// ctx.fill();