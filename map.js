// map: array er upor loop cholbe ar result array akare return korbe

const numbers = [1, 2, 3, 4, 5, 6];


// regular function
function doubleIt(num) {
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);


// arrow function
const double2 = n => n * 2;
const output = numbers.map(double2);
console.log(output);


//  short way to use map with arrow function

const prices = [100, 200, 120, 300, 430];
const doubled = prices.map(x => x * 2);
console.log(doubled);

const fiveAdd = prices.map(x => x + 5);
console.log(fiveAdd);

const half = prices.map(x => x/2);
console.log(half);



const friends = ['Laptop', 'Book', 'Quran'];

const lengths = friends.map(char => char.length);
console.log(lengths);

const firstLetter = friends.map(char => char[0]);
console.log(firstLetter);