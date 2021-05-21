const pokedex = [];

let n001 = {
    pokeindex: "001",
    name: "Bulbasaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Ivysaur"
}

let n002 = {
    pokeindex: "002",
    name: "Ivysaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 32,
    evolve: "Venusaur"
}

let n003 = {
    pokeindex: "003",
    name: "Venusaur",
    primaryType: "Grass",
    secondaryType: "Poison",
    hasEvolve: false
}

let n004 = {
    pokeindex: "004",
    name: "Charmander",
    primaryType: "Fire",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Charmeleon"
}

let n005 = {
    pokeindex: "005",
    name: "Charmeleon",
    primaryType: "Fire",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 32,
    evolve: "Charizard"
}

let n006 = {
    pokeindex: "006",
    name: "Charizard",
    primaryType: "Fire",
    secondaryType: "Flying",
    hasEvolve: false
}

let n007 = {
    pokeindex: "007",
    name: "Squirtle",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Wartotle"
}

let n008 = {
    pokeindex: "008",
    name: "Wartotle",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Blastoise"
}

let n009 = {
    pokeindex: "009",
    name: "Blastoise",
    primaryType: "Water",
    hasEvolve: false
}

let n010 = {
    pokeindex: "010",
    name: "Caterpie",
    primaryType: "Bug",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 7,
    evolve: "Metapod"
}

let n011 = {
    pokeindex: "011",
    name: "Metapod",
    primaryType: "Bug",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 10,
    evolve: "Butterfree"
}

let n012 = {
    pokeindex: "012",
    name: "Butterfree",
    primaryType: "Bug",
    secondaryType: "Flying",
    hasEvolve: false
}

let n013 = {
    pokeindex: "013",
    name: "Weedle",
    primaryType: "Bug",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 7,
    evolve: "Kakuna"
}

let n014 = {
    pokeindex: "014",
    name: "Kakuna",
    primaryType: "Bug",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 10,
    evolve: "Beedrill"
}

let n015 = {
    pokeindex: "015",
    name: "Beedrill",
    primaryType: "Bug",
    secondaryType: "Poison",
    hasEvolve: false
}

let n016 = {
    pokeindex: "016",
    name: "Pidgey",
    primaryType: "Normal",
    secondaryType: "Flying",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 18,
    evolve: "Pidgeotto"
}

let n017 = {
    pokeindex: "017",
    name: "Pidgeotto",
    primaryType: "Normal",
    secondaryType: "Flying",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 36,
    evolve: "Pidgeot"
}

let n018 = {
    pokeindex: "018",
    name: "Pidgeot",
    primaryType: "Normal",
    secondaryType: "Flying",
    hasEvolve: false
}

let n019 = {
    pokeindex: "019",
    name: "Rattata",
    primaryType: "Normal",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 20,
    evolve: "Raticate"
}

let n020 = {
    pokeindex: "020",
    name: "Raticate",
    primaryType: "Normal",
    hasEvolve: false
}

let n021 = {
    pokeindex: "021",
    name: "Spearow",
    primaryType: "Normal",
    secondaryType: "Flying",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 20,
    evolve: "Fearow"
}

let n022 = {
    pokeindex: "022",
    name: "Fearow",
    primaryType: "Normal",
    secondaryType: "Flying",
    hasEvolve: false
}

let n023 = {
    pokeindex: "023",
    name: "Ekans",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 22,
    evolve: "Arbok"
}

let n024 = {
    pokeindex: "024",
    name: "Arbok",
    primaryType: "Poison",
    hasEvolve: false
}

let n025 = {
    pokeindex: "025",
    name: "Pikachu",
    primaryType: "Electric",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Thunder",
    evolve: "Raichu"
}

let n026 = {
    pokeindex: "026",
    name: "Raichu",
    primaryType: "Electric",
    hasEvolve: false
}

let n027 = {
    pokeindex: "027",
    name: "Sandshrew",
    primaryType: "Ground",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 22,
    evolve: "Sandslash"
}

let n028 = {
    pokeindex: "028",
    name: "Sandslash",
    primaryType: "Ground",
    hasEvolve: false
}

