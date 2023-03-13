const timer = document.querySelector("#timer")
var time;
var timerId;

const number2box = document.getElementById('number2');
const number1box = document.getElementById('number1');
var operator;
var score = 0;
var number3box = document.getElementById('number3');
var number1 , number2;
var number3; //--------------Result



function starttimer(){
	time = 20;
	timer.innerHTML = time;
	timerId = setInterval(()=>{
		time = time - 1;
		timer.innerHTML = time;
		if(time == 0){
			gameover();
		}

	},1000);
}

function resetTime(interval){
	clearInterval(interval);
	starttimer();
}





function randomise() {
	// Generate 2 random numbers
    number1 = Math.round(Math.random()*100);
	number2 = Math.round(Math.random()*100);

	// If the first number is smaller than the second number then swap the 2 numbers
     if(number1 < number2){
		let temp = number1;
		number1 = number2;
		number2 = temp;
	 }


	// To generate the result, use switch-case based on which perform operations.
	operator = Math.round(Math.random() * 5);
	switch(operator){
		case(1): { number3 = number1 + number2 ; break; }
		case(2): {number3 = number1 - number2; break;}
		case(3): {number3 = number1 * number2; break;}
		case(4): {number3 = number1 / number2; break;}
		case(5): {number3 = number1 % number2; break;}
		default : randomise(); return;
	}
	console.log(number1,operator,number2,number3);
    number1box.innerHTML = number1;
	number2box.innerHTML = number2;
	number3box.innerHTML = Math.floor(number3);
	resetTime(timerId);
	
}

randomise();

// Select the plus, minus multiplication division operators using the dom manipulation
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mul = document.querySelector("#mul");
const div = document.querySelector("#divide");
const mod = document.querySelector("#modulus");

// attach onclick method to each of the operators -> If the operation selected is the currect one then increment the score otherwise redirect the gameover.html
function gameover(){
	location.href = './index.html';
}

var check = (a) =>{
		if(operator === a){
		   score = score+1;
		   console.log(score);
		   randomise();
		}
		else{
			gameover();
		}
}

plus.onclick = () => {check(1)};
minus.onclick = () => {check(2)};
mul.onclick = () => {check(3)};
div.onclick = () => {check(4)};
mod.onclick = () => {check(5)};  

// plus.onclick = () =>{
// 	if(operator === 1){
// 	   score = score+1;
// 	   console.log(score);
// 	   randomise();
// 	}
// 	else{
// 		gameover();
// 	}
// }
// minus.onclick = () =>{
// 	if(operator === 2){
// 	   score = score+1;
// 	   console.log(score);
// 	   randomise();
// 	}
// 	else{
// 		gameover();
// 	}
// }
// mul.onclick = () =>{
// 	if(operator === 3){
// 	   score = score+1;
// 	   console.log(score);
// 	   randomise();
// 	}
// 	else{
// 		gameover();
// 	}
// }
// div.onclick = () =>{
// 	if(operator === 4){
// 	   score = score+1;
// 	   console.log(score);
// 	   randomise();
// 	}
// 	else{
// 		gameover();
// 	}
// }
// mod.onclick = () =>{
// 	if(operator === 5){
// 	   score = score+1;
// 	   console.log(score);
// 	   randomise();
// 	}
// 	else{
// 		gameover();
// 	}
// }





starttimer();
