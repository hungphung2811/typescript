class Lab3 {
    bai1() {
        const hobbies = ['sport', 'cooking'];
        const activeHobbies = ['hiking'];
        const newArr = [...hobbies, ...activeHobbies];
        console.log(newArr);
    }
    bai2() {
        let sum = (x: number, y?: number) => x + <number>y;
        let speech = (output: any): void => console.log('result' + output);
        speech(sum(5, 12));
    }
    bai3() {
        function addAndHandle(x: number, y: number, cb: (num: number) => void) {
            const result = x + y;
            cb(result);
        }

        addAndHandle(10, 20, (result) => console.log(result));
    }
}

export default new Lab3;