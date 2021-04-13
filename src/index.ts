import ASM from './asm_pokemon'

function main(): void {
    const btnLoginElement: HTMLElement = document.querySelector('#btnLoginId');
    btnLoginElement.addEventListener('click', async () => {

        const userName: string = btnLoginElement.parentElement.querySelector('input').value;
        const errorElement: HTMLElement = document.querySelector('#errorId');
        if (userName.trim().length < 5 || userName.trim().length > 20) {
            errorElement.textContent = 'ban can nhap ten tu 5 - 20 ki tu'
            return;
        } else {
            btnLoginElement.parentElement.parentElement.classList.add('hidden');
            document.querySelector('#rootPlayId').classList.remove('hidden');
            const asm = new ASM(0, 0, 0, 100, userName);
            await asm.render();
            await asm.afterRender();
            asm.handerCountTime();

            document.querySelector('#rePlayId').addEventListener("click", async () => {
                await asm.render();
                await asm.afterRender();
                asm.handerCountTime(100);
            })
        }

    })

}

main()