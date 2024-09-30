// main class

class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const yammah = new Vehicle('MT-15', 500000);
console.log(yammah);


// copy class-1

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
const ena = new Bus('ENA', 40000050, 50, 450);
console.log(ena);


// copy class-2

class Truck extends Vehicle {
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}
const track = new Truck('S5', 399404040, '200 Ton');
console.log(track);