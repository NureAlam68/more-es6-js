const products = [
    {id: 1 , name: 'Hp', price: 65000},
    {id: 2 , name: 'Dell', price: 42000},
    {id: 3 , name: 'Lenovo', price: 45000},
    {id: 4 , name: 'Macbook', price: 145000}
]


const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);


products.forEach(p => console.log(p.id));

const expensive = products.filter(p => p.price > 50000);
console.log(expensive);


const affordable = products.find(p => p.price < 50000);
console.log(affordable);


const total = products.reduce((a, c) => a + c.price, 0);
console.log(total);