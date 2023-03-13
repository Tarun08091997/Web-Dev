const stars = document.querySelectorAll(".fas");
const emojis = document.querySelectorAll(".far");
const colors = ["red","orange","lightblue","lightgreen","green"];


stars.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        giveRating(index);
    })
})

function giveRating(value){
    // start rating
     stars.forEach((star,index)=>{
        if(index <= value){
            star.style.color = 'gold';
        }
        else{
            star.style.color = 'lightgray';
        }
    });
    // Change Emoji
    emojis.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${50*value}px)`
    })
    emojis[value].style.color = colors[value];
}