const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
	// console.log(`Key down = ${event.key}`);
	myBox.textContent = "💀";
	myBox.style.backgroundColor = "tomato";

	if (event.key.startsWith("Arrow")) {
		switch (event.key) {
			case "ArrowUp":
				y -= 10;
				break;
			case "ArrowDown":
				y += 10;
				break;
			case "ArrowLeft":
				x -= 10;
				break;
			case "ArrowRight":
				x += 10;
				break;
		}

		myBox.style.top = `${y}px`;
		myBox.style.left = `${x}px`;
	}
});

document.addEventListener("keyup", (event) => {
	// console.log(`Key up = ${event.key}`);
	myBox.textContent = "💣";
	myBox.style.backgroundColor = "lightblue";
});
