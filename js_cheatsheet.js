console.log("Eu gosto de pizza!");
console.log("É muito bom");

window.alert("EU GOSTO MUITO DE PIZZA");

//Esse é um comentário

/* 
    Esse 
    é 
    um
    comentário
    multilinha
*/

//=================================================================================================================================================

// Uma variável é um container para guardar dados
// Uma variável se comporta como se fosse o valor que ela contém
// Dois passos:
// 1. Declaração (var, let, const)
// 2. Atribuição ( = operador atribuidor)

let age; // Atribuição de variável
// let age = 21; //definição e atribuição de variável (number)

console.log(age); // undefined

age = 21;
// age = age + 1  => 22
// age++ => 22
// age += 1 => 22

console.log(age); // 21
console.log(typeof age); // number

console.log("age"); // age

let firstName = "Antedeguemon"; //definição e atribuição de variável (string)

console.log(firstName); //Antedeguemon
console.log(typeof firstName); // string

console.log("Hello ", firstName); // Hello Antedeguemon (concatenação)
console.log(`Hello ${firstName}`); // Hello Antedeguemon (concatenação)
console.log("Hello " + firstName); // Hello Antedeguemon (concatenação)
firstName = firstName + 1;
console.log(firstName); // Antedeguemon1

let student = false; // definição e atribuição de variável (boolean)

console.log(student); // false
console.log(typeof student); // boolean

document.getElementById("p1").textContent = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are  " + age;
document.getElementById("p3").innerHTML = "Enrolled: " + student;

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<p id="p1"></p>
		<p id="p2"></p>
		<p id="p3"></p>
	</body>
</html>;

//==================================================================================================================================================================

// expressões aritméticas são combinações de...
// operandos (valores, variáveis, etc.)
// operadores (+ - * / % )
// que podem ser atribuídas a um valor
// ex. y = x + 5

let students = 20;

students = students + 1; //21
students++; // 22
students += 2; // 24
++students; // 25
students = students - 1; // 24
students--; // 23
students -= 2; //21
--students; //20
students = students / 2; //10
students /= 2; //5
students **= 2; // 25

let extraStudents = students % 3; // 2
// let extraStudents %= 3  // 2

//Para saber se é um número é par

students % 2; // Se for 1 é impar se for 0 é par

// precedência de operadores
// 1. parenteses ( )
// 2. expoentes
// 3. multiplicação & divisão
// 4. adição & subtração

let result = 1 + 2 * (3 + 4); // 1 + 2 * (7) => 1 + 14 => 15
//let result = (1 + 2) * (3 + 4) =>  (3) * (7) => 21

//==================================================================================================================================================================

//Com aceitar input do usuário

//JEITO FÁCIL com uma window prompt

let username = window.prompt("Qual o seu nome?");
console.log(username); // "Pedro"

//JEITO PROFISSIONAL com uma textbox do HTML

//Arquivo HTMl

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1 id="myH1">Bem-vindo</h1>
		<label>Insira seu nome: </label>
		<input type="text" id="myText" />
		<br />

		<button type="button" id="myButton">
			submit
		</button>

		<script src="index.js"></script>
	</body>
</html>;

let username1;

document.getElementById("myButton").onclick = function () {
	username1 = document.getElementById("myText").value;
	console.log(username1); // Pedro
	document.getElementById("myH1").textContent = `Hello ${username1}`; // <h1>Hello Pedro</h1>
};

//==================================================================================================================================================================

// type conversion = trocar o tipo de uma variável para outra (strings, numbers, booleans)

// Qual a função?
/*  Quando aceitamos input do usuário geralmente vem em string, 
    mas se precisarmos fazer cálculos com esse valor precisamos
    mudar o tipo da variável para número
*/

// let age1 = window.prompt("Quantos anos você tem?"); // 20

// age1 += 1;

// console.log(age1, typeof age1); //201, string

let age1 = window.prompt("Quantos anos você tem?"); // 20
age1 = Number(age1);

age1 += 1;

console.log(age1, typeof age1); //21, number

let x = "cebola";
let y = "cebola";
let z = "cebola";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN (Not a number), number
console.log(y, typeof y); // pizza, string
console.log(z, typeof z); // true, boolean

//

let x1 = "0";
let y1 = "0";
let z1 = "0";

x1 = Number(x1);
y1 = String(y1);
z1 = Boolean(z1);

console.log(x1, typeof x1); // 0, number
console.log(y1, typeof y1); // 0, string
console.log(z1, typeof z1); // true, boolean

//

let x2 = "";
let y2 = "";
let z2 = "";

x2 = Number(x2);
y2 = String(y2);
z2 = Boolean(z2);

console.log(x2, typeof x2); // 0, number
console.log(y2, typeof y2); // , string
console.log(z2, typeof z2); // false, boolean

//

let x3;
let y3;
let z3;

x3 = Number(x3);
y3 = String(y3);
z3 = Boolean(z3);

console.log(x3, typeof x3); // NaN, number
console.log(y3, typeof y3); // undefined, string
console.log(z3, typeof z3); // false, boolean

//==================================================================================================================================================================

// const = uma variável que não pode ser mudada

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Insira o raio do círculo: "); // 10
radius = Number(radius);

circumference = 2 * pi * circumference;

console.log(circumference); // 63.8318

// Desse jeito você ou alguém pode sem querer mudar o valor de 'pi' que é um valor fixo:

