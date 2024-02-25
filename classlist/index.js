const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", (e) => {
	e.target.classList.toggle("hover");
	// e.target.classList.add("hover");
});
myButton.addEventListener("mouseout", (e) => {
	e.target.classList.toggle("hover"); //toggle faz o trabalho de adicionar e remover
	// e.target.classList.remove("hover");
});
