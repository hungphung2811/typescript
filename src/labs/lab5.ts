class Lab5 {
    bai1(){
        type Admin = {
            name:string;
            privileges:string[];
        };
        type Empoyee ={
            name:string;
            startDate:Date;
        };
        type ELevatedEmployee  = Admin & Empoyee;
    }

    bai2(){
        class Car {
            drive(){
                console.log('driving...');
            }
        }
        class Trunk {
            drive(){
                console.log('trunk driving...');
            }
            loadCargo(amount:number){
                console.log('loading cargo...',amount);
            }
        }
        type Vehicle = Car|Trunk;
        const v1 = new Car();
        const v2 = new Trunk();
        function useVehicle(vehicle:Vehicle){
            vehicle.drive();
            if (vehicle instanceof Trunk) {
                vehicle.loadCargo(1000);
            }
        }
    }

    bai3(){
        interface IBird{
            type:'bird';
            flyingSpeed:number;
        }
        interface IHorse{
            type:'horse';
            runningSpeed:number;
        }
        type Animal = IBird | IHorse;
        function moveAnimal(animal:Animal){
            let speed;
            switch (animal.type) {
                case 'bird':
                    speed = animal.flyingSpeed
                    break;
                case 'horse':
                    speed = animal.runningSpeed
                    break;
            }
            console.log('moveing at speed ', speed);
            
        }
        moveAnimal({type:'bird',flyingSpeed:100})
    }
    bai4(){
        interface ILengthy{
            length:number;
        }
        function countAndDescribe<T extends ILengthy>(element:T):[T,string]{
            let descriptionText = 'go no value';
            if (element.length===1) {
                descriptionText='got 1 element';
            }else if (element.length>1) {
                descriptionText = `got ${element.length} elements`;
            }
            return [element,descriptionText]
        }
        countAndDescribe('hung');
    }
    bai5(){
        class DataStorage<T extends string |number|boolean>{
            private data :T[]= [];
            addItem(item:T){
                this.data.push(item);
            }
            removeItem(item:T){
                if (this.data.indexOf(item)===-1)return;
                this.data.splice(this.data.indexOf(item),1)
            }
            getItems(){
                return [...this.data];
            }
        }

        const textStorage = new DataStorage<string>();
        textStorage.addItem('max');
        textStorage.addItem('alo alo');
        textStorage.removeItem('max');

        console.log(textStorage.getItems());
        const numberStorage =new DataStorage<number>();
    }
}

export default new Lab5;