/*
let pi = 3.14159;
let radius;
let circumference;

pi = 420.69

radius = window.prompt("Insira o raio do círculo: "); // 10
radius = Number(radius);

circumference = 2 * pi * circumference;

console.log(circumference); // 8413.8
*/

// Jeito correto

/*
    (Quando usamos const, se a variável for número ou boolean deixamos em maiúsculo )
    const PI = 3.14159;
    let radius;
    let circumference;

    //pi = 420.69 (Uncaught TypeError: Assignment to constant variable)

    radius = window.prompt("Insira o raio do círculo: "); // 10
    radius = Number(radius);

    circumference = 2 * PI * circumference;

    console.log(circumference); // 63.8318
*/

//==================================================================================================================================================================

// Ver "./counter-program"

//==================================================================================================================================================================

// Math = objeto embutido no js que providencia uma coleção de métodos e propriedades relacionados à matemática

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
let w = 4;
let x4 = 3.21;
let y4 = 2;
let z4;

z4 = Math.round(x4);
console.log(z4); // 3

//let x4 = 3.99;
// z4 = Math.floor(x4) => 3 (.floor sempre arredonda pra baixo)

//let x4 = 3.01;
// z4 = Math.ceil(x4) => 4 (.ceil sempre arredonda pra cima)

z4 = Math.trunc(x4);
console.log(z4); // 3 (.trunc remove o decimal)

z4 = Math.pow(w, y); //4^2
console.log(z4); // 16

z4 = Math.sqrt(w); // Raiz quadrada
console.log(z4); // 2

// trigonometria

Math.sin(); // seno
Math.cos(); // cosseno
Math.tan(); // tangente

// Para encontrar o valor absoluto de um número

Math.abs(-3); // 3

// Para encontrar o maior valor

let max = Math.max(w, x4, y4);
console.log(max); // 4

// Para encontrar o menor valor

let min = Math.min(w, x4, y4);
console.log(max); // 2

//==================================================================================================================================================================

// Ver "./random-number-generator"

//==================================================================================================================================================================

// If Statements

let age2 = 25;

if (age2 >= 18) {
	console.log("You are old enough to enter this site");
} else {
	console.log("You must be 18+ to enter this site");
}

let time = 9;

if (time < 12) {
	console.log("Good morning!");
} else {
	console.log("Good afternoon!");
}

let isStudent = false;

// Quando é uma variável boolean não precisa fazer teste "isStudent == true"
if (isStudent) {
	console.log("You are a student");
} else {
	console.log("You are not a student");
}

let hasLicense = false;

if (age2 >= 18) {
	console.log("You are old enough to drive");
	if (hasLicense) {
		console.log("You have your license!");
	} else {
		console.log("You do not have your license yet!");
	}
} else {
	console.log("You must be 18+ to have a license");
}

if (age2 >= 18) {
	console.log("You are old enough to enter this site");
} else if (age2 < 0) {
	console.log("Your age can't be below 0");
} else if (age2 >= 100) {
	console.log("Your are TOO OLD to enter this site"); // Mesmo se a idade for 100+, o código não vai chegar nessa parte porque 100 é maior que 18, então essa parte é pulada
} else {
	console.log("You must be 18+ to enter this site");
}

// Versão certa

if (age2 >= 100) {
	console.log("You are old enough to enter this site");
} else if (age2 >= 18) {
	console.log("Your age can't be below 0");
} else if (age == 0) {
	console.log("You can't enter you were just born");
} else if (age2 < 0) {
	console.log("Your are TOO OLD to enter this site"); // Mesmo se a idade for 100+, o código não vai chegar nessa parte porque 100 é maior que 18, então essa parte é pulada
} else {
	console.log("You must be 18+ to enter this site");
}

// Ver "./age-checker"

//==================================================================================================================================================================

// .checked = propriedade que determina se um checkbox ou um radio button do HTML está "checkado"

// Ver "./check-state"

//==================================================================================================================================================================

// ternary operator (operador ternário) = atalho para declarações if{} e else{}
//										  ajuda a designar um valor a uma variável ou executar um código baseado em uma condição
//										  condição ? códigoSeVerdadeiro : códigoSeFalso;

//                              Jeito comum

// let age3 = 21
// let message

// if (age3 >= 18) {
// 	("You are an adult");
// } else {
// 	message = "You are a minor";
// }

//                           Ternary operator

let age3 = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";

//==============

let time2 = 16; // 16 = 4pm
let greeting = time < 12 ? "Good morning!" : "Good Afternoon";
console.log(greeting); //Good Afternoon

//==============

let isStudent2 = true;
//             Igual ao if e else normal, não precisa fazer teste em variável booleana (isStudent2 == true)
let message2 = isStudent2 ? "You are a student" : "You are not a student";
console.log(message2); // You are a student

//==============

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
	`Your total is $ ${purchaseAmount - purchaseAmount * (discount / 100)}` // Calculo de desconto
);

//==================================================================================================================================================================

// Switch = boa alternativa para muitas declarações if else
let day = 1;

if (day == 1) {
	console.log("Its Monday");
} else if (day == 2) {
	console.log("Its Tuesday");
} else if (day == 3) {
	console.log("Its Wednesday");
} else if (day == 4) {
	console.log("Its Thursday");
} else if (day == 5) {
	console.log("Its Friday");
} else if (day == 6) {
	console.log("Its Saturday");
} else if (day == 7) {
	console.log("Its Sunday");
} else {
	console.log(`${day} its not a valid day`);
}

