function buscarPokemon() {
  const nombre = document.getElementById("pokemonInput").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => {
      mostrarPokemon(data);
    })
    .catch((error) => {
      document.getElementById("pokemon").innerHTML =
        "<p>Pokémon no encontrado</p>";
    });
}

function mostrarPokemon(data) {
  document.getElementById("pokemon").innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p><strong>Altura:</strong> ${data.height}</p>
    <p><strong>Peso:</strong> ${data.weight}</p>
  `;
}
