const products = [
    {id: 1 , name: 'Hp', price: 65000},
    {id: 2 , name: 'Dell', price: 42000},
    {id: 3 , name: 'Lenovo', price: 45000},
    {id: 4 , name: 'Macbook', price: 145000}
];



class Product {
    country = 'Bangladesh';
    name = 'car';
    constructor(model) {
        this.model = model;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const korolaCar = new Product('Korola');
console.log(korolaCar);
korolaCar.speak('Good car !!!!')




class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture(subject) {
        console.log(`Sir is teaching ${subject}.`);
    }
}
const tapan = new Teacher('Tapan Sir', 'Physics');
console.log(tapan);
tapan.lecture('Physics')


const rasid = new Teacher('Rasid Sir', 'English');
console.log(rasid);
rasid.lecture('English');