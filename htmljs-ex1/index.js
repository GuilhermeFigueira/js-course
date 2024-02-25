// -------- EXAMPLE <h1> ----------

// STEP 1 CRIAR O ELEMENTO
const newH1 = document.createElement("h1");

// STEP 2 ADICIONAR ATRIBUTOS E PROPRIEDADES
newH1.textContent = "I like pasta";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 ADICIONAR ELEMENTO A DOM
// document.body.append(newH1);
// document.body.prepend(newH1);

//Quando usamos o comando append, o elemento adicionado sempre será o ultimo
//Para ser o primeiro usamos o prepend

// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

//Caso as boxes não tivessem id poderíamos usar as classes com querySelector

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[3]);

// REMOVER O ELEMENTO HTML

// document.body.removeChild(newH1);

// -------- EXAMPLE <li> ----------

// STEP 1 CRIAR O ELEMENTO
const newListItem = document.createElement("li");

// STEP 2 ADICIONAR ATRIBUTOS E PROPRIEDADES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "hsl(217, 79.60%, 48.00%)";

// STEP 3 ADICIONAR ELEMENTO A DOM

// document.getElementById("fruits").append(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// REMOVER O ELEMENTO HTML
// document.getElementById("fruits").removeChild(newListItem);
