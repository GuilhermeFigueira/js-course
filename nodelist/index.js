let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// ADICIONAR PROPRIEDADES HTML/CSS

buttons.forEach((button) => {
	button.style.backgroundColor = "green";
	button.textContent += "💣";
});

// CLICK event listener

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.target.style.backgroundColor = "tomato";
	});
});

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach((button) => {
	button.addEventListener("mouseover", (e) => {
		e.target.style.backgroundColor = "rgba(77, 142, 179, 0.66)";
	});
});

buttons.forEach((button) => {
	button.addEventListener("mouseout", (e) => {
		e.target.style.backgroundColor = "rgb(77, 142, 179)";
	});
});

// ADICIONAR UM ELEMENTO

const newButton = document.createElement("button");

newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);

console.log(buttons); // Ainda aparecem somente 4 botões, mesmo tendo adicionado mais 1

buttons = document.querySelectorAll(".myButtons"); //Agora ele esta atualizado

// REMOVER UM ELEMENTO DA DOM E DA NODELIST

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.target.remove();
		//console.log(buttons); // A nodelist não atualiza, mesmo tendo removido os botoes, precisamos atualizar manualmente
		buttons = document.querySelectorAll(".myButtons");
	});
});
