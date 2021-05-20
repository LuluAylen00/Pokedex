const pokedex = require("./pokedex.js");

function findByType(type){
    let object = [];
    for (let i = 0; i < pokedex.length; i++) {
        if(pokedex[i].primaryType == process.argv[2] || pokedex[i].secondaryType == process.argv[2]){
        object.push(pokedex[i].name);
        }  
        else if(pokedex[i].primaryType != process.argv[2] && pokedex[i].secondaryType != process.argv[2]){
            delete object;
        }  
    }
    return object
}

module.exports = findByType;
