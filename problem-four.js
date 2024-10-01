
// calculate the sum of ages




const people = [
    {name: 'Nodi', age: 20},
    {name: 'Akil', age: 15},
    {name: 'Shobuj', age: 22}
]

let sum = 0;

for(let man of people) {
    const valueOfAge = man.age;
    sum += valueOfAge;
}
console.log(sum);


// using reduce


const total = people.reduce((acc, curr) => acc + curr.age, 0);

console.log(total);
