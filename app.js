const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

//fillRect을 쓴다는 것은 지름길(shortcut) function을 쓴다는 것이고, fill과 rect을 호출한다는 것을 의미한다.
// 1. 양쪽 벽만들기
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

// 2. 문 만들기
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100); // 문의 윤곽선 만들고 채워주기
// ctx.lineWidth = 2; // 선의 너비를 먼저 바꿔주고 stroke를 해야 적용된다! 잊지말자!

// 3. 지붕 만들기
// 3-1 천장 만들기
ctx.fillRect(200, 200, 200, 20);
// 3-2 삼각지붕 만들기
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();