let n029 = {
    pokeindex: "029",
    name: "Nidoran(F)",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Nidorina"
}

let n030 = {
    pokeindex: "030",
    name: "Nidorina",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Moon",
    evolve: "Nidoqueen"
}

let n031 = {
    pokeindex: "031",
    name: "Nidoqueen",
    primaryType: "Poison",
    secondaryType: "Ground",
    hasEvolve: false
}

let n032 = {
    pokeindex: "032",
    name: "Nidoran(M)",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Nidorino"
}

let n033 = {
    pokeindex: "033",
    name: "Nidorino",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Moon",
    evolve: "Nidoking"
}

let n034 = {
    pokeindex: "034",
    name: "Nidoking",
    primaryType: "Poison",
    secondaryType: "Ground",
    hasEvolve: false
}

let n035 = {
    pokeindex: "035",
    name: "Clefairy",
    primaryType: "Fairy",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Moon",
    evolve: "Clefable"
}

let n036 = {
    pokeindex: "036",
    name: "Clefable",
    primaryType: "Fairy",
    hasEvolve: false
}

let n037 = {
    pokeindex: "037",
    name: "Vulpix",
    primaryType: "Fire",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Fire",
    evolve: "Ninetales"
}

let n038 = {
    pokeindex: "038",
    name: "Ninetales",
    primaryType: "Fire",
    hasEvolve: false
}

let n039 = {
    pokeindex: "039",
    name: "Jigglypuff",
    primaryType: "Normal",
    secondaryType: "Fairy",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Moon",
    evolve: "Wigglytuff"
}

let n040 = {
    pokeindex: "040",
    name: "Wigglytuff",
    primaryType: "Normal",
    secondaryType: "Fairy",
    hasEvolve: false
}

let n041 = {
    pokeindex: "041",
    name: "Zubat",
    primaryType: "Poison",
    secondaryType: "Flying",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 22,
    evolve: "Golbat"
}

let n042 = {
    pokeindex: "042",
    name: "Golbat",
    primaryType: "Poison",
    secondaryType: "Flying",
    hasEvolve: false
}

let n043 = {
    pokeindex: "043",
    name: "Oddish",
    primaryType: "Grass",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 21,
    evolve: "Gloom"
}

let n044 = {
    pokeindex: "044",
    name: "Gloom",
    primaryType: "Grass",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Leaf",
    evolve: "Vileplume"
}

let n045 = {
    pokeindex: "045",
    name: "Vileplume",
    primaryType: "Grass",
    secondaryType: "Poison",
    hasEvolve: false
}

let n046 = {
    pokeindex: "046",
    name: "Paras",
    primaryType: "Bug",
    secondaryType: "Grass",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 24,
    evolve: "Parasect"
}

let n047 = {
    pokeindex: "047",
    name: "Parasect",
    primaryType: "Bug",
    secondaryType: "Grass",
    hasEvolve: false
}

let n048 = {
    pokeindex: "048",
    name: "Venonat",
    primaryType: "Bug",
    secondaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 31,
    evolve: "Venomoth"
}

let n049 = {
    pokeindex: "049",
    name: "Venomoth",
    primaryType: "Bug",
    secondaryType: "Poison",
    hasEvolve: false
}

let n050 = {
    pokeindex: "050",
    name: "Diglett",
    primaryType: "Ground",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 26,
    evolve: "Dugtrio"
}

let n051 = {
    pokeindex: "051",
    name: "Dugtrio",
    primaryType: "Ground",
    hasEvolve: false
}

let n052 = {
    pokeindex: "052",
    name: "Meowth",
    primaryType: "Normal",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 28,
    evolve: "Persian"
}

let n053 = {
    pokeindex: "053",
    name: "Persian",
    primaryType: "Normal",
    hasEvolve: false
}

let n054 = {
    pokeindex: "054",
    name: "Psyduck",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 33,
    evolve: "Golduck"
}

let n055 = {
    pokeindex: "055",
    name: "Golduck",
    primaryType: "Water",
    hasEvolve: false
}

