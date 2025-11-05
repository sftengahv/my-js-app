
let pokemonRepository = (function () { //iife

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

    let pokemonlist = []
    
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                // Add details to Pokémon object
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types.map(function (typeInfo) {
                    return typeInfo.type.name;
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }


    function getAll() {
        return pokemonlist;
    }

    function add(pokemon) {
        pokemonlist.push(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        // Create a list item
        let Listpokemon = document.createElement('li');

        let button = document.createElement('button');

        button.innerText = pokemon.name;
        // Button text = Pokemon Name
        button.classList.add('button-class');

        button.addEventListener('click', function () {
            showDetails(pokemon);
        });

    Listpokemon.appendChild(button);

    pokemonList.appendChild(Listpokemon);
}

function showModal(pokemon){
    modalContainer.innerHTML ='';

    let modal = document.createElement('div');
        modal.classList.add('modal');
    
        let closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerText = 'x';
        closeButton.addEventListener('click', hiddenModal);

        let titleElement = document.createElement('h1');
        titleElement.innterText = pokemon.name;

        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.src = pokemon.imageUrl;
        imageElement.alt = '${pokemon.name} image';

        let contentElement = document.createElement('p');
        contentElement.innerText = 'height: ${pokemoon.height} m';

        let weightElement = document.createElement('p');
        weightElement.innerText = 'weight: ${pokemon.weight} kg';

        let typeElement  = document.createElement('p')
        typeElement.innerText = 'types: ${pokemon.types.join(',')}';

}


modal.appendChild(closeButton);
modal.appendChild(titleElement);
modal.appendChild(imageElement);
modal.appendChild(contentElement);
modal.appendChild(weightElement);
modal.appendChild(typeElement);

modalContainer.appendChild(modal);


function hiddenModal(){
    modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown',(e) => {
    if(e.key === 'Escape' && modalContainer.clasList.contains('is-visible')){
        hiddenModal();
    }
});

modalContainer.addEventListener('click',(e)=> {
    let target = e.target;
    if(target === modalContainer){
        hiddenModal();
    }
});
function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        showModal(pokemon)
        console.log(pokemon);

        alert(
            `Name: ${pokemon.name}\nHeight: ${pokemon.height}\nTypes: ${pokemon.types.join(', ')}`
        );
    });
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
};

}) ();// IIfe ends here

//function printArraydetails (){}
pokemonRepository.loadList().then(function () {

    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
        console.log(pokemon) 

    });
});

//calling printarraydetails function twice
//printArrayDetails();
//printArrayDetails();


//let pokemon = { name: "eve", size: 0.3 };

//if (pokemon.size > 1.5) //
//console.log("this is a big pokemon")
//} else if (pokemon.size > 0.5 && pokemon.size < 1.5) {
// console.log("This is an average pokemon");
//} else {
// console.log("this is a small pokemon")
//}

//function div(dividend, divisor){
//if(divisor ===0){
// return "Youre\re trying to divide by zero."
// } else{
// let result = divedend / divisor;
// return result;
//}
//}
