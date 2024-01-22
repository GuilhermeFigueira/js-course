const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age3 = 0;

myButton.onclick = function () {
	age3 = myText.value;
	age3 = Number(age3);
	if (age3 >= 100) {
		resultElement.textContent = "You are TOO OLD to enter this site";
	} else if (age3 >= 18) {
		resultElement.textContent = "You are old enough to enter this site";
	} else if (age3 == 0) {
		resultElement.textContent = "You can't enter you were just born";
	} else if (age3 < 0) {
		resultElement.textContent = "Your age can't be below 0"; // Mesmo se a idade for 100+, o código não vai chegar nessa parte porque 100 é maior que 18, então essa parte é pulada
	} else {
		resultElement.textContent = "You must be 18+ to enter this site";
	}
};
