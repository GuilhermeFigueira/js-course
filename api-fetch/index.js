// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error("Could not fetch resource");
// 		}
// 		return response.json();
// 	})
// 	.then((data) => console.log(data.id))
// 	.catch((err) => console.error(err));

// Podemos usar funções assíncronas também

async function fetchData() {
	try {
		const pokemonName = document
			.getElementById("pokemonName")
			.value.toLowerCase();

		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		if (!response.ok) {
			throw new Error("Could not fetch resource");
		}

		//Tudo que retorna uma promise precisa ser usado com await
		const data = await response.json();

		const pokemonSprite = data.sprites.front_default;

		const imgElement = document.getElementById("pkmnSprite");

		imgElement.src = pokemonSprite;
		imgElement.style.display = "block";
	} catch (err) {}
}

// Só um teste
async function autoData(e) {
	try {
		const pokemonName = e.target.value.toLowerCase();
		console.log(pokemonName);
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		if (!response.ok) {
			throw new Error("Could not fetch resource");
		}

		//Tudo que retorna uma promise precisa ser usado com await
		const data = await response.json();

		const pokemonSprite = data.sprites.front_default;

		const imgElement = document.getElementById("pkmnSprite");

		imgElement.src = pokemonSprite;
		imgElement.style.display = "block";
	} catch (err) {}
}