let n056 = {
    pokeindex: "056",
    name: "Mankey",
    primaryType: "Fighting",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 28,
    evolve: "Primeape"
}

let n057 = {
    pokeindex: "057",
    name: "Primeape",
    primaryType: "Fighting",
    hasEvolve: false
}

let n058 = {
    pokeindex: "058",
    name: "Growlithe",
    primaryType: "Fire",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Fire",
    evolve: "Arcanine"
}

let n059 = {
    pokeindex: "059",
    name: "Arcanine",
    primaryType: "Fire",
    hasEvolve: false
}

let n060 = {
    pokeindex: "060",
    name: "Poliwag",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 25,
    evolve: "Poliwhirl"
}

let n061 = {
    pokeindex: "061",
    name: "Poliwhirl",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Water",
    evolve: "Poliwrath"
}

let n062 = {
    pokeindex: "062",
    name: "Poliwrath",
    primaryType: "Water",
    secondaryType: "Fighting"  ,
    hasEvolve: false
}

let n063 = {
    pokeindex: "063",
    name: "Abra",
    primaryType: "Psychic",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 16,
    evolve: "Kadabra"
}

let n064 = {
    pokeindex: "064",
    name: "Kadabra",
    primaryType: "Psychic",
    hasEvolve: true,
    evolveMethod: "Trade",
    evolve: "Alakazam"
}

let n065 = {
    pokeindex: "065",
    name: "Alakazam",
    primaryType: "Psychic",
    hasEvolve: false
}

let n066 = {
    pokeindex: "066",
    name: "Machop",
    primaryType: "Fighting",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 28,
    evolve: "Machoke"
}

let n067 = {
    pokeindex: "067",
    name: "Machoke",
    primaryType: "Fighting",
    hasEvolve: true,
    evolveMethod: "Trade",
    evolve: "Machamp"
}

let n068 = {
    pokeindex: "068",
    name: "Machamp",
    primaryType: "Fighting",
    hasEvolve: false
}

let n069 = {
    pokeindex: "069",
    name: "Bellsprout",
    primaryType: "Grass",
    secondaryType: "Poison"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 21,
    evolve: "Weepinbell"
}

let n070 = {
    pokeindex: "070",
    name: "Weepinbell",
    primaryType: "Grass",
    secondaryType: "Poison"  ,
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Leaf",
    evolve: "Victreebel"
}

let n071 = {
    pokeindex: "071",
    name: "Victreebel",
    primaryType: "Grass",
    secondaryType: "Poison"  ,
    hasEvolve: false
}

let n072 = {
    pokeindex: "072",
    name: "Tentacool",
    primaryType: "Water",
    secondaryType: "Poison"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 30,
    evolve: "Tentacruel"
}

let n073 = {
    pokeindex: "073",
    name: "Tentacruel",
    primaryType: "Water",
    secondaryType: "Poison"  ,
    hasEvolve: false
}

let n074 = {
    pokeindex: "074",
    name: "Geodude",
    primaryType: "Rock",
    secondaryType: "Ground"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 25,
    evolve: "Graveler"
}

let n075 = {
    pokeindex: "075",
    name: "Graveler",
    primaryType: "Rock",
    secondaryType: "Ground"  ,
    hasEvolve: true,
    evolveMethod: "Trade",
    evolve: "Golem"
}

let n076 = {
    pokeindex: "076",
    name: "Golem",
    primaryType: "Rock",
    secondaryType: "Ground"  ,
    hasEvolve: false
}

let n077 = {
    pokeindex: "077",
    name: "Ponyta",
    primaryType: "Fire",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 40,
    evolve: "Rapidash"
}

let n078 = {
    pokeindex: "078",
    name: "Rapidash",
    primaryType: "Fire",
    hasEvolve: false
}

let n079 = {
    pokeindex: "079",
    name: "Slowpoke",
    primaryType: "Water",
    secondaryType: "Psychic"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 37,
    evolve: "Slowbro"
}

let n080 = {
    pokeindex: "080",
    name: "Slowbro",
    primaryType: "Water",
    secondaryType: "Psychic"  ,
    hasEvolve: false
}

