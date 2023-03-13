// <!-- DOM Manipulation
// - If we want our websites to be interactive, we want it to change on the fly
//  - So when the user clicks a button we need to respond to it by changing the content
// - DOM catalogs our web page into individual objects which we can select and manipulate
// -->

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0 
console.log(secretNumber)


// Selecting the check button
let check = document.querySelector(".check")

// Add event listener to the check button
check.addEventListener("click",()=>{

    // fetch the user input from the DOM 
    let guess = Number(document.querySelector(".guess").value)
    
    

    // handling the cases
    // 1. invalid/no input
    
    if(!guess){
        alert("Invalid Input")
        
    }

    // correct guess
    else if(secretNumber === guess){
        //change background color to #60b347
        document.querySelector("body").style.background = "#60b347"
        // Display the message -> You guessed it right!
        document.querySelector("body h1").textContent = "You guessed it right!"
        // Display the secret number
        document.querySelector(".number").textContent = "" + secretNumber

        // Check for new high score and display it
        document.querySelector(".message").textContent = "High Score : " + score
        
    }

    // guess is less than random number

    else if(secretNumber > guess){

        // Display You lost if score goes below 0
        if(score <= 0){
            lost()
        }
        else{
             // Otherwise Diplay the message Too Low, Display the score and decrement the score  
        score = score - 1
        document.querySelector(".message").textContent = "Too Low"
        document.querySelector(".score").textContent = "" + score
        
        }
    }

    // guess greater than random number
    else if(secretNumber < guess){
        // Display You lost if score goes below 0
        if(score <= 0){
            lost()
        }
        else{
            // Otherwise Diplay the message Too High, Display the score and decrement the score  
        score = score - 1
        document.querySelector(".message").textContent = "Too High"
        document.querySelector(".score").textContent = "" + score
        }
    }
})

function lost(){
    document.querySelector("body h1").textContent = "You lost the Game !!!"
    document.querySelector("body").style.background = "#FA8072"
    document.querySelector(".message").textContent = "Answer is:" + secretNumber
    document.querySelector(".number").textContent = secretNumber
    document.querySelector(".number").style.color = "#FF0000"

}


let again = document.querySelector(".again")
again.addEventListener('click',()=>{
    document.querySelector("body h1").textContent = "Guess My Number!"
    document.querySelector("body").style.background = "#000000"
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".number").textContent = "?"
    document.querySelector(".number").style.color = "#000000"
    document.querySelector(".score").textContent = "20"
    document.querySelector(".guess").value = ""
    
    score = 20;
    highScore = 0;
    secretNumber = Math.floor(Math.random() * 20) + 1;

})