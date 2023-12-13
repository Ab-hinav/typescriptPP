class Vehicle{
    color:string = 'red';
    protected honk():void {
        console.log("Beep");
    }
    constructor(color:string){
        this.color = color;
    }
}


class Car extends Vehicle{
    private drive():void{
        console.log("Driving a car");
    }
    startDrivingProcess():void{
        this.drive();
        this.honk();
    }
    constructor(color:string){
        super(color);
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car('blue');
car.startDrivingProcess();