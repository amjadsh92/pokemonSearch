const pokemonToFind = document.getElementById('input-pokemon');
const searchButton = document.getElementById('search-btn');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id')
const pokemonCharacter = document.getElementById('pokemon-character')
const weightAndHeight = document.getElementById('weight-height')
const pokemonImage = document.getElementById('pokemon-image')
const strength1 = document.getElementById('strength1');
const strength2 = document.getElementById('strength2');
const hp = document.getElementById('stat-hp');
const attack = document.getElementById('stat-attack');
const defense = document.getElementById('stat-defense');
const spAttack = document.getElementById('stat-spAttack');
const spDefense = document.getElementById('stat-spDefense');
const speed = document.getElementById('stat-speed');


const color ={
    grass: "#78cc55",
    poison: "#c68bb7",
    fire:  "#ff6f52",
    flying: "#8899ff",
    water: "#42a1ff",
    bug:  "#aabb23",
    normal: "#b7b7aa",
    dark: "#b59682",
    fighting:"#d3887e",
    dragon:"#9e93f1",
    ice: "#66ccfe",
    rock:"#baaa66",
    steel:"#abaabb",
    ground: "#dfba52",
    psycic:"#ff66a3",
    electric: "#fecc33"
}


const reset =()=>{

    if(!pokemonCharacter.classList.contains("hide")){
        pokemonCharacter.classList.add("hide")

        hp.innerText= ""
        attack.innerText= ""
        defense.innerText= ""
        spAttack.innerText= ""
        spDefense.innerText= ""
        speed.innerText= ""
        strength1.style.display="none"
        strength2.style.display="none"
        strength1.style.backgroundColor= "#b7b7aa"
        strength2.style.backgroundColor= "#b7b7aa"

    }



}




const fetchData = async (api_endpoint) => {
    try {
      const res = await fetch(api_endpoint);
      const data = await res.json();
      return data
    
      } catch (err) {
      console.log(err);
    }
  };



class pokemonChar {
    
    constructor(){
        this.name="";
        this.id="";
        this.weight="";
        this.height="";
        this.image="";
        this.hp="";
        this.attack="";
        this.defense="";
        this.spAttack="";
        this.spDefense="";
        this.speed="";
        this.strength1="";
        this.strength2="";
       
    }

    setCharacteristics = async (pokemonCharacter, characteristics) => {
        
                this.name += pokemonCharacter.name
                this.id += pokemonCharacter.id
                this.weight += characteristics.weight
                this.height += characteristics.height
                this.image += characteristics.sprites.front_default;
                this.hp += characteristics.stats[0].base_stat
                this.attack += characteristics.stats[1].base_stat
                this.defense += characteristics.stats[2].base_stat
                this.spAttack += characteristics.stats[3].base_stat
                this.spDefense += characteristics.stats[4].base_stat
                this.speed += characteristics.stats[5].base_stat
                this.strength1 = characteristics?.types[0] ? characteristics?.types[0]?.type?.name : this.strength1
                this.strength2 = characteristics?.types[1] ? characteristics?.types[1]?.type?.name : this.strength2
            }
        }
    
      

const showPokemonCharacter = async (idOrName)=>{

    const pokemon = await getPokemonCharacter(idOrName)

    if(pokemon){

    reset()

    pokemonName.innerText= `${pokemon.name} #${pokemon.id}`;
    weightAndHeight.innerText = `Weight: ${pokemon.weight} Height: ${pokemon.height}`
    pokemonImage.src= `${pokemon.image}`
    hp.innerText=`${pokemon.hp}`
    attack.innerText=`${pokemon.attack}`
    defense.innerText=`${pokemon.defense}`
    spAttack.innerText=`${pokemon.spAttack}`
    spDefense.innerText=`${pokemon.spDefense}`
    speed.innerText=`${pokemon.speed}`

    if(pokemon.strength1){
        strength1.style.display="block";
        strength1.innerText = `${pokemon.strength1}`
        strength1.style.backgroundColor = color[pokemon.strength1] ? color[pokemon.strength1] : "#b7b7aa"
    } 

    if(pokemon.strength2){
        strength2.style.display="block";
        strength2.innerText = `${pokemon.strength2}`
        strength2.style.backgroundColor = color[pokemon.strength2] ? color[pokemon.strength2] : "#b7b7aa"       

    } 

    pokemonCharacter.classList.remove("hide")

    }
    else{
        alert("Pokémon not found")
        reset()
    }
        
    }

 
const getPokemonCharacter = async(idOrName) => {
    const pokemonCharacters = await pokemonCharactersPromise;

    for (let pokemonCharacter of pokemonCharacters){
        if (pokemonCharacter.id == idOrName || pokemonCharacter.name == idOrName){
            const characteristics = await fetchData(pokemonCharacter.url)
            const pokemon = await getPokemon(pokemonCharacter, characteristics)

            return pokemon

        }   
    
    }

    
}    
        


const getPokemon =  async (pokemonCharacter, characteristics) =>{

let pokemon = new pokemonChar()

await pokemon.setCharacteristics(pokemonCharacter, characteristics)

return pokemon

}


// IIFE

let pokemonCharactersPromise = (async () => {

    let pokemonCharacters = await fetchData("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
    pokemonCharacters = pokemonCharacters["results"]

    return pokemonCharacters;

 })();

 searchButton.addEventListener("click", () => showPokemonCharacter(pokemonToFind.value))

 pokemonToFind.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        showPokemonCharacter(pokemonToFind.value);
    }
  });