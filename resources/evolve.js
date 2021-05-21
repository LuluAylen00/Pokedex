const pokedex = require("./pokedex.js");

function evolve(name){
    let evolveResult = null;
    for (let i = 0; i < pokedex.length; i++) 
    {
        if(process.argv[3] == "evolve" && pokedex[i].hasEvolve == true && pokedex[i].evolveMethod == "Level")
        {
            evolveResult = "This pokemon evolves to "+ pokedex[i].evolve+", at level "+pokedex[i].evolveLevel+".";
        }    
        else if(process.argv[3] == "evolve" && pokedex[i].hasEvolve == true && pokedex[i].evolveMethod == "Stone")
        {
            evolveResult = "This pokemon evolves to "+ pokedex[i].evolve+", when exposed to a "+pokedex[i].evolveStone+".";
        }
        else if(process.argv[3] == "evolve" && pokedex[i].hasEvolve == true && pokedex[i].evolveMethod == "Trade")
        {
            evolveResult = "This pokemon evolves to "+ pokedex[i].evolve+" when it's traded.";
        }
        else if(process.argv[3] == "evolve" && pokedex[i].hasEvolve == false)
        {
            evolveResult = "This pokemon can't evolve."
        }
        /*else if(process.argv[3] == "evolve" && pokedex[i].hasEvolve == legendary)
        {
            evolveResult = "This pokemon can't evolve because it's a Legendary Pokemon"
        }*/
        else if(process.argv[3] == "evolve" && name(process.argv[2]) == null)
        {
            evolveResult = "You have entered an invalid pokemon name. Try writing the pokemon name again."
        }
    }
    return evolveResult
}

module.exports = evolve;