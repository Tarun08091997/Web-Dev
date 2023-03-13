const d = document.querySelector(".day");
const h = document.querySelector(".hour");
const m = document.querySelector(".minute");
const s = document.querySelector(".second");
const dt = document.querySelector("input");
const start = document.querySelector(".start")
var value = "";
start.addEventListener('click',()=>{
    if(s.innerHTML+m.innerHTML + h.innerHTML + d.innerHTML == "00000000"){
        listner();
    }
    
});

function listner(){
    value = dt.value;
    if(value == ""){
        alert("Please input a Date");
    }
    else{
        setValue(new Date(value).getTime());
        clicked = true;
    }
}

var now = "";
var time = "";
function setValue(target){
    now = new Date();
    time = Math.floor((target-now.getTime())/1000);
    if(time <= 0){
        s.innerHTML = "00";
        m.innerHTML = "00";
        h.innerHTML = "00";
        d.innerHTML = "00";
        value = "";
        alert("you reached the countdown value")
    }
    else{
        s.innerHTML = (time % 60);
        time = Math.floor(time/60);
        m.innerHTML = time%60;
        time = Math.floor(time/60);
        h.innerHTML = time % 24;
        time = Math.floor(time/24)
        d.innerHTML = time;
        setTimeout(()=>{setValue(target)},1000);
    }
}
