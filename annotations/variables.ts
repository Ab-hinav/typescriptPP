let apples = 4;

let speed = 'fast';

let hasName = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// build in objects

let now: Date = new Date();

// array 
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 24, 5, 3];

let truths: boolean[] = [true, true, false];


class Car {

}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//function 
const logNumber: (i:number) =>void = (i:number) => {
    console.log(i);
}

// we a function returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//when we declare a vaiable and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}