// Jeito com switch

switch (day) {
	case 1:
		console.log("Its Monday");
		break;
	case 2:
		console.log("Its Tuesday");
		break;
	case 3:
		console.log("Its Wednesday");
		break;
	case 4:
		console.log("Its Thursday");
		break;
	case 5:
		console.log("Its Friday");
		break;
	case 6:
		console.log("Its Saturday");
		break;
	case 7:
		console.log("Its Sunday");
		break;
	// Se não houver match nas variáveis
	default:
		console.log(`${day} its not a valid day`);
}

//==============

let testScore = 92;
let letterGrade;

switch (true) {
	case testScore >= 90:
		letterGrade = "A";
		break;
	case testScore >= 80:
		letterGrade = "B";
		break;
	case testScore >= 70:
		letterGrade = "C";
		break;
	case testScore >= 60:
		letterGrade = "D";
		break;
	default:
		letterGrade = "F";
}

console.log(letterGrade);

//==================================================================================================================================================================

// string methods = permite que você manipule e trabalhe com texto (strings)

let userName = "JoaoGamer";

userName.charAt(0); // "J" (retorna a primeira letra da string)
userName.charAt(1); // "o" (retorna a segunda letra da string)

//==============

userName.indexOf("o"); // "1" (retorna a posição da primeira aparição do valor indicado)
userName.lastIndexOf("o"); // "3" (retorna a posição da última aparição do valor indicado)

//==============

userName.length; // "9" (retorna a largura da string)

//==============

userName = userName.trim(); // Retira todos os espaços em branco

//==============

userName = userName.toUpperCase; // Passa a string para caixa alta
userName = userName.toLowerCase; // Passa a string para caixa baixa

//==============

userName = userName.repeat(3); // "JoaoGamerJoaoGamerJoaoGamer" (repete a string)

//==============

let result2 = userName.startsWith(" "); // false
// let result2 = userName.endsWith(" "); // false

result
	? console.log("Your username can't start with an empty space")
	: console.log(userName);

// result
// 	? //console.log("Your username can't end with an empty space")
// 	: console.log(userName);

//==============

result = userName.includes(" ");

result
	? console.log("Your username can't include an empty space")
	: console.log(userName);

//==============

let phoneNumber = "99228-1040";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber); //"992281040"

//==============

phoneNumber = phoneNumber.padStart(15, "0");

console.log(phoneNumber); //"000000992281040"

phoneNumber = phoneNumber.padStart(15, "1");

console.log(phoneNumber); //"992281040111111"

//==================================================================================================================================================================

// string slicing = criar uma "substring" com uma parte de outra string

const fullName = "Joao Gamer";

let firstName1 = fullName.slice(0, 4); // Joao
let lastName = fullName.slice(5, 10); // Gamer

let firstChar = fullName.slice(0, 1); // J
let lastChar = fullName.slice(-1); // r

// Porém só funciona dessa maneira se o nome for exatamente "Joao Gamer"
// Para isso utilizamos .indexOf

let firstName2 = fullName.slice(0, fullName.indexOf(" ")); // Joao
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1); // Gamer

//==============

const email = "pedrogames@gmail.com";

let username2 = email.slice(0, email.indexOf("@")); // pedrogames
let extension = email.slice(email.indexOf("@") + 1); // gmail.com

//==================================================================================================================================================================

// Method Chaining = Chamar um método atrás do outro em uma linha contínua de código

// OBJETIVO: Receber um input do usuário com o username, remover todo o espaço em branco, deixar a primeira letra em maiúsculo
//           deixar todas as outras em minúsculo

let username3 = window.prompt("Enter your username");

// ----------- SEM METHOD CHAINING ----------

username3 = username3.trim();
let letter = username3.charAt(0);
letter = letter.toUpperCase();

let extraChars = username3.slice(1);
extraChars = extraChars.toLowerCase;

username3 = letter + extraChars; //

// ----------- COM METHOD CHAINING ----------

username3 =
	username3.trim().charAt(0).toUpperCase() +
	username3.trim().slice(1).toLowerCase();

//==================================================================================================================================================================

// logical operators (operadores lógicos) = são usados para combinar ou manipular valores booleanos (verdadeiro ou falso)

// AND = &&
// OR = ||
// NOT = !

const temp = 20;

// 👎
if (temp > 0) {
	console.log("The weather is good");
} else if (temp <= 30) {
	console.log("The weather is good");
} else {
	console.log("The weather is bad");
}

// 👍

if (temp > 0 && temp <= 30) {
	console.log("The weather is good");
} else {
	console.log("The weather is bad");
}

//==============

if (temp <= 0 || temp > 30) {
	console.log("The weather is bad");
} else {
	console.log("The weather is good");
}

//==============

let isSunny = true;

if (isSunny) {
	console.log("Its sunny");
} else {
	console.log("Its cloudy");
}

if (!isSunny) {
	console.log("Its cloudy");
} else {
	console.log("Its sunny");
}

//==================================================================================================================================================================

// "=" operador de designação
// "==" operador de comparação (compara se os valores são iguais)
// "===" operador de igualdade estrita (compara se os valores E o tipo do dado são iguais)
// "!="" operador de não igualdade
// "!==" operador de não igualdade estrita

