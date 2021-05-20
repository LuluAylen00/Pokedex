const pokedex = require("./pokedex.js");

function findByName(name){
    let object = null;
    for (let i = 0; i < pokedex.length; i++) {
        if(pokedex[i].name == process.argv[2]){
        object = pokedex[i];

        }    
    }
    return object
}

module.exports = findByName;