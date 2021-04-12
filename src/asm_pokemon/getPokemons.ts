import _ from 'lodash';

class GetPokemons {
    async getDataPokemon() {
        const pokemons: number = 20;
        interface PokemonInterface {
            id: number;
            name: string;
            image: string;
        }
        let arrPokemons: PokemonInterface[] = [];

        for (let i = 11; i <= pokemons; i++) {
            let data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            let pokemon: any = await data.json()
            arrPokemons = [...arrPokemons, { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.back_default }]
        }

        return arrPokemons;
    }

    async createAndShufflePokemons() {
        let dataPokemons ;
        await this.getDataPokemon().then(data => {
            const newArrPokemons = [...data, ...data];
            dataPokemons = _.shuffle(newArrPokemons);
        })
        return dataPokemons;
    }
}

export default GetPokemons