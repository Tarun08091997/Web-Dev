const create = document.querySelector("button");
const input = document.querySelector("input");
const copy = document.querySelector(".far");
const alertEL= document.querySelector(".alert");
var created = false;
create.addEventListener('click',()=>{
    input.value = createPassword();
    created = true;
});

copy.addEventListener('click',()=>{
    if(created){
        input.select();
        input.setSelectionRange(0,9999);
        navigator.clipboard.writeText(input.value)
        .then(()=>{
            alertEL.className += " active";
        })
    }
});

function createPassword(){
    const ch = '"!#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    const L = ch.length;
    const length = 14;
    let pass = ""
    for(let i=0;i<14;i++){
        let x = Math.floor(Math.random()*L);
        pass = pass + ch[x];
    }

    return pass;
}