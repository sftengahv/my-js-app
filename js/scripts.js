
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

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
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

//console.log(divide(4,2))