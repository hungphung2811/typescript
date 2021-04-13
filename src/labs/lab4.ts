class lab4 {
    bai1() {
        interface AddFnInterface {
            (a: number, b: number): number;
        }
        let add: AddFnInterface;
        add = (n1: number, n2: number) => n1 + n2;
        console.log('lab4_bai1 : ',add(1,1));
        
    }
    bai2() {
        interface NameInterface {
            readonly name?: string;
            outputName?: string;
        }
        interface GreetableInterface extends NameInterface {
            greet(phrase: string): void;
        }

        class Person implements GreetableInterface {
            name;
            outputName;
            constructor(name: string) {
                this.name = name;
            }
            greet(param) {
                this.outputName = param + this.name;
                console.log(this.outputName);
            }
        }

        let user1: GreetableInterface;
        user1 = new Person('hung');
        user1.greet('alo alo ten toi la :');
        console.log(user1);
        
    }
    bai3() {
        abstract class Department {
            static fiscalYear = 2020;
            protected employees: string[] = [];
            id: number;
            name: string;
            constructor(id: number, name: string) {
                this.id = id;
                this.name = name;
            }
            static createEmployee(name: string) {
                return { name: name };
            }

            abstract descibe(this: Department): void;

            addEmployee(employee: string) {
                this.employees.push(employee);
            }

            printEMployeeInformation() {
                console.log(this.employees.length);
                console.log(this.employees);
            }
        }

        class ITDepartment extends Department {
            admins: string[];
            constructor(id: number, admins: string[]) {
                super(id, 'IT');
                this.admins = admins;
            }
            descibe() {
                console.log('id department :' + this.id);
            }
        }
        const employee1 = Department.createEmployee('max');
        console.log(employee1,Department.fiscalYear);
        const id = new ITDepartment(1,['max']);
        id.addEmployee('max');
        id.addEmployee('manu');
    }
    
}

export default new lab4;