const PI = 3.14;

// Retorna verdadeiro
if (PI == "3.14") {
	console.log("That is PI");
} else {
	console.log("That is not PI");
}

// Retorna falso pois os tipos de dado são diferentes
if (PI === "3.14") {
	console.log("That is PI");
} else {
	console.log("That is not PI");
}

// Retorna verdadeiro
if (PI === 3.14) {
	console.log("That is PI");
} else {
	console.log("That is not PI");
}

// Um bom uso do operador de igualdade estrita é no recebimento do input do usuário, pois tende a ser do tipo string

if (PI != "3.14") {
	console.log("That is not PI");
} else {
	console.log("That is PI"); // <-- executa
}

if (PI !== "3.14") {
	console.log("That is not PI"); // <-- executa
} else {
	console.log("That is PI");
}

if (PI !== 3.14) {
	console.log("That is not PI");
} else {
	console.log("That is PI"); // <-- executa
}

//==================================================================================================================================================================

// while loop = irá repetir um código ENQUANTO (while) uma condição for verdadeira

let username4 = "";

// Irá executar uma vez só
if (username4 === "") {
	console.log("You didn't enter your name");
} else {
	console.log(`Hello ${username4}`);
}

// Vai rodar várias vezes até o username4 for diferente de vazio
// Caso o username4 for diferente de vazio, nunca entraremos no while loop

while (username4 === "") {
	//Loop infinito
	console.log("You didn't enter your name");
}
console.log(`Hello ${username4}`);

// Sempre deixe uma maneira de escapar do laço while, caso contrário ficará infinito

while (username4 === "" || username4 === null || username4 === undefined) {
	// Não deixará o usuário fechar a prompt até inserir o username
	username4 = window.prompt("Enter your name");
}
console.log(`Hello ${username4}`);

//==============

// Usar do{}while() é diferente de usar somente while, pois ele sempre executará ao menos uma vez

do {
	username4 = window.prompt("Enter your name");
} while (username4 === "" || username4 === null);

//==============

let loggedIn = false;
let username5;
let password;

//  Se loggedIn for verdadeiro, o WHILE loop não será executado, mas se fosse DO WHILE
//  mesmo que o loggedIn fosse verdadeiro, o laço seria executado mesmo assim
while (!loggedIn) {
	username5 = window.prompt("Enter your username");
	password = window.prompt("Enter your password");

	if (username5 === "myUsername" && password === "myPassword") {
		loggedIn = true;
		console.log("You are logged in!");
	} else {
		console.log("Invalid credentials please try again!");
	}
}

//==================================================================================================================================================================

// for loop = repete um código uma quantidade LIMITADA de vezes

// i = index
for (let i = 0; i <= 2; i++) {
	console.log("Hello"); // Irá mostrar essa mensagem 3 vezes (i=0,i=1,i=2)
	console.log(i); // 0,1,2
}

//==============

for (let i = 1; i <= 10; i++) {
	console.log(i); //conta até 10
}

//==============

for (let i = 1; i <= 10; i += 2) {
	console.log(i); // conta de 2 em 2 (1,3,5,7,9) e são todos os números ímpares de 1-10
}

//==============

for (let i = 2; i <= 10; i += 2) {
	console.log(i); // conta de 2 em 2 (1,3,5,7,9) e são todos os números pares de 1-10
}

//==============

for (let i = 10; i > 0; i--) {
	console.log(i); // conta de 10 até 0
}
console.log("FELIZ ANO NOVO");

//==============

for (let i = 10; i > 0; i -= 2) {
	console.log(i); // conta de 10 até 0 de 2 em 2
}

//==============

for (let i = 1; i <= 20; i++) {
	if (i == 13) {
		continue; // Irá pular o número 13
	} else {
		console.log(i); // Conta de 1-20
	}
}

//==============

for (let i = 1; i <= 20; i++) {
	if (i == 13) {
		break; // Irá parar no número 12
	} else {
		console.log(i); // Conta de 1-20
	}
}

//==================================================================================================================================================================

// Ver "./number-guessing-game"

//==================================================================================================================================================================

// function = Uma seção de código reusável
//            Declare o código uma vez, e use quando quiser
//            Chame a função para executar aquele código

function happyBirthday() {
	console.log("Happy birthday to you!");
	console.log("Happy birthday to you!");
	console.log("Happy birthday to you!");
	console.log("Happy birthday to you!");
}

happyBirthday(); // "Happy birthday to you!" "Happy birthday to you!" "Happy birthday to you!" "Happy birthday to you!"
happyBirthday(); // "Happy birthday to you!" "Happy birthday to you!" "Happy birthday to you!" "Happy birthday to you!"
happyBirthday(); // "Happy birthday to you!" "Happy birthday to you!" "Happy birthday to you!" "Happy birthday to you!"

//==============

function happyBirthdayTo(username, age) {
	console.log("Happy birthday to you!");
	console.log("Happy birthday to you!");
	console.log(`Happy birthday to ${username}!`);
	console.log("Happy birthday to you!");
	console.log(`You are ${age} years old`);
}

//happyBirthdayTo();  Não funciona, necessita dos argumentos

