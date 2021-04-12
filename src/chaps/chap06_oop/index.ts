abstract class Defartment {
    static ficalYear = 2020;
    protected employee: string[] = [];

    constructor(protected readonly id: string, public name: string) {

    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Defartment): void;
}

