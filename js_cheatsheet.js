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
