const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다. 그림을 그릴때 사용한다.
// const context = canvas.getContext("2d");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 2.1 Mouse Painting
// moveTo는 우리가 선을 긋지 않으면서 브러쉬를 움직이게 해준다.
// 2-1-1 유저가 마우스를 움직일 때 마다 moveTo를 호출함으로써 ???
// 유저가 움직일 때, 연필을 움직여주기
// 클릭하면, 클릭한 곳에서부터 선을 그려야함
// => 우리는 moveTo를 해줘야한다, 왜냐하면 유저의 마우스가 있는 곳으로 브러쉬를 움직이고 싶기 떄문이다.
// mousedown : 마우스를 누른채로 있는 것

ctx.lineWidth = 2;
let isPainting = false; // 마우스를 누르면 isPainting = true가 되어야한다.
// 마우스가 눌렸을 때 어떤 일이 일어나야 할까?
// 마우스가 눌렸을 때 유저가 그리고 싶어하는걸 그리게 해주자. => isPainting이라는 변수를 만들어주자.
ctx.moveTo(200, 200);
ctx.lineTo(400, 400);
ctx.stroke();

function onMove(event){
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
// 마우스가 눌렸을 때 유저가 그리고 싶어하는걸 그리게 해주기
    isPainting = true
}

function cancelPainting(){
    isPainting = false;
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