happyBirthdayTo("Pedrogamer", 25); // "Happy birthday to you!" "Happy" birthday to you!" "Happy birthday to Pedrogamer!" "Happy birthday to you!"
//                                     "You are 25 years old"
// A ordem dos parâmetros importa

//==============

function add(x, y) {
	let result = x + y;
	return result;
}

// Ou

function add(x, y) {
	return x + y;
}

add(2, 3); // Quando a função executa, ela se torna o valor especificado pelo "return" que nesse caso seria "5"

// Por exemplo

let answer = add(2, 3);
console.log(answer); // 5

// Ou

console.log(add(2, 3)); // 5

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

//==============

function isEven(number) {
	return number % 2 === 0 ? true : false;
	// Ou

	// if (number % 2 === 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}

console.log(isEven(10)); // true
console.log(isEven(11)); // false
console.log(isEven(12)); // true

//==============

function isValidEmail(email) {
	return email.includes("@") ? true : false;

	// if (email.includes("@")) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}

console.log(isValidEmail("pedrogames@gmail.com")); // true
console.log(isValidEmail("pedrogames.com")); // false

//==================================================================================================================================================================

// variable scope = onde uma variável é reconhecida e acessível (local vs global)

// Retorna erro de sintaxe pois são duas variáveis globais, para poder declarar duas variáveis iguais é necessário declará-las em dois
// escopos diferentes

// let x = 1
// let x = 2 => error

function function1() {
	let x = 1;
	console.log(x);
}

function function2() {
	let x = 2;
	console.log(x);
}

function1(); // 1
function2(); // 2

// Não retorna erro, pois estão dentro de escopos diferentes

//==============

function function3() {
	let x = 1;
	console.log(y); // y is not defined
}

function function4() {
	let y = 2;
	console.log(x); // x is not defined
}

// Funções não conseguem ver dentro de outras funções

//==============

// Mas elas enxergam variáveis globais (tomar cuidado ao declarar várias variáveis globais em um grande projeto, possível conflito de nomes)

let x5 = 15;

function function5() {
	console.log(x5);
}

function function6() {
	console.log(x5);
}

function5(); // 15
function6(); // 15

//==============

let x6 = 15;

function function7() {
	let x6 = 23;
	console.log(x6);
}

function function8() {
	let x6 = 38;
	console.log(x6);
}

function7(); // 23
function8(); // 38

// Se tivermos duas variáveis com nomes iguais em escopos diferentes, a versão local sempre será usada primeiro

//==================================================================================================================================================================

// Ver "./temperature-conversor"

//==================================================================================================================================================================

// array = são utilizados para armazenar mais de um valor em uma única variável.
//         Isso é comparável a uma variável que pode armazenar apenas um valor.

let fruit = "apple";

let fruits = ["apple", "orange", "banana"];

//==============

console.log(fruits); // "apple", "orange", "banana"

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "orange"
console.log(fruits[2]); // "banana"
console.log(fruits[3]); // undefined

//==============

fruits[0] = "coconut";

console.log(fruits[0]); // "coconut"

//==============

fruits.push("pineapple"); // Adiciona um valor a array na última posição
fruits.pop(); // Remove um valor da array na última posição
fruits.unshift("mango"); // Adiciona um valor a array na primeira posição
fruits.shift(); // Remove um valor da array na primeira posição

//==============

let numOfFruits = fruits.length;
console.log(numOfFruits); // 3

//==============

let index = fruits.indexOf("apple");
console.log(index); // 0

let index1 = fruits.indexOf("kiwi");
console.log(index1); // -1 (útil para testar se tal valor existe na array)

//==============

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]); // vai printar no console os valores da array um por um em ordem crescente de index
}

for (let i = fruits.length - 1; i >= 0; i--) {
	console.log(fruits[i]); // vai printar no console os valores da array um por um em ordem decrescente de index
}

// Método simplificado de usar o for com arrays

for (let fruit of fruits) {
	console.log(fruit);
}

// Faz a mesma coisa que
// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// }

//==============

fruits.sort(); // Organiza em ordem alfabética
fruits.sort().reverse(); // Organiza em ordem alfabética reversa

//==================================================================================================================================================================

// spread operator = (...) permite expandir uma array ou string em elementos separados (desempacota o elemento)

let numbers = [1, 2, 3, 4, 5];
//let maximum = Math.max(numbers); // NaN
let maximum = Math.max(...numbers); // 5
let minimum = Math.min(...numbers); // 1

//==============

let username6 = "JoaoGamer123";
let letters = [...username6];

console.log(letters); // ['J','o','a','o','G','a','m','e','r','1','2','3']

let letters_ = [...username6].join("-");

console.log(letters_); // J-o-a-o-G-a-m-e-r-1-2-3

//==============

let fruits2 = ["apple", "orange", "banana"];
let newFruits = [...fruits2];

console.log(newFruits); //["apple", "orange", "banana"]

let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits2, ...vegetables, "eggs", "milk"];

console.log(foods); // ["apple", "orange", "banana", "carrots", "celery", "potatoes", "eggs", "milk"]

//==================================================================================================================================================================

// rest parameters = (...rest) permite que uma função trabalhe com um número variável de argumentos juntando eles em uma array
//
//                    spread = desempacota uma array em elementos separados (oposto do rest)
//                    rest = junta elementos separados em uma array (oposto do spread)

