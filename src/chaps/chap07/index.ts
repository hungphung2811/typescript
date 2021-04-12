function alo<T>(message: T): T {
    return message;
}

alo<string>('hello world');
alo<number>(100);

interface ProductInterface<T, U> {
    process(key: T, val: U): void;
}

export default class Product<A, B, C> {
    id: A;
    name: B;
    price: C;
    
    constructor(id: A, name: B, price: C) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getList<T>(list: T[]): T[] {
        return list;
    }
}

