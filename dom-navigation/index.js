const element = document.getElementById("fruits");

//.firstElementChild
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "hsl(167, 94.10%, 39.60%)";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
	const firstChild = ulElement.firstElementChild;
	firstChild.style.backgroundColor = "yellow";
});

//.lastElementChild
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "hsl(152, 66.00%, 41.60%)";

//.nextElementSibling
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "hsl(229, 81.80%, 21.60%)";

//.previousElementSibling
const element1 = document.getElementById("ice cream");
const previousSibling = element1.previousElementSibling;
previousSibling.style.backgroundColor = "hsl(92, 91.40%, 36.70%)";

//.parentElement
const parentElement = element.parentElement;
parentElement.style.backgroundColor = "hsl(0, 24.40%, 26.50%)";

//.children
const children = element.children;

Array.from(children).forEach((child) => {
	child.style.border = "5px solid black";
});
