const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다.
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 선만 그림 색 적용 X
ctx.rect(50, 50, 100, 100);
// 옵션 1 stroke - rect으로 그린 선에 색 적용
// ctx.stroke();

// 옵션 2 fill - rect으로 그린 선안에 색으로 채워 적용
ctx.fill();