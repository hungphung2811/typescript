class Lab1 {
    bai1() {
        let number1: number = 5;
        let number2: number = 2.8;
        let phrase: string = 'result is ';
        let permit: boolean = true;

        const result = number1 + number2;

        if (permit) {
            console.log('bai 1' + phrase + result);
        } else {
            console.log('not show result');
        }
    }

    bai2(x: any = 5) {
        let phrase: any = 'result is ';
        phrase = 10;
        x = '2.5';
        let xConvert: number = +x;
        console.log(typeof xConvert);
        return phrase + xConvert;
    }

    bai3() {
        interface personInterface {
            name: string,
            age: number
        }

        const person: personInterface = {
            name: 'hung',
            age: 20
        }

        console.log('bai3' + person.name);
    }

    async bai5() {
        const pokemons: number = 20;
        interface PokemonInterface {
            id: number;
            name: string;
            image: string;
        }
        let arrPokemons: PokemonInterface[] = [];

        for (let i = 9; i <= pokemons; i++) {
            let data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            let pokemon: any = await data.json()
            arrPokemons = [...arrPokemons, { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.back_default }]
        }
        return arrPokemons;
    }
}

export default new Lab1;