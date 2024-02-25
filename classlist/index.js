const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.classList.add("enabled");
myH1.classList.add("enabled");
// myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", (e) => {
	e.target.classList.toggle("hover");
	// e.target.classList.add("hover");
});
myButton.addEventListener("mouseout", (e) => {
	e.target.classList.toggle("hover"); //toggle faz o trabalho de adicionar e remover
	// e.target.classList.remove("hover");
});

myButton.addEventListener("click", (e) => {
	if (e.target.classList.contains("disabled")) {
		e.target.textContent += "💀";
	} else {
		console.log("a");
		e.target.classList.replace("enabled", "disabled");
	}
});

myH1.addEventListener("mouseover", (e) => {
	e.target.classList.toggle("hover");
	// e.target.classList.add("hover");
});
myH1.addEventListener("mouseout", (e) => {
	e.target.classList.toggle("hover"); //toggle faz o trabalho de adicionar e remover
	// e.target.classList.remove("hover");
});

myH1.addEventListener("click", (e) => {
	if (e.target.classList.contains("disabled")) {
		e.target.textContent += "💀";
	} else {
		console.log("a");
		e.target.classList.replace("enabled", "disabled");
	}
});