// Essa função aceita "n" número de argumentos
function openFridge(...foods) {
	// Usando rest e spread
	console.log(...foods);
	//Junta todos os "n" parâmetros passados na função usando o ...rest e depois separa eles novamente usando o ...spread
}

function getFood(...foods) {
	return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "ramen";
const food4 = "cachorro-quente";

openFridge(food1, food2, food3, food4); // pizza hamburger ramen cachorro-quente

const foods1 = getFood(food1, food2, food3, food4); // ['pizza', 'hamburger', 'ramen', 'cachorro-quente']

console.log(foods1); // ['pizza', 'hamburger', 'ramen', 'cachorro-quente']

//==============

function sum(...numbers) {
	let result = 0;
	for (let number of numbers) {
		result += number;
	}
	return result;
}

const total = sum(1, 2, 42, 55, 82);

console.log(`Your total is $${total}`); // Your total is $182

function getAverage(...numbers) {
	let result = 0;
	for (let number of numbers) {
		result += number;
	}
	return result / numbers.length;
}

const total1 = getAverage(75, 100, 85, 90, 50);

console.log(total1); //80

//==============

const fullName1 = combineString(
	"Mr.",
	"John",
	"Gamer",
	"Epic",
	"Master",
	"III"
);

function combineString(...strings) {
	return strings.join(" ");
}

console.log(fullName1); // Mr John Gamer Epic Master III

//==================================================================================================================================================================

// Ver "./dice-roller"

//==================================================================================================================================================================

// Ver "./random-password-generator"

//==================================================================================================================================================================

// callback = uma função que é passada como argumento para outra função

//            	usado para fazer operações assíncronas (operações que demoram um tempo variável para executar), como:
//				1 - Ler um arquivo
//				2 - Requisições de rede
//				3 - Interagindo com o banco de dados

//				"Eai, quando você acabar, faça isso em seguida"

function hello() {
	console.log("Hello!");
}

function goodbye() {
	console.log("Goodbye");
}

hello(); // Executa uma
goodbye(); // Após a outra

// Resultado:
//"Hello!"
//"Goodbye!"

//==============

// Mas e se a função "hello" demorar muito tempo pra processar?

function hello1() {
	// Função para esperar
	setTimeout(function () {
		console.log("Hello!");
	}, 3000);
}

function goodbye1() {
	console.log("Goodbye");
}

hello1();
goodbye1();

// Resultado:
//"Goodbye!"
//...
//...
//...
//...
//"Hello!"

// O Javascript não espera a função "hello1" para executar a função "goodbye1"
// O que poderia causar problemas caso a função "goodbye1" dependesse da "hello1"

//==============

// Solução:
// Usar a função "goodbye" como "callback" na função "hello"

function hello2(callback) {
	setTimeout(function () {
		console.log("Hello!");
	}, 3000);
	callback();
}

function goodbye2() {
	console.log("Goodbye");
}

hello2(goodbye2); // (Não adicionar "()" na função "goodbye2", caso usado irá chamar a função callback imediatamente, sem esperar) ;

// Resultado:
//...
//...
//...
//...
//"Hello!"
//"Goodbye!"

//==============

function sum2(callback, x, y) {
	let result = x + y;
	callback(result);
}

function displayConsole(result) {
	console.log(result);
}

sum(displayConsole, 1, 2); // 3

// Primeiro calcula o resultado, depois que terminado, mostra o resultado no console

//==================================================================================================================================================================

// forEach() = método usado para percorrer os objetos de uma array e aplicar uma função especifica (callback) para cada elemento

//				array.forEach(callback)
//				elemento, index, array são providenciados à função callback

let numbers2 = [1, 2, 3, 4, 5];

function display(element) {
	console.log(element);
}

numbers2.forEach(display);

//Resultado:
//1
//2
//3
//4
//5
//Cada um em uma linha diferente

function double(element, index, array) {
	array[index] = element * 2;
}

numbers2.forEach(double);

//Resultado:
//2
//4
//6
//8
//10

function square(element, index, array) {
	array[index] = Math.pow(element, 2);
}

numbers2.forEach(square);

//==============

let fruits3 = ["apple", "orange", "banana", "coconut"];

function display(element) {
	console.log(element);
}

function upperCase(element, index, array) {
	array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
	array[index] = element.charAt(0).upperCase() + element.slice(1);
}

fruits3.forEach(display);
//apple
//orange
//banana
//coconut

fruits3.forEach(upperCase);
//APPLE
//ORANGE
//BANANA
//COCONUT

fruits3.forEach(capitalize);
//Apple
//Orange
//Banana
//Coconut

//==================================================================================================================================================================

// .map() = aceita um callback e aplica essa função a cada elemento de uma array, depois retorna uma nova array
//			bem similar ao forEach, mas a diferença principal é que o .map() retorna uma NOVA
//			usado caso necessite preservar a array original

// const para demonstrar que não estamos modificando a array original
const numbers3 = [1, 2, 3, 4, 5];

function square(element) {
	return Math.pow(element, 2);
}

// Temos que atribuir o resultado do map a uma nova variável
const squares = numbers3.map(square);

console.log(squares); // [1,4,9,16,25]

function cube(element) {
	return Math.pow(element, 3);
}

const cubes = numbers3.map(cube);

console.log(squares); // [1,8,27,64,125]

//==============

const students2 = ["Spongebob", "Patrick", "Squidward", "Sandy"];

function uppercase(element) {
	return element.toUpperCase();
}

const students2Upper = students2.map(uppercase);

log(students2Upper); // ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"];

//==============

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element) {
	const parts = element.split("-");
	return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates); // ["10/1/2024", "20/2/2025", "30/3/2026"]

