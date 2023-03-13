const bg = document.querySelector(".bg");
const loadText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurring,30);

function blurring(){
    load++; 
    if(load >= 100){
        clearInterval(int);
    } 

    loadText.innerText = `${load}%`;
    loadText.style.opacity = 1 - (load/100);
    bg.style.filter = `blur(${30*(1-load/100)}px)`
}