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

let pokemonCharacters;


const fetchData = async (api_endpoint) => {
    try {
      const res = await fetch(api_endpoint);
      const data = await res.json();
      return data
    
      } catch (err) {
      console.log(err);
    }
  };


const getPokemon =  async (idOrName) =>{


class pokemonCharacter {
    constructor(idOrName){
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

    exist = async (idOrName) => {
        for (let pokemonCharacter of pokemonCharacters){
            if (pokemonCharacter.id == idOrName || pokemonCharacter.name == idOrName){
                const characteristics = await fetchData(pokemonCharacter.url)
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
            



                return true
            }
        }
    
      }

    

}  

const pokemon = new pokemonCharacter()

const found = await pokemon.exist(idOrName)
if(found){
    
    return pokemon
}

else{
    return null
}

 

  
   


}

const getPokemonCharacter = async(idOrName) => {
    await pokemonCharactersPromise;

    const pokemon = await getPokemon(idOrName)

    return pokemon
    


  
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
        if(pokemon.strength1 == 'grass'){
            strength1.style.backgroundColor= "#78cc55";
        }
        else if(pokemon.strength1 == 'poison'){
            strength1.style.backgroundColor= "#c68bb7";
        }

        else if(pokemon.strength1 == 'fire'){
            strength1.style.backgroundColor= "#ff6f52";
        }
        else if(pokemon.strength1 == 'flying'){
            strength1.style.backgroundColor= "#8899ff";
        }
        
       else if(pokemon.strength1 == 'water'){
            strength1.style.backgroundColor= "#42a1ff";
        }

        else if(pokemon.strength1 == 'bug'){
            strength1.style.backgroundColor="#aabb23";
        }
        
        else if(pokemon.strength1 == 'normal'){
            strength1.style.backgroundColor="#b7b7aa";
        }
        
        else if(pokemon.strength1 == 'dark'){
            strength1.style.backgroundColor="#b59682";
        }

        else if(pokemon.strength1 == 'fighting'){
            strength1.style.backgroundColor="#d3887e";
        }
        
        else if(pokemon.strength1 == 'dragon'){
            strength1.style.backgroundColor="#9e93f1";
        }
       
        else if(pokemon.strength1 == 'ice'){
            strength1.style.backgroundColor="#66ccfe";
        }


     } 

     if(pokemon.strength2){
        strength2.style.display="block";
        strength2.innerText = `${pokemon.strength2}`
        if(pokemon.strength2 == 'grass'){
            strength2.style.backgroundColor= "#78cc55";
        }
        else if(pokemon.strength2 == 'poison'){
            strength2.style.backgroundColor= "#c68bb7";
        }

        else if(pokemon.strength2 == 'fire'){
            strength2.style.backgroundColor= "#ff6f52";
        }
        else if(pokemon.strength2 == 'flying'){
            strength2.style.backgroundColor= "#8899ff";
        }
        
       else if(pokemon.strength2 == 'water'){
            strength2.style.backgroundColor= "#42a1ff";
        }

        else if(pokemon.strength2 == 'bug'){
            strength2.style.backgroundColor="#aabb23";
        }
        
        else if(pokemon.strength2 == 'normal'){
            strength2.style.backgroundColor="#b7b7aa";
        }
        
        else if(pokemon.strength2 == 'dark'){
            strength2.style.backgroundColor="#b59682";
        }

        else if(pokemon.strength2 == 'fighting'){
            strength2.style.backgroundColor="#d3887e";
        }
        
        else if(pokemon.strength2 == 'dragon'){
            strength2.style.backgroundColor="#9e93f1";
        }
       
        else if(pokemon.strength2 == 'ice'){
            strength2.style.backgroundColor="#66ccfe";
        }

     } 

     pokemonCharacter.classList.remove("hide")
     
    }
    else{
        alert("Pokémon not found")
        reset()
    }
      
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




searchButton.addEventListener("click", () => showPokemonCharacter(pokemonToFind.value))


// IIFE


let pokemonCharactersPromise = (async () => {

    pokemonCharacters = await fetchData("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
    pokemonCharacters = pokemonCharacters["results"]

    return pokemonCharacters;

 })();


(async function() {

    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);
    console.log(await pokemonCharactersPromise);

})();

  
function create_promise(resolve_value, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resolve_value)
        }, timeout);
    });
}

p1 = create_promise("abcd", 3000);

p1.then((r) => {
    console.log("resolve: " + r)
})