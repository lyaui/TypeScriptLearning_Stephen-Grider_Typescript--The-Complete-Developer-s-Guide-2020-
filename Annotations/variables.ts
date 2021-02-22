let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['white', 'pink', 'yellow'];
let myNumber: number[] = [0, 12, 17];
let truth: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = { x: 0, y: 0 };

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use Annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // any
// const coordinates: { x: number; y: number } = JSON.parse(json);

// 2. When we declared a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord; // any
// let foundWord:boolean; // 應該要回傳 boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
