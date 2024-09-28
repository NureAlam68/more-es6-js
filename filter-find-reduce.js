// Filter: condition match korle result return with array , condition match na korle []

const players = [60, 64, 70, 67, 76, 55, 60];

// const selected = players.filter(x => x > 70);
// console.log(selected);

// const selected = players.filter(x => x > 80);
// console.log(selected);

// const selected = players.filter(x => x > 50);
// console.log(selected);

// const selected = players.filter(x => x > 60);
// console.log(selected);

// const selected = players.filter(x => x % 2 === 1);
// console.log(selected);

const selected = players.filter(x => x % 2 === 0);
console.log(selected);


const friends = ['Tom', 'Tomi', 'John', 'Tim', 'Sohag', 'Nure Alam'];

const oddFriend = friends.filter(x => x.length % 2 === 0);
console.log(oddFriend);



// Find: condition match onek value korleo first ta return korbe without array, condition match na korle undefined

const height = [60, 64, 70, 67, 76, 55, 60];

// const result1 = height.find(x => x > 80);
// console.log(result1);

// const result1 = height.find(x => x > 50);
// console.log(result1);

const result1 = height.find(x => x > 60);
console.log(result1);



// Reduce: 2 ta jinis thakbe , 2 ta parameter soho callback function and initial value. answer return without array


const marks = [60, 70, 40, 50, 30];

const total = marks.reduce((accum, curr) => accum + curr, 0);
console.log(total);


