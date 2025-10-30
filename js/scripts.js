
let pokemonRepository = (function () { //iife

    let pokemonlist = [
        {
            name: 'Bulbasaur',
            height: 7,
            types: ['grass', 'poision']
        },
        {
            name: 'Charmander',
            height: 6,
            types: ['fire']
        },
        {
            name: 'Squirtle',
            height: 5,
            types: ['water']
        }
    ]

    function getAll() {
        return pokemonlist;
    }

    function add(pokemon) {
        pokemonlist.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }
})()

//function printArraydetails (){}
pokemonRepository.getAll().forEach(function(pokemon){

    let pokemonList= document.querySelector('.pokemon-list');
    
    // Create a list item
    let Listpokemon = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name; // Button text = Pokemon Name
    button.classList.add('button-class');
    Listpokemon.appendChild(button);
    pokemonList.appendChild(Listpokemon); 

    console.log(pokemon)
//for (let i = 0; i < pokemonlist.length; i++) {
    //let pokemon = pokemonlist[i];
    let output = pokemon.name + ' (height; ' + pokemon.height + ')';

    if (pokemon.height > 6) {
        output = output + ' - wow that\'s big'
    }
    document.write(output + '<br>') //adds a line break so that each pokemon has their own line 
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

//comsole.log(divide(4,2))