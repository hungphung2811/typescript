class Lab2 {
    bai1_1() {
        let number1: number = 5;
        let number2: number = 2.8;
        let parase: string = 'result is';
        let permit: boolean = true;

        const result = number1 + number2;

        if (permit) {
            console.log('lab1-bai1_1 : ' + parase + result);

        } else {
            console.log('not show result');

        }
    }
    bai1_3() {
        interface PersonInterface {
            name: string,
            age: number
        }
        const person: PersonInterface = {
            name: 'Typescript',
            age: 11
        }
        console.log('lab2-bai1_3 : ' + person.name);

    }
    bai1_2() {
        function add(x: number = 5) {
            let phrase: number | string = 'result is ';
            phrase = 10;
            x = Number.parseInt('2.5');
            return phrase + x;
        }
        const result: number = add()
        console.log('lab2_bai_2 : ', result);

    }
    bai4_1() {
        enum Role { ADMIN, READ_ONLY, AUTHOR };
        interface PersonInterface {
            name: string,
            age: number,
            hobbies: string[],
            role: string,
            roletuple: [number, string]
        }

        const person = {
            name: 'Typescript',
            age: 11,
            hobbies: ['alo', 'alo'],
            role: Role[Role.ADMIN],
            roletuple: [2, 'author']
        }

        if (person.role === Role[Role.ADMIN]) {
            console.log('lab2-bai3 : is admin');
        }

        person.roletuple.push('admin');
        person.roletuple[0] = 10;
        person.roletuple = [0, 'alo'];
    }
    bai4_2() {
        type Combinable = number | string;
        function combine(input1: Combinable, input2: number | string, resultConversion: 'as-number' | 'as-text') {
            let result;
            if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion == 'as-number') {
                result = <number>input1 + <number>input2;
            } else {
                result = input1.toString() + input2.toString();
            }
            return result;
        }
        const combineNumber = combine(30,26,'as-number')
        console.log('lab2-bai4_2 number : ',combineNumber);
        const combineText = combine('30', '26', 'as-number')
        console.log('lab2-bai4_2 text : ', combineText);
        
    }
    bai4_3() {
        var a = null;
        var b;
        console.log('lab4-bai4 :');

        console.table({
            a,
            typeofa: typeof a,
            b,
            typeof_b: typeof b
        })
    }
    bai4_4(){
        let userInput :unknown;
        let userName :string;
        userInput=5;
        userInput='typescript';
        userName = <string>userInput;
        if (typeof userInput ==='string') {
            userName = userInput;
        }
    }
}

export default new Lab2;