let n081 = {
    pokeindex: "081",
    name: "Magnemite",
    primaryType: "Electric",
    secondaryType: "Steel"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 30,
    evolve: "Magneton"
}

let n082 = {
    pokeindex: "082",
    name: "Magneton",
    primaryType: "Electric",
    secondaryType: "Steel"  ,
    hasEvolve: false
}

let n083 = {
    pokeindex: "083",
    name: "Farfetch'd",
    primaryType: "Normal",
    secondaryType: "Flying"  ,
    hasEvolve: false
}

let n084 = {
    pokeindex: "084",
    name: "Doduo",
    primaryType: "Normal",
    secondaryType: "Flying"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 31,
    evolve: "Dodrio"
}

let n085 = {
    pokeindex: "085",
    name: "Dodrio",
    primaryType: "Normal",
    secondaryType: "Flying"  ,
    hasEvolve: false
}

let n086 = {
    pokeindex: "086",
    name: "Seel",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 34,
    evolve: "Dewgong"
}

let n087 = {
    pokeindex: "087",
    name: "Dewgong",
    primaryType: "Water",
    secondaryType: "Ice"  ,
    hasEvolve: false
}

let n088 = {
    pokeindex: "088",
    name: "Grimer",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 38,
    evolve: "Muk"
}

let n089 = {
    pokeindex: "089",
    name: "Muk",
    primaryType: "Poison",
    hasEvolve: false
}

let n090 = {
    pokeindex: "090",
    name: "Shellder",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Water",
    evolve: "Cloyster"
}

let n091 = {
    pokeindex: "091",
    name: "Cloyster",
    primaryType: "Water",
    secondaryType: "Ice"  ,
    hasEvolve: false
}

let n092 = {
    pokeindex: "092",
    name: "Gastly",
    primaryType: "Ghost",
    secondaryType: "Poison"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 25,
    evolve: "Haunter"
}

let n093 = {
    pokeindex: "093",
    name: "Haunter",
    primaryType: "Ghost",
    secondaryType: "Poison"  ,
    hasEvolve: true,
    evolveMethod: "Trade",
    evolve: "Gengar"
}

let n094 = {
    pokeindex: "094",
    name: "Gengar",
    primaryType: "Ghost",
    secondaryType: "Poison"  ,
    hasEvolve: false
}

let n095 = {
    pokeindex: "095",
    name: "Onix",
    primaryType: "Rock",
    secondaryType: "Ground"  ,
    hasEvolve: false
}

let n096 = {
    pokeindex: "096",
    name: "Drowzee",
    primaryType: "Psychic",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 26,
    evolve: "Hypno"
}

let n097 = {
    pokeindex: "097",
    name: "Hypno",
    primaryType: "Psychic",
    hasEvolve: false
}

let n098 = {
    pokeindex: "098",
    name: "Krabby",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 28,
    evolve: "Kingler"
}

let n099 = {
    pokeindex: "099",
    name: "Kingler",
    primaryType: "Water",
    hasEvolve: false
}

let n100 = {
    pokeindex: "100",
    name: "Voltorb",
    primaryType: "Electric",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 30,
    evolve: "Electrode"
}

let n101 = {
    pokeindex: "101",
    name: "Electrode",
    primaryType: "Electric",
    hasEvolve: false
}

let n102 = {
    pokeindex: "102",
    name: "Exeggcute",
    primaryType: "Grass",
    secondaryType: "Psychic"  ,
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Leaf",
    evolve: "Exeggutor"
}

let n103 = {
    pokeindex: "103",
    name: "Exeggutor",
    primaryType: "Grass",
    secondaryType: "Psychic"  ,
    hasEvolve: false
}

let n104 = {
    pokeindex: "104",
    name: "Cubone",
    primaryType: "Ground",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 28,
    evolve: "Marowak"
}

let n105 = {
    pokeindex: "105",
    name: "Marowak",
    primaryType: "Ground",
    hasEvolve: false
}

let n106 = {
    pokeindex: "106",
    name: "Hitmonlee",
    primaryType: "Fighting",
    hasEvolve: false
}

