// find an array which is divisible by 10


// using filter

const numbers = [33, 50, 79, 78, 90, 101, 30];

const newArray = numbers.filter(num => num % 10 === 0);

console.log(newArray);



// using find

const result = numbers.find(x => x % 10 === 0);

console.log(result);
