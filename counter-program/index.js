const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const increaseButton = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");

let count = 0;

function update() {
	countLabel.textContent = count;
}

decreaseButton.onclick = function () {
	count--;
	update();
};
resetButton.onclick = function () {
	count = 0;
	update();
};
increaseButton.onclick = function () {
	count++;
	update();
};
