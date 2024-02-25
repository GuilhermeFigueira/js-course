const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (e) => {
	if (myImg.style.visibility === "hidden") {
		myImg.style.visibility = "visible";
		myButton.textContent = "Hide";
	} else {
		myImg.style.visibility = "hidden";
		myButton.textContent = "Show";
	}
});
