const index = require("./resources/findByIndex.js");
const name = require("./resources/findByName.js");
const type = require("./resources/findByType.js");
const evolve = require("./resources/evolve.js");


if (process.argv[2] == undefined)
{
    console.log();
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log("|                                    ¡Bienvenido/a a la Pokedex!                                    |");
    console.log("|       Usando el mismo comando (pero separando con un espacio luego del nombre del archivo):       |");
    console.log("|        Ingresa el nombre de un Pokemon o su número en la Pokedex para ver su ficha reducida       |");
    console.log("|  También puedes escribir un Tipo (en inglés) para ver la lista de Pokemon que comparten ese tipo  |");
    console.log("|           E incluso, puedes seguir el nombre o numero de cualquier pokemon con 'evolve'           |");
    console.log("|  (separado con espacio y sin comillas) para ver sus datos evolutivos (ej: node app.js 001 evolve) |");
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log();
}
else
{
    if(process.argv[3] != "evolve" && process.argv[3] != null)
    {
        console.log();
        console.log("¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?");
        console.log("¿?                 Has ingresado una función inválida en el segundo campo.                ¿?");
        console.log("¿?                  Por el momento, la única entrada que puedes usar es:                  ¿?");
        console.log("¿?   evolve: Te muestra los datos de evolución del pokemon insertado en el primer campo   ¿?");
        console.log("¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?");
        console.log();
    }

    else if(name(process.argv[2]) != null && evolve(process.argv[3]) == null)
    {
        console.log();
        console.log("===================================================");
        console.log("||   Aquí están los datos del Pokemón buscado:   ||");
        console.log(name(process.argv[2]));
        console.log("===================================================");
        console.log();
    }
    else if(index(process.argv[2]) != null && evolve(process.argv[3]) == null) 
    {
        console.log();
        console.log("===================================================");
        console.log("||   Aquí están los datos del Pokemón buscado:   ||");
        console.log(index(process.argv[2]))
        console.log("===================================================");
        console.log();
    }
    else if(type(process.argv[2]) != [] && type(process.argv[2]).length < 50 && type(process.argv[2]).length > 0 && evolve(process.argv[3]) == null)
    {
        console.log();
        console.log("===================================================");
        console.log("||   Aquí está la lista de pokemon solicitada:   ||");
        console.log(type(process.argv[2]))
        console.log("===================================================");
        console.log();
    }
    else if(evolve(process.argv[3]) != null)
    {
        console.log();
        console.log("======================================================");
        console.log("((" + evolve(process.argv[3]) + "))")
        console.log("======================================================");
        console.log();
    }
    else
    {
        console.log();
        console.log("¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?");
        console.log("¿?                         Has ingresado un valor inválido.                         ¿?");
        console.log("¿?                   Asegurate de escribir un número entre 1 y 151                  ¿?");
        console.log("¿?  O el nombre del Pokemón o Tipo deseado, correctamente y empezado con mayúscula  ¿?");
        console.log("¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?");
        console.log();
    }
}