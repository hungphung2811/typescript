import GetPokemons from './getPokemons'

const getPokemons = new GetPokemons();

class ASM {
    point: number;
    totalPokemon: number;
    countChooseSuccess: number;
    time: number;
    userName: string;
    status: boolean;
    interval;
    constructor(point, totalPokemon, countChooseSuccess, time, userName) {
        this.point = point;
        this.totalPokemon = totalPokemon;
        this.countChooseSuccess = countChooseSuccess;
        this.time = time;
        this.userName = userName;
    }

    async render() {
        this.status = false;
        document.querySelector('#userNameId').textContent = this.userName;
        await getPokemons.createAndShufflePokemons().then(pokemons => {
            this.totalPokemon = pokemons.length;

            const mainContentElement = document.getElementById('mainContentId')
            const html = pokemons.map((pokemon) => {
                return /*html*/ `
                <div class="relative pokemon border border-gray-300 shadow text-center cursor-pointer transition duration-300">
                    <div class="overlay absolute top-0 right-0 w-full h-full bg-gray-500 z-20 transition duration-300"></div>
                    <div class="flex justify-center">
                        <img src="${pokemon.image}" title="${pokemon.name}" />
                    </div>
                    <span class="absolute top-0 right-0 z-10 bg-yellow-500 text-xs text-gray-800 font-semibold">${pokemon.id}</span>
                </div>
            `;
            }).join('')

            mainContentElement.innerHTML = html;
        });
    }
    afterRender() {
        const pokemonElements = document.querySelectorAll('.pokemon');
        pokemonElements.forEach(btnPokemon => {
            btnPokemon.addEventListener("click", () => {
                btnPokemon.classList.add('bg-gray-100', 'choosed');
                btnPokemon.querySelector('.overlay').classList.add('hidden')
                this.handleLogic();
            });
        });

    }
    handleLogic() {
        const choosedElement = document.querySelectorAll('.choosed');

        if (choosedElement.length == 2) {
            const tempStatus = choosedElement[0].querySelector('span').textContent ==
                choosedElement[1].querySelector('span').textContent
            if (tempStatus) {
                this.successfulHandle(choosedElement);
            } else {
                this.failureHandle(choosedElement);
            }
        }
    }
    successfulHandle(choosedElement) {
        const pointElement = document.querySelector('#pointId');
        this.point += 5;
        pointElement.textContent = `${this.point}`;
        choosedElement.forEach(btn => {
            btn.classList.add('bg-green-500');
            setTimeout(() => {
                btn.classList.remove('choosed');
                btn.classList.add('invisible');
            }, 500);
        })
        this.handerCountChooseSuccess();
    }
    failureHandle(choosedElement) {
        choosedElement.forEach(btn => {

            btn.classList.add('bg-red-500');
            setTimeout(() => {
                btn.querySelector('.overlay').classList.remove('hidden')

                btn.classList.remove('choosed', 'bg-red-500', 'bg-gray-100');
            }, 500);
        })
    }
    handerCountChooseSuccess() {
        this.countChooseSuccess++;
        if (this.countChooseSuccess === this.totalPokemon / 2) {
            this.status = true;
            clearInterval(this.interval);
            const html = /*html */ `
            <div class="col-span-9 text-center m-auto">
                <h3 class="animate-bounce text-2xl"> you win</h3>
            </div>
            `
            document.querySelector('#mainContentId').innerHTML = html;
        }
    }
    handerCountTime(time = this.time, statusWin = this.status) {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            time--;
            document.querySelector('#timeId').textContent = `${time}`;
            if (statusWin === true) {
                clearInterval(this.interval);
            }
            if (time == 0) {
                clearInterval(this.interval);
                const html = /*html */ `
                    <div class="col-span-9 text-center m-auto">
                        <h3 class="animate-bounce text-2xl"> you lose</h3>
                    </div>
                `;
                document.querySelector('#mainContentId').innerHTML = html;
            }
        }, 1000)

    }
}

export default ASM;