let galeryPokemon = document.querySelector(".galery__pokemon");
let btnFilter = document.getElementById("filter");

const fetchApi = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const getPokemon = async () => {
  let id = document.getElementById("id").value.trim();
  let nom = document.getElementById("nom").value.trim();
  let type = document.getElementById("type").value.trim();
  const data = await fetchApi("./assets/files/pokemon.json");
  console.log({ id, nom, type });
  let filteredPokemon = data.filter((pokemon) => {
    const matchesId = !id || pokemon.id.toString() === id;
    const matchesName =
      !nom ||
      Object.values(pokemon.name)
        .map((el) => el.toLowerCase())
        .some((el) => el.startsWith(nom.toLowerCase()));
    const matchesType = !type || pokemon.type.includes(type);
    return matchesId && matchesName && matchesType;
  });

  return filteredPokemon;
};

const displayPokemon = (pokemon) => {
  const div = document.createElement("div");
  div.className = "card__galery";
  div.innerHTML = `
    <div class="card__type">
        <p>Type:${pokemon.type}</p>
    </div>
    <div class="card__name">
        <p>English: ${pokemon.name.english}</p>
        <p>japanese: ${pokemon.name.japanese}</p>
        <p>chinese: ${pokemon.name.chinese}</p>
        <p>french: ${pokemon.name.french}</p>
    </div>
    <div class="card__base">
        <p>HP: ${pokemon.base.HP}</p>
        <p>Attack: ${pokemon.base.Attack}</p>
        <p>Defense: ${pokemon.base.Defense}</p>
        <p>Sp. Attack: ${pokemon.base["Sp. Attack"]}</p>
        <p>Sp. Defense: ${pokemon.base["Sp. Defense"]}</p>
        <p>Speed: ${pokemon.base.Speed}</p>
    </div>
    `;
  galeryPokemon.appendChild(div);
};

btnFilter.addEventListener("click", async (event) => {
  event.preventDefault();
  galeryPokemon.innerHTML = "";
  const pokemons = await getPokemon();
  for (const pokemon of pokemons) {
    displayPokemon(pokemon);
  }
});
