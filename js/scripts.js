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
];

for (let i = 0; i <pokemonlist.length; i++){
    let pokemon = pokemonlist[i];
    let output = pokemon.name + ' (height; ' + pokemon.height +')';

    if (pokemon.height > 6) {
        output = output + ' - wow that\'s big'
    }
    document.write(output + '<br>') //adds a line break so that each pokemon has their own line 
}


//let pokemon = { name: "eve", size: 0.3 };

//if (pokemon.size > 1.5) //
    //console.log("this is a big pokemon")
//} else if (pokemon.size > 0.5 && pokemon.size < 1.5) {
   // console.log("This is an average pokemon");
//} else {
   // console.log("this is a small pokemon")
//}