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

 const getPokemonCharacters = async () => {

    pokemonCharacters = await fetchData("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
    pokemonCharacters = pokemonCharacters["results"]

 }  


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
       // this.exist = (idOrName) => this.getPokemonCharacter(idOrName)
    }

    getPokemonCharacter = async (idOrName) => {
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
                this.strength1 += characteristics?.types[0]?.type?.name
                this.strength2 += characteristics?.types[1]?.type?.name
            



                return true
            }
        }
    
      }

    

}  

pokemon = new pokemonCharacter()

const found = await pokemon.getPokemonCharacter(idOrName)
if(found){
    
    return pokemon
}

else{
    return null
}

 

  
   


}

getResult = async() => {

    await getPokemonCharacters()

    pokemon = await getPokemon(4)

    console.log(pokemon)
    


  
}



getResult()

  





  