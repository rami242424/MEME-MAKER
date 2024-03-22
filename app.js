const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 이미지의 퀄리티를 높이기 위해서 width와 height는 자바스크립트에서만 수정한다.(not css)
canvas.width = 800;
canvas.height = 800;

// 1. 좌표는 ctx의 맨 상단에서 (0, 0) 시작된다.
// ctx.strokeStyle = "blue";
// ctx.strokeRect(0, 0, 100, 100);
// ctx.fillRect(0, 0, 20, 20);
// ctx.fillRect(40, 40, 20, 20);

// 2. fillStyle은 fill전에 정의해주기
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fillStyle = "red"; // 사각형 = red
// ctx.fill();
// ctx.fillStyle = "red"; // 사각형 = black

// 3. 2개의 사각형만 존재 > 1초뒤 +1사각형+ 전체 red로 변경
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.fill();
// ctx.beginPath(); // 마지막 사각형 색만 red로
// ctx.rect(250, 250, 100, 100);
// ctx.fillStyle = "red";
// setTimeout(() => {
//    ctx.fill(); 
// }, 3000);

// 4. shortcut rect을 쓰지 않고, moveTo lineTo로 그리기
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();

// 5. 집만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200)
// ctx.fill();

// 6. 캐릭터 만들기
// ctx.fillRect(200, 200, 15, 100);
// ctx.fillRect(365, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// ctx.arc(290, 130, 70, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(260, 120, 10, 0, 2 * Math.PI);
// ctx.arc(320, 120, 10, 0, 2 * Math.PI);
// ctx.fillStyle = "white";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(300, 150);
// ctx.lineTo(400, 180);
// ctx.lineTo(400, 185);
// ctx.lineTo(300, 155);
// ctx.lineTo(300, 150);
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(280, 170);
// ctx.lineTo(310, 170);
// ctx.arc(295, 170, 15, 0, 1* Math.PI);
// ctx.fillStyle = "blue";
// ctx.fill();

// 7. 보드를 클릭할 떄마다()
ctx.lineWidth = 2;
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    ];
    
function onClick(event){
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}


// canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onClick);
