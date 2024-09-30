// make even number Array

const oddArray = [1, 3, 5, 7, 9];

const evenArray = [];

for(let odd of oddArray) {
    const even = odd + 1;
    evenArray.push(even);
}
console.log(evenArray);


// done by map 

const evenArr = oddArray.map(x => x + 1);
console.log(evenArr);