let n107 = {
    pokeindex: "107",
    name: "Hitmonchan",
    primaryType: "Fighting",
    hasEvolve: false
}

let n108 = {
    pokeindex: "108",
    name: "Lickitung",
    primaryType: "Normal",
    hasEvolve: false
}

let n109 = {
    pokeindex: "109",
    name: "Koffing",
    primaryType: "Poison",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 35,
    evolve: "Weezing"
}

let n110 = {
    pokeindex: "110",
    name: "Weezing",
    primaryType: "Poison",
    hasEvolve: false
}

let n111 = {
    pokeindex: "111",
    name: "Rhyhorn",
    primaryType: "Ground",
    secondaryType: "Rock"  ,
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 42,
    evolve: "Rhydon"
}

let n112 = {
    pokeindex: "112",
    name: "Rhydon",
    primaryType: "Ground",
    secondaryType: "Rock"  ,
    hasEvolve: false
}

let n113 = {
    pokeindex: "113",
    name: "Chansey",
    primaryType: "Normal",
    hasEvolve: false
}

let n114 = {
    pokeindex: "114",
    name: "Tangela",
    primaryType: "Grass",
    hasEvolve: false
}

let n115 = {
    pokeindex: "115",
    name: "Kangaskhan",
    primaryType: "Normal",
    hasEvolve: false
}

let n116 = {
    pokeindex: "116",
    name: "Horsea",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 32,
    evolve: "Seadra"
}

let n117 = {
    pokeindex: "117",
    name: "Seadra",
    primaryType: "Water",
    hasEvolve: false
}

let n118 = {
    pokeindex: "118",
    name: "Goldeen",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 33,
    evolve: "Seaking"
}

let n119 = {
    pokeindex: "119",
    name: "Seaking",
    primaryType: "Water",
    hasEvolve: false
}

let n120 = {
    pokeindex: "120",
    name: "Staryu",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: "Water",
    evolve: "Starmie"
}

let n121 = {
    pokeindex: "121",
    name: "Starmie",
    primaryType: "Water",
    secondaryType: "Psychic",
    hasEvolve: false
}

let n122 = {
    pokeindex: "122",
    name: "Mr. Mime",
    primaryType: "Psychic",
    secondaryType: "Fairy",
    hasEvolve: false
}

let n123 = {
    pokeindex: "123",
    name: "Scyther",
    primaryType: "Bug",
    secondaryType: "Flying",
    hasEvolve: false
}

let n124 = {
    pokeindex: "124",
    name: "Jynx",
    primaryType: "Ice",
    secondaryType: "Psychic",
    hasEvolve: false
}

let n125 = {
    pokeindex: "125",
    name: "Electabuzz",
    primaryType: "Electric",
    hasEvolve: false
}

let n126 = {
    pokeindex: "126",
    name: "Magmar",
    primaryType: "Fire",
    hasEvolve: false
}

let n127 = {
    pokeindex: "127",
    name: "Pinsir",
    primaryType: "Bug",
    hasEvolve: false
}

let n128 = {
    pokeindex: "128",
    name: "Tauros",
    primaryType: "Normal",
    hasEvolve: false
}

let n129 = {
    pokeindex: "129",
    name: "Magikarp",
    primaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 20,
    evolve: "Gyarados"
}

let n130 = {
    pokeindex: "130",
    name: "Gyarados",
    primaryType: "Water",
    secondaryType: "Flying",
    hasEvolve: false
}

let n131 = {
    pokeindex: "131",
    name: "Lapras",
    primaryType: "Water",
    secondaryType: "Ice",
    hasEvolve: false
}

let n132 = {
    pokeindex: "132",
    name: "Ditto",
    primaryType: "Normal",
    hasEvolve: false
}

let n133 = {
    pokeindex: "133",
    name: "Eevee",
    primaryType: "Normal",
    hasEvolve: true,
    evolveMethod: "Stone",
    evolveStone: ["Water","Thunder", "Fire"],
    evolve: ["Vaporeon", "Jolteon", "Flareon"]
    }

