// data access

const data = [{id: 1, name: 'Hp', country: 'USA'}]
// console.log(data);
// console.log(data[0]); // array te index thake
// console.log(data[0].name);  //data name



const products = {
    count: 5000,
    data: [
        {id: 1, name: 'Hp', price: 45000},
        {id: 2, name: 'Dell', price: 40000}
    ]
}

// second product price

// console.log(products);
// console.log(products.data);
// console.log(products.data[1]);
// console.log(products.data[1].price);



// optional chain: optional chain er value thakle code samne jave na thakle code samne jabe na . tobe error hobe na


const user1 = {
    id: 1,
    name: 'Nure Alam',
    address: {
        street: {
            first: 'Freedom fighter Road',
            second: 'Ropatali, Barishal'
        },
        city:'Barishal'
    }
}
// console.log(user1);
// console.log(user1.address.street.second);
console.log(user1.address.street?.second);



const user2 = {
    id: 2,
    name: 'Shahporan',
    address: {
        city:'Barishal',
        second: 'Bangladesh'
    }
}
// console.log(user2.address.street.second);
console.log(user2.address.second);
console.log(user2.address.street?.second);


