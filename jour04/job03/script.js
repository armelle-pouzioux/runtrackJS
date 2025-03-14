//récupérer les datas du fichier avec fetch
async function fetchPokemonData() {
    const response = await fetch('pokemon.json');
    const data = await response.json();
    return data;
}
//filtrer les données 
function filterPokemon(pokemonList, id, nom, type) {
    return pokemonList.filter(pokemon => {
        const matchesId = id === "" || pokemon.id.toString() === id;
        const matchesNom = nom === "" || pokemon.nom.toLowerCase().includes(nom.toLowerCase());
        const matchesType = type === "" || pokemon.type === type;
        return matchesId && matchesNom && matchesType;
    });
}

//afficher les resultats
function displayResults(filteredPokemon) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Vide les résultats précédents

    filteredPokemon.forEach(pokemon => {
        const pokemonElement = document.createElement('div');
        pokemonElement.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.nom}, Type: ${pokemon.type}`;
        resultsDiv.appendChild(pokemonElement);
    });
}

//gérer le bouton filter
document.getElementById('filtrer').addEventListener('click', async () => {
    // Récupère les valeurs du formulaire
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const type = document.getElementById('type').value;

    // Récupère les données Pokémon
    const pokemonList = await fetchPokemonData();

    // Filtre les données
    const filteredPokemon = filterPokemon(pokemonList, id, nom, type);

    // Affiche les résultats
    displayResults(filteredPokemon);
});