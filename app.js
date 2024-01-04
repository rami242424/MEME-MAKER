const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다.
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 양팔
ctx.fillRect(215 - 40, 200 - 50, 15, 100);
ctx.fillRect(350 - 40, 200 - 50, 15, 100);

// 몸통
ctx.fillRect(260 - 40, 200 - 50, 60, 200);

// 머리
ctx.arc(250, 100, 50, 0, 2 * Math.PI)
ctx.fill();

// 눈
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 80, 5, 0, 2 * Math.PI);
ctx.arc(230, 80, 5, 0, 2 * Math.PI);
ctx.moveTo(250, 110);
ctx.arc(250, 110, 10, 0, 1 * Math.PI);
ctx.fill();