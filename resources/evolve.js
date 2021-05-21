const pokedex = require("./pokedex.js"); // Necessary file for all the code, it calls the Pokedex file.
const name = require("./findByName.js"); // Its only for the error message

function evolve(pokemon){
    let evolveResult = null; // Initial variable, who will charge the return of this function and will be exported.

    for (let i = 0; i < pokedex.length; i++) 
    {
    let firstInput = process.argv[2];       // First manual entry
    let secondInput = process.argv[3];      // Second manual entry
    let pokeName = pokedex[i].name;         // Each pokemon name (Changes while (for) runs)
    let pokeIndex = pokedex[i].pokeindex;   // Each pokemon index (Changes while (for) runs)
    let inpokedex = process.argv[2] - 1;    // If firstInput is meaning the pokemon index, this (if) let the code continues with its pokedex number
    let hasEvolve = pokedex[i].hasEvolve;   // Each pokemon hasEvolve value (Changes while (for) runs)
    let method = pokedex[i].evolveMethod;
    
    if(firstInput > 0 && firstInput <= 151)             //$$
    {                                                   //$$
        var manualIndex = pokedex[inpokedex].pokeindex  //$$  Find if firstInput is meaning the pokedex index of the pokemon instead of its name
    }                                                   //$$
    else{manualIndex = 0};                              //$$

        if((pokeName == firstInput || (manualIndex == pokeIndex)) && hasEvolve == false)
        {
            evolveResult = "This pokemon can't evolve."
            return evolveResult
        }
        else if((pokeName == firstInput || (manualIndex == pokeIndex)) && secondInput == "evolve" && hasEvolve == true && method == "Level")
        {
            evolveResult = "This pokemon evolves to "+ pokedex[i].evolve +", at level "+ pokedex[i].evolveLevel+".";
            return evolveResult
        }    
        else if((pokeName == firstInput || (manualIndex == pokeIndex)) && secondInput == "evolve" && hasEvolve == true && method == "Stone")
        {
            evolveResult = "This pokemon evolves to "+ pokedex[i].evolve+", when exposed to a "+pokedex[i].evolveStone+" Stone.";
            return evolveResult
        }
        else if((pokeName == firstInput || (manualIndex == pokeIndex)) && secondInput == "evolve" && hasEvolve == true && method == "Trade")
        {
            evolveResult = "This pokemon evolves to "+ pokedex[i].evolve+" when it's traded.";
            return evolveResult
        }
        
        else if((pokeName == firstInput || (manualIndex == pokeIndex)) && secondInput == "evolve" && hasEvolve == "Legendary")
        {
            evolveResult = "This pokemon can't evolve because it's a Legendary Pokemon"
        }
        else if((pokeName == firstInput || (manualIndex == pokeIndex)) && secondInput == "evolve" && name(process.argv[2]) == null)
        {
            evolveResult = "You have entered an invalid pokemon name. Try writing the pokemon name again.";
            return evolveResult
        }
    }
    return evolveResult
}

module.exports = evolve;