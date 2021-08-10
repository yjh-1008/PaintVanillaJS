const canvas = document.getElementById("jsCanvas");
const ctx=canvas.getContext('2d');
const colors=document.getElementsByClassName("jsColor");
const range=document.getElementById("jsRange");
const mode=document.getElementById("jsMode");
const saveBtn=document.getElementById("jsSave");
const CANVAS_SIZE=700;
const INITIAL_COLOR="#2cc2c";

canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;

ctx.strokeStyle ="#2c2c2c";
ctx.lineWidth=2.5;

//brush function
ctx.strokeStyle=INITIAL_COLOR;
ctx.fillStyle=INITIAL_COLOR;
ctx.fillStyle="white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
let filling=false;

//mouse function
function onMouseMove(e){
    const x=e.offsetX;
    const y=e.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
        
    }
}



let painting =false;

function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}



function onMouseUp(e){
    stopPainting();
}

function handleColorClick(e){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
    console.log(color);
}

function handleCanvaaClick(e){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

function handelCM(e){
    e.preventDefault();
    console.log(e);
}

function handelSaveClick(){
    const image=canvas.toDataURL("image/jpeg");
    const link=document.createElement("a");
    link.href=image;
    link.download="PaintJS[EXPORT]";
    link.click();
    colsole.log(link);
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvaaClick);
    canvas.addEventListener("contextmenu",handelCM);

}

function handleRangeChange(e){
    const size=e.target.value;
    ctx.lineWidth=size;
}

function handleModeClick(e){
    console.log(e);
    if(filling){
        filling=false;
        mode.innerText="Fill";

    }else{
        filling=true;
        mode.innerText="Paint";
        
    }
}

Array.from(colors).forEach(color =>
    color.addEventListener("click",handleColorClick));



if(range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick)
}
if(saveBtn){
    
    saveBtn.addEventListener("click",handelSaveClick);
}