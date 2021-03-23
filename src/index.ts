import lab from './labs/lab1';

// lab.bai1();
// lab.bai3();
// let resultBai2: number = lab.bai2();
// console.log(resultBai2);

const main = (): void => {
    const mainContentElement = document.querySelector('#mainContentId');
    lab.bai5().then(data => {
        console.log(data);
        for (let i = 9; i <= 20; i++) {
            const random = Math.floor(Math.random() * 10);
            const pokemon = data[random];
            const divElement = document.createElement('div');
            divElement.classList.add('border', 'border-gray-300','p-1', 'm-2', 'shadow','text-center');
            divElement.innerHTML = /*html*/ `
                <div class="flex justify-center">
                    <img src="${pokemon.image}" title="${pokemon.name}" />
                </div>
                <p>${pokemon.name}</p>
            `;
            mainContentElement.appendChild(divElement);
        }
    });
}

main();
