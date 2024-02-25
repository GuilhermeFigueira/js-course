const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event) {
	event.target.style.backgroundColor = "red";
	event.target.textContent = "Ouch! 💀";
}

// A função addEventListener passa para o callback uma lista de informações sobre o evento ocorrido, que nesse caso é o click
myBox.addEventListener("click", changeColor);
//Ou
// myBox.addEventListener("click", (event) => {
// 	event.target.style.backgroundColor = "red";
// 	event.target.textContent = "Ouch! 💀";
// });

myBox.addEventListener("mouseover", (event) => {
	event.target.style.backgroundColor = "yellow";
	event.target.textContent = "I dare you 😎";
});

myBox.addEventListener("mouseout", (event) => {
	event.target.style.backgroundColor = "lightgreen";
	event.target.textContent = "Click me 💣";
});

myButton.addEventListener("click", (event) => {
	myBox.style.backgroundColor = "red";
	myBox.textContent = "Ouch! 💀";
});

myButton.addEventListener("mouseover", (event) => {
	myBox.style.backgroundColor = "yellow";
	myBox.textContent = "I dare you 😎";
});

myButton.addEventListener("mouseout", (event) => {
	myBox.style.backgroundColor = "lightgreen";
	myBox.textContent = "Click me 💣";
});
