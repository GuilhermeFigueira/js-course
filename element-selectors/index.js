const myHeading = document.getElementById("my-heading");

//Prestar atenção que ao acessar o css de algum elemento no javascript, ele tera o nome em camelCase (backgroundColor)
//Enquanto no css ele tem o nome hifenizado (background-color)
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// console.log(myHeading);

// <h1 id="my-heading" style="background-color: yellow; text-align: center;">Food R Us</h1>

const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits) {
	fruit.style.backgroundColor = "yellow";
}

// HTML elements não possuem a função foreach
// fruits.forEach(); // Uncaught error

//Mas podemos transformá-lo em uma array

Array.from(fruits).forEach((fruit) => {
	fruit.style.backgroundColor = "red";
});

const h4Elements = document.getElementsByTagName("h4"); // Seleciona todos os elementos com a tag "h4"
const liElements = document.getElementsByTagName("li"); // Seleciona todos os elementos com a tag "li"

for (let h4Element of h4Elements) {
	h4Element.style.backgroundColor = "green";
}
for (let liElement of liElements) {
	liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach((h4Element) => {
	h4Element.style.color = "white";
});
Array.from(liElements).forEach((liElement) => {
	liElement.style.color = "purple";
});

const element = document.querySelector(".fruits"); // querySelector seleciona o primeiro elemento que corresponder ao que foi passado a ele
// const element = document.querySelector("h4");
// const element = document.querySelector("li");
// const element = document.querySelector("ul");

element.style.backgroundColor = "grey";

//querySelectorAll retorna uma Nodelist que é similar a um HTML collection, mas ele tem métodos embutidos
//Porém Nodelists são estáticos, e HTML collections não, ou seja a Nodelist não atualiza automaticamente na DOM

const foods = document.querySelectorAll("li");

foods.forEach((food) => {
	food.style.backgroundColor = "hsl(200, 78.20%, 46.90%)";
});
