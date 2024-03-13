const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
// ctx.fillRect(50, 50, 100, 200);
ctx.rect(50, 50, 100, 100); // 선만 만들고 색은 적용하지 않았음
// ctx.stroke(); // 비로서 선에 색이 적용되어 사각형이 나타남
// or
// ctx.fill(); // 사각형안을 채움


