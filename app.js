const index = require("./resources/findByIndex.js");
const name = require("./resources/findByName.js");
const type = require("./resources/findByType.js");
const evolve = require("./resources/evolve.js");


if (process.argv[2] == undefined)
{
    console.log("Bienvenido/a a la Pokedex!");
    console.log("Ingresa el nombre de un Pokemon o su número en la Pokedex para ver su ficha reducida");
    console.log("O puedes escribir un Tipo para ver la lista de Pokemon que comparte ese tipo")
}
else
{
    if(name(process.argv[2]) != null && evolve(process.argv[3]) == null)
    {
        console.log("Aquí están los datos del Pokemón buscado:");
        console.log(name(process.argv[2]))
    }
    else if(index(process.argv[2]) != null && evolve(process.argv[3]) == null) 
    {
        console.log("Aquí están los datos del Pokemón buscado:");
        console.log(index(process.argv[2]))
    }
    else if(type(process.argv[2]) != [] && type(process.argv[2]).length < 50 && type(process.argv[2]).length > 0 && evolve(process.argv[3]) == null)
    {
        console.log("Aquí está la lista de pokemon solicitada:");
        console.log(type(process.argv[2]))
    }
    else if(evolve(process.argv[3]) != null)
    {
        console.log(evolve(process.argv[3]))
    }
    else
    {
        console.log("Has ingresado un valor inválido.");
        console.log("Asegurate de escribir un número entre 1 y 151");
        console.log("O el nombre del Pokemón o Tipo deseado, correctamente y empezado con mayúscula");
    }
}