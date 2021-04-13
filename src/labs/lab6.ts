class Lab6 {
    bai1() {
        function logger(constructor: Function) {
            console.log('logging ...');
            console.log(constructor);
        }
    }
    bai2() {
        function Logger(logString: string) {
            return function (constructor: Function) {
                console.log('logging ...', logString);
                console.log(constructor);
            }
        }
        @Logger('alo alo')
        class Person {
            name = 'max';
            constructor() {
                console.log('tao ra person object');
            }
        }

    }
    
    bai3() {
        function Log(target: any, propertyName: string | symbol) {
            console.log('property decorator');
            console.log(target, propertyName);
        }
        class Product {
            @Log
            title: string;
            private _price: number;

            set private(val: number) { }
            constructor(t: string, p: number) {
                this.title = t;
                this._price = p;
            }
            getPriceWithTax() { }
        }
    }

    bai4() {
        function Log3(target: any, name: string | symbol, description: PropertyDecorator) {
            console.log('method decorator...');
            console.log(target,name,description);
        }
        class Product{
            title:string;
            private _price:number;
            set price(val:number){}
            constructor(t:string,p:number) {
                this.title=t;
                this._price =p;
            }
            getPriceWithTax(){}
        }
    }

    bai5(){
        
    }
}

export default new Lab6;