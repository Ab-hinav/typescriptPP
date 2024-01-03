class ArrayOfAnything<t> {
    constructor(public collection: t[]) {}
    get(index: number): t {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<t>(arr: t[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);

// generic constraints

class Car1 {
    print(){
        console.log('I am a car');
    }
}

class House1 {
    print(){
        console.log('I am a house');
    }
}

interface Printable1 {
    print(): void;
}

function printHousesOrCars<T extends Printable1>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars<House1>([new House1(), new House1()]);