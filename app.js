const canvas = document.querySelector("canvas");
context(ctx)는 = paint brush 역할
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

1. 그리기
- fill : 단색으로 모양을 다 채우는 것
- stroke : 선만 보이는 것
ctx.rect(50, 50, 100, 100);
ctx.stroke();
ctx.fill();

2-1 여러 선 그리기
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

2-2 여러 선 그리기 마지막 rect은 화면에 보이지 않는다.
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.fill();
ctx.rect(250, 250, 100, 100);
ctx.fill(); 마지막 rect이 보이게 하려면 이렇게 채워줘야한다.
즉, 어떤 모양으로 그리던 마지막에는 무조걱 stroke 인지 fill인지 골라 입력해야한다!!!

3-1 전부 red로 채워지기 : 같은 경로에 있기 때문에
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();

3-2 3개의 검은색으로 채워진 사각형이 존재 > 5초후 1개의 사각형이 추가되고, 4개의 모든 사각형이 red로 채워진다.
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
setTimeout(()=> {
    ctx.fill();
}, 5000);

4. 경로르 바꾸고 마지막 사각형만 다른 색으로 채우기
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();








