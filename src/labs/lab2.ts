class Lab2 {
    bai1() {
        let number1: number = 5;
        let number2: number = 2.8;
        let parase: string = 'result is';
        let permit: boolean = true;

        const result = number1 + number2;

        if (permit) {
            console.log(parase + result);

        } else {
            console.log('not show result');

        }
    }
    bai2a() {
        interface PersonInterface {
            name: string,
            age: number
        }
        const person: PersonInterface = {
            name: 'Typescript',
            age: 11
        }
        console.log(person.name);

    }
    bai3() {
        enum Role { AMIN, READ_ONLY, AUTHOR };
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
            role: Role[Role.AMIN],
            roletuple: [2, 'author']
        }

        if (person.role === Role[Role.AUTHOR]) {
            console.log('is author');
        }

        person.roletuple.push('admin');
        person.roletuple[0] = 10;
        person.roletuple = [0, 'alo'];
    }
    bai4(){
        var a = null;
        console.log(a);
        console.log(typeof a);

        var b;
        console.log(b);
        console.log(typeof b);
    }
}

export default new Lab2;