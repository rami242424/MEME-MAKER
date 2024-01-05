const canvas = document.querySelector("canvas");

// context(ctx) = brush => 뭐든 그릴 수 있다.
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

function onClick(){
    
}

canvas.addEventListener("click", onClick);