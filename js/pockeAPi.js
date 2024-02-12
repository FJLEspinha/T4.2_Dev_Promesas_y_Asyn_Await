const listaPokemon = document.querySelector("#listaPokemon");
const buttonsHeader = document.querySelectorAll(".btn-header");
const url = "https://pokeapi.co/api/v2/pokemon/";


// original max=151
const max = 300;

function mostrarPokemon(data) {

    let tipos = data.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p> `);
    tipos = tipos.join('');

    // Poner 0's delante de la  id
    let dataId = data.id.toString();
    if (dataId.length === 1) {
        dataId = '00' + dataId;
    } else if (dataId.length === 2) {
        dataId = '0' + dataId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <p class="pokemon-id-back">#${dataId}</p>
   <div class="pokemon-imagen">
       <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}" title="${data.name}">
   </div>
   <div class="pokemon-info">
       <div class="nombre-contenedor">
           <p class="pokemon-id">#${dataId}</p>
           <h2 class="pokemon-nombre">${data.name}</h2>
       </div>
       <div class="pokemon-tipos">
           ${tipos}
       </div>
       <div class="pokemon-stats">
           <p class="stat">${data.height}m</p>
           <p class="stat">${data.weight}g</p>
       </div>                 
    </div>
    `;
    listaPokemon.append(div);

};

buttonsHeader.forEach(button => button.addEventListener("click", (event) => {
    const buttonId = event.currentTarget.id;

    listaPokemon.innerHTML = '';

    for (let i = 1; i <= max; i++) {
        fetch(url + i)
            .then((response) => response.json())
            .then(data => {

                if (buttonId === 'ver-todos')
                    mostrarPokemon(data);

                else {
                    const types = data.types.map(type => type.type.name)
                    if (types.some(type => type.includes(buttonId)))
                        mostrarPokemon(data);
                }
            });
    };
}));

