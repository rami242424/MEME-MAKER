const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다.
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50); // 브러쉬 시작점
ctx.lineTo(150, 50); // 기존 x:50>150, y:50>50 으로 줄을 긋다.
ctx.fill(); // 선으로 채운다.