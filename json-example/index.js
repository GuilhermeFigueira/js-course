const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
	name: "Spongebob",
	age: 30,
	isEmployed: true,
	hobbies: ["Jellyfishing", "Karate", "Cooking"],
};
const people = [
	{ name: "Spongebob", age: 30, isEmployed: true },
	{ name: "Patrick", age: 34, isEmployed: false },
	{ name: "Squidward", age: 50, isEmployed: true },
	{ name: "Sandy", age: 27, isEmployed: false },
];

const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);

console.log(jsonString1);
console.log(jsonString2);
console.log(jsonString3);
console.log(names);
console.log(person);
console.log(people);

//Ver console

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{
	name: "Spongebob",
	age: 30,
	isEmployed: true,
	hobbies: ["Jellyfishing", "Karate", "Cooking"],
}`;
const jsonPeople = `[
	{ name: "Spongebob", age: 30, isEmployed: true },
	{ name: "Patrick", age: 34, isEmployed: false },
	{ name: "Squidward", age: 50, isEmployed: true },
	{ name: "Sandy", age: 27, isEmployed: false },
]`;

const parsedData1 = JSON.parse(jsonNames);
const parsedData2 = JSON.parse(jsonPerson);
const parsedData3 = JSON.parse(jsonPeople);

console.log(jsonNames);
console.log(jsonPerson);
console.log(jsonPeople);
console.log(parsedData1);
console.log(parsedData2);
console.log(parsedData3);

//Para buscar os valores dentro dos arquivos json

fetch("person.json")
	.then((response) => response.json())
	.then((value) => console.log(value))
	.catch((error) => console.error(error));

fetch("person.json")
	.then((response) => response.json())
	.then((values) => values.forEach((value) => console.log(value)))
	.catch((error) => console.error(error));

fetch("person.json")
	.then((response) => response.json())
	.then((value) => console.log(value))
	.catch((error) => console.error(error));