//==================================================================================================================================================================

//.filter() = cria uma nova array filtrando elementos

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(element) {
	return element % 2 === 0; // Retorna true or false, pois o método filter() filtra elementos que retornem true, e colocam eles em uma nova array
}

let evenNums = numbers4.filter(isEven); //

console.log(evenNums); //[2, 4, 6, 8, 10]

function isOdd(element) {
	return element % 2 !== 0;
}

let oddNums = numbers4.filter(isOdd); //

console.log(oddNums); //[1,3,5,7,9]

//==============

const ages = [16, 17, 18, 18, 19, 21, 73];

function isAdult(element) {
	return element >= 18;
}

const adults = ages.filter(isAdult);

console.log(adults); // [18, 18, 19, 21, 73]

function isChild(element) {
	return element < 18;
}

const children = ages.filter(isChild);

console.log(children); // [16, 17]

//==============

const words = ["apple", "orange", "banana", "kiwi", "coconut", "pomegranate"];

function getShortWords(element) {
	return element.length <= 6;
}

const shortWords = words.filter(getShortWords);

console.log(shortWords); // ["apple", "orange", "banana", "kiwi"]

function getLongWords(element) {
	return element.length > 6;
}

const longWords = words.filter(getLongWords);

console.log(longWords); // ["coconut", "pomegranate"]

//==================================================================================================================================================================

// .reduce = reduz os elementos de uma array para um único valor

const prices = [5, 22, 15, 17, 50];

function sum(previous, next) {
	return previous + next;
}

const totalPrice = prices.reduce(sum);
console.log(`$${totalPrice}`); // 109

//==============

const numbers9 = [1, 2, 3, 4, 5, 6];
const grades = [75, 50, 90, 80, 65, 95];

function getMax(accumulator, next) {
	return Math.max(accumulator, next);
}

const maximumScore = grades.reduce(maximum);

console.log(maximumScore); // 95

function getMin(accumulator, next) {
	return Math.min(accumulator, next);
}

const minimumScore = grades.reduce(minimum);

console.log(maximumScore); // 50

//==================================================================================================================================================================

// function declaration = define um bloco de código reutilizável que executa uma tarefa específica

function hello() {
	console.log("Hello!");
}

hello();

setTimeout(hello, 3000); // setTimeout = função para adicionar um delay a um callback

// function expressions = uma maneira de definir funções como valores ou variáveis

// São usadas em:
// 1. Callbacks em operações assíncronas
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

const hello1 = function () {
	console.log("Hello!");
};

hello1();

setTimeout(function () {
	// No javascript podemos passar uma função inteira como argumento, ou tratá-la como valor
	console.log("Hello!");
}, 3000);

//==============

//Como fizemos anteriormente, nesse caso usamos uma function declaration, mas também podemos usar uma function expression

const numbers1 = [1, 2, 3, 4, 5, 6];

function square(element) {
	return Math.pow(element, 2);
}

const squares1 = number.map(square);

//==============
//Function expression

const squares2 = number.map(function (element) {
	return Math.pow(element, 2);
});

//Mesmo resultado
//A vantagem é que não precisamos nomear a função, assim deixando de poluir as variáveis globais com nomes de função

const cubes2 = numbers1.map(function (element) {
	return Math.pow(element, 3);
});

const evenNums1 = numbers1.filter(function (element) {
	return element % 2 === 0;
});

const oddNums1 = numbers1.filter(function (element) {
	return element % 2 !== 0;
});

const total2 = numbers1.reduce(function (accumulator, element) {
	return accumulator + element;
});

//==================================================================================================================================================================

// arrow functions = uma maneira resumida de escrever function expressions, útil para funções simples que são utilizadas apenas uma vez
//					(parameters) => some code

// Function declaration
function hello() {
	console.log("hello");
}

hello();

//Function expression

const hello2 = function () {
	console.log("hello");
};

hello2();

//Arrow function

const hello3 = (name, age) => {
	console.log(`Hello ${name}`);
	console.log(`You are ${age} years old`);
};

hello3("Pedrin games", 32);

//==============

// Function declaration
setTimeout(hello, 3000); // Depois de 3 segundos loga a mensagem "hello"

//Function expression
setTimeout(function () {
	console.log("Hello!");
}, 3000);

//Arrow function
setTimeout(() => console.log("Hello!"), 3000);

//==============

const numbers5 = [1, 2, 3, 4, 5, 6];

const squares3 = numbers5.map((element) => Math.pow(element, 2));
const cubes3 = numbers5.map((element) => Math.pow(element, 3));

console.log(squares3); // [1, 4, 9, 16, 25, 36]
console.log(cubes3); // [1, 8, 27, 64, 125, 216]

const evenNums2 = numbers5.filter((element) => element % 2 === 0); // Não precisa usar "return" caso for apenas uma linha de código
const oddNums2 = numbers5.filter((element) => element % 2 !== 0);

const total3 = numbers5.reduce((accumulator, element) => accumulator + element);

console.log(total3); // 21

//==================================================================================================================================================================

