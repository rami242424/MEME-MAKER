const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 1. 몸통과 팔
ctx.fillRect(205, 200, 15, 100); // 팔1
ctx.fillRect(350, 200, 15, 100); // 팔2
ctx.fillRect(260, 200, 50, 200) // 몸통

// 2. 머리
ctx.arc(285, 150, 50, 0, 2 * Math.PI);
ctx.fill();

// 3. 눈
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(270, 140, 7, 0, 2 * Math.PI);
ctx.arc(300, 140, 7, 0, 2 * Math.PI);
ctx.fill();

// 4. 입
ctx.beginPath();
// ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.moveTo(270, 170);
ctx.lineTo(300, 170);
ctx.lineTo(285, 190);
ctx.lineTo(270, 170);
// ctx.stroke();
ctx.fill();