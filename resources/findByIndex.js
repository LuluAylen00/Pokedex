const pokedex = require("./pokedex.js");

function findByIndex(pokeindex) {
    let object = null;
    if(process.argv[2] >= 1 && process.argv[2] <= 151){
        const number = process.argv[2] - 1;
        const value = pokedex[number];
        object = value}
    return object;
}

module.exports = findByIndex;