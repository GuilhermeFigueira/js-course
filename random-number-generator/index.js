// RANDOM NUMBER GENERATOR

//Lados de um dado

const label1 = document.getElementById("rollLabel1");
const label2 = document.getElementById("rollLabel2");
const label3 = document.getElementById("rollLabel3");
const button = document.getElementById("rollButton");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

button.onclick = function () {
	randomNum1 = Math.floor(Math.random() * max) + min;
	randomNum2 = Math.floor(Math.random() * max) + min;
	randomNum3 = Math.floor(Math.random() * max) + min;
	label1.textContent = randomNum1;
	label2.textContent = randomNum2;
	label3.textContent = randomNum3;
};

/* Entre dois valores
const min = 50;
const max = 100;

let randomNum =
	Math.floor(
		Math.random() *
			 Quantos números temos que mostrar 100 - 50 = 50 números
			(max - min)
	) +
     A partir da onde = 50
	min;

 console.log(randomNum); 50-100

*/