let n134 = {
    pokeindex: "134",
    name: "Vaporeon",
    primaryType: "Water",
    hasEvolve: false
}

let n135 = {
    pokeindex: "135",
    name: "Jolteon",
    primaryType: "Electric",
    hasEvolve: false
}

let n136 = {
    pokeindex: "136",
    name: "Flareon",
    primaryType: "Fire",
    hasEvolve: false
}

let n137 = {
    pokeindex: "137",
    name: "Porygon",
    primaryType: "Normal",
    hasEvolve: false
}

let n138 = {
    pokeindex: "138",
    name: "Omanyte",
    primaryType: "Rock",
    secondaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 40,
    evolve: "Omastar"
}

let n139 = {
    pokeindex: "139",
    name: "Omastar",
    primaryType: "Rock",
    secondaryType: "Water",
    hasEvolve: false
}

let n140 = {
    pokeindex: "140",
    name: "Kabuto",
    primaryType: "Rock",
    secondaryType: "Water",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 40,
    evolve: "Kabutops"
}

let n141 = {
    pokeindex: "141",
    name: "Kabutops",
    primaryType: "Rock",
    secondaryType: "Water",
    hasEvolve: false
}

let n142 = {
    pokeindex: "142",
    name: "Aerodactyl",
    primaryType: "Rock",
    secondaryType: "Flying",
    hasEvolve: false
}

let n143 = {
    pokeindex: "143",
    name: "Snorlax",
    primaryType: "Normal",
    hasEvolve: false
}

let n144 = {
    pokeindex: "144",
    name: "Articuno",
    primaryType: "Ice",
    secondaryType: "Flying",
    hasEvolve: "Legendary"
}

let n145 = {
    pokeindex: "145",
    name: "Zapdos",
    primaryType: "Electric",
    secondaryType: "Flying",
    hasEvolve: "Legendary"
}

let n146 = {
    pokeindex: "146",
    name: "Moltres",
    primaryType: "Fire",
    secondaryType: "Flying",
    hasEvolve: "Legendary"
}

let n147 = {
    pokeindex: "147",
    name: "Dratini",
    primaryType: "Dragon",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 30,
    evolve: "Dragonair"
}

let n148 = {
    pokeindex: "148",
    name: "Dragonair",
    primaryType: "Dragon",
    hasEvolve: true,
    evolveMethod: "Level",
    evolveLevel: 55,
    evolve: "Dragonite"
}

let n149 = {
    pokeindex: "149",
    name: "Dragonite",
    primaryType: "Dragon",
    secondaryType: "Flying",
    hasEvolve: false
}

let n150 = {
    pokeindex: "150",
    name: "Mewtwo",
    primaryType: "Psychic",
    hasEvolve: "Legendary"
}

let n151 = {
    pokeindex: "151",
    name: "Mew",
    primaryType: "Psychic",
    hasEvolve: "Legendary"
}
pokedex.push(n001, n002, n003, n004, n005, n006, n007, n008, n009, n010, n011, n012, n013, n014, n015, n016, n017, n018, n019, n020, n021, n022, n023, n024, n025, n026, n027, n028, n029, n030, n031, n032, n033, n034, n035, n036, n037, n038, n039, n040, n041, n042, n043, n044, n045, n046, n047, n048, n049, n050, n051, n052, n053, n054, n055, n056, n057, n058, n059, n060, n061, n062, n063, n064, n065, n066, n067, n068, n069, n070, n071, n072, n073, n074, n075, n076, n077, n078, n079, n080, n081, n082, n083, n084, n085, n086, n087, n088, n089, n090, n091, n092, n093, n094, n095, n096, n097, n098, n099, n100, n101, n102, n103, n104, n105, n106, n107, n108, n109, n110, n111, n112, n113, n114, n115, n116, n117, n118, n119, n120, n121, n122, n123, n124, n125, n126, n127, n128, n129, n130, n131, n132, n133, n134, n135, n136, n137, n138, n139, n140, n141, n142, n143, n144, n145, n146, n147, n148, n149, n150, n151);

module.exports = pokedex