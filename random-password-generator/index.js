const passwordLength = 12;
const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generatedPassword = document.getElementById("generatedPassword");
const generateButton = document.getElementById("generateButton");
function generatePassword(
	length,
	includeLowerCase,
	includeUpperCase,
	includeNumbers,
	includeSymbols
) {
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_=+:;<=>?";

	let allowedChars = "";
	let password = "";

	allowedChars += includeLowerCase ? lowercaseChars : "";
	allowedChars += includeUpperCase ? uppercaseChars : "";
	allowedChars += includeNumbers ? numberChars : "";
	allowedChars += includeSymbols ? symbolChars : "";

	if (length <= 0) {
		return `(password length must be at least 1)`;
	}
	if (allowedChars.length === 0) {
		return `(at least 1 set of character needs to be selected)`;
	}

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allowedChars.length);
		password += allowedChars[randomIndex];
	}
	return password;
}

const password = generatePassword(
	passwordLength,
	includeLowerCase,
	includeUpperCase,
	includeNumbers,
	includeSymbols
);

generateButton.onclick = () => {
	const password = generatePassword(
		passwordLength,
		includeLowerCase.checked,
		includeUpperCase.checked,
		includeNumbers.checked,
		includeSymbols.checked
	);
	generatedPassword.textContent = password;
	navigator.clipboard.writeText(password);
};
