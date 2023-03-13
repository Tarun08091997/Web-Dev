const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const image = document.querySelector(".image-container");
let x = 0;
next.addEventListener('click',()=>{
    x = x + 45;
    image.style.transform = `perspective(1000px) rotateY(${x}deg)`
});

prev.addEventListener('click',()=>{
    x = x - 45;
    image.style.transform = `perspective(1000px) rotateY(${x}deg)`
});




