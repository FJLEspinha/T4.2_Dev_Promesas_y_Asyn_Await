const listaCharacter = document.querySelector("#listaCharacter");
const buttonsHeader = document.querySelectorAll(".btn-header");
const url = "https://rickandmortyapi.com/api/character/";

//  La api consta de 20 characters
const max = 19;


async function data() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const datas = data.results.map(item => item);
        return datas;
    } catch (error) {
        console.log(error);
    }
}
const givingData = async (i) => {

    try {
        const response = await fetch(url);
        const data = await response.json();
        const div = document.createElement("div");
        div.classList.add("character");
        div.innerHTML =
            ` <p class="character-id-back">${data.results[i].id}</p>
       <div class="character-imagen">
         <img class="photo" src="${data.results[i].image}" alt="${data.results[i].name}" title="${data.results[i].name}">
       </div>
       <div class="character-info">
            <div class="nombre-contenedor">
                <p class="character-id">#${data.results[i].id}</p>
                <h2 class="character-nombre">${data.results[i].name}</h2>
            </div>
            
            <div class="character-data">
                <p class="data"><strong>Estado:</strong><br>${data.results[i].status}</p>
                <p class="data"><strong>Especie:</strong><br>${data.results[i].species}</p>
                <p class="data"><strong>Origen:</strong> <br>${data.results[i].origin.name}</p>
            </div>
        </div>
        `;

        listaCharacter.append(div);

    } catch (error) {
        console.log(error);
    }
};

buttonsHeader.forEach(button => button.addEventListener("click", (event) => {

    const buttonId = event.currentTarget.id;
    listaCharacter.innerHTML = '';

    if (buttonId === "ver-todos") {
        for (let i = 0; i <= max; i++) {
            givingData(i);
        };
    };
    if (buttonId === "human") {
        data().then((result) => {
            const humanResults = result.filter(item => item.species === 'Human');
            humanResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });

    };

    if (buttonId === "alien") {
        data().then((result) => {
            const alienResults = result.filter(item => item.species === 'Alien');
            alienResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "earth") {
        data().then((result) => {
            const earthResults = result.filter(item => item.origin.name.includes('Earth'));
            earthResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "otro") {
        data().then((result) => {
            const otroResults = result.filter(item => item.origin.name === 'Abadango');
            otroResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "unknow") {
        data().then((result) => {
            const unknownResults = result.filter(item => item.origin.name === 'unknown');
            unknownResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "male") {
        data().then((result) => {
            const maleResults = result.filter(item => item.gender === 'Male');
            maleResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "female") {
        data().then((result) => {
            const femaleResults = result.filter(item => item.gender === 'Female');
            femaleResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "vivo") {
        data().then((result) => {
            const aliveResults = result.filter(item => item.status === 'Alive');
            aliveResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };

    if (buttonId === "muerto") {
        data().then((result) => {
            const deadResults = result.filter(item => item.status === 'Dead');
            deadResults.forEach(element => {
                i = element.id;
                givingData(i - 1);
            });
        });
    };


}));