// object = Uma coleção de propriedades relacionadas e/ou métodos
// 			Podem representar objetos do mundo real (pessoas, produtos, lugares)
//			object = {
//				key:value,
//				function()
//			}

//Não é obrigatório usar const
const person1 = {
	firstName: "Spongebob", // string
	lastName: "Squarepants", // string
	age: 30, // number
	isEmployed: true, // boolean
	sayHello: function () {
		console.log("Hi! Im am Spongebob!");
	},
	// Ou arrow function:
	// sayHello: () => {
	// 	console.log("Hi! Im am Spongebob!");
	// },
	eat: function () {
		console.log("I'm eating a Krabby Patty!");
	},
};

// Para acessar as propriedades usar "." e o nome da propriedade

console.log(person1.firstName); // "Spongebob"
console.log(person1.lastName); // "Squarepants"
console.log(person1.age); // 30
console.log(person1.isEmployed); // true
person1.sayHello(); // "Hi! Im am Spongebob!"
person1.eat(); // "I'm eating a Krabby Patty!"

const person2 = {
	firstName: "Patrick", // string
	lastName: "Star", // string
	age: 42, // number
	isEmployed: false, // boolean
	sayHello: function () {
		console.log("Hey! I'm Patrick");
	},
	eat: () => {
		console.log("I'm eating roast beef and pizza");
	},
};

console.log(person2.firstName); // "Patrick"
console.log(person2.lastName); // "Star"
console.log(person2.age); // 42
console.log(person2.isEmployed); // false
person2.sayHello(); // "Hey! I'm Patrick"
person2.eat(); // "I'm eating roast beef and pizza"

//==================================================================================================================================================================

// this = referência ao objeto onde THIS é usado (o objeto depende do contexto imediato)
// 		  person.name = this.name

const person3 = {
	name: "Spongebob",
	favoriteFood: "Krabby Patty",
	sayHello: function () {
		// console.log(`Hi! I am ${name}`); // Jeito errado, retorna "Hi! I am "
		console.log(`Hi! I am ${this.name}`); // Não há diferença entre usar person3.name e this.name, só é mais prático
	},
	eat: function () {
		console.log(`${this.name} is eating ${this.favoriteFood}`);
	},
};

person3.sayHello(); // "Hi! I am Spongebob"
person3.eat(); // Spongebob is eating Krabby Patty

const person4 = {
	name: "Patrick",
	favoriteFood: "Pizza",
	sayHello: function () {
		console.log(`Hi! I am ${this.name}`);
	},
	eat: function () {
		console.log(`${this.name} is eating ${this.favoriteFood}`);
	},
};

person4.sayHello(); // "Hi! I am Patrick"
person4.eat(); // Patrick is eating pizza

// Usar this em uma arrow function não funciona

//==============

// Se usarmos this fora de um objeto próprio, ele retorna a própria página, que é o objeto que ele está dentro (window object)

console.log(this);

//==================================================================================================================================================================

// constructor = método especial para definir as propriedades e métodos de objetos
//				Ajuda com a reusabilidade do código, usamos para criar vários objetos com as mesmas propriedades, sem precisar escrever
//				eles manualmente

//		 A primeira letra tem que estar maiúscula
function Car(make, model, year, color) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.drive = function () {
		console.log(`You drive the ${this.model}`);
	};
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make); // Ford
console.log(car1.model); // Mustang
console.log(car1.year); // 2024
console.log(car1.color); // red
car1.drive(); // You drive the Mustang

const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car1.make); // Chevrolet
console.log(car1.model); // Camaro
console.log(car1.year); // 2025
console.log(car1.color); // blue
car1.drive(); // You drive the Camaro

const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car1.make); // Dodge
console.log(car1.model); // Charger
console.log(car1.year); // 2026
console.log(car1.color); // silver
car1.drive(); // You drive the Charger

//==================================================================================================================================================================

// class = (ES6 feature) fornece uma maneira mais estruturada e limpa de trabalhar com objetos comparado com funções constructor
//			tradicional
//			ex. static keyword, encapsulation, inheritance

// ============== Constructor padrão

function Product(name, price) {
	this.name = name;
	this.price = price;

	this.displayProduct = function () {
		console.log(`Product: ${this.name}`);
		console.log(`Price? $${this.price.toFixed(2)}`);
	};

	this.calculateTotal = function (salesTax) {
		return this.price + this.price * salesTax;
	};
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);
const product3 = new Product("Underwear", 100.0);

product1.displayProduct();

const totalPrice1 = product1.calculateTotal(salesTax);

// ============== Class

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	//Dentro de classes, não é necessário usar a keyword "function"
	displayProduct() {
		console.log(`Product: ${this.name} `);
		console.log(`Price: ${this.price.toFixed(2)} `);
	}

	calculateTotal(salesTax) {
		return this.price + this.price * salesTax;
	}
}

const salesTax1 = 0.05;

const product4 = new Product("Shirt", 19.99);
const product5 = new Product("Pants", 22.5);
const product6 = new Product("Underwear", 100.0);

product4.displayProduct();
//Resultado
// Product: Shirt
// Price: 19.99

product5.displayProduct();
//Resultado
// Product: Pants
// Price: 22.50

product5.displayProduct();
//Resultado
// Product: Underwear
// Price: 100.0

const total4 = product4.calculateTotal(salesTax1);

console.log(`Total price (with taxt): $${total4.toFixed(2)}`);
