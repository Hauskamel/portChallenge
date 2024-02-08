class Port {
    constructor (budget) {
        this.budget = budget;
    }
    docks = []


}

class Ship {
    constructor (size) {
        this.size = size;
    }
}


const port = new Port(0);

const ship1 = new Ship("XXL");
const ship2 = new Ship("XXL");
const ship3 = new Ship("M");

port.docks.push(ship1, ship2, ship3);


port.docks.forEach(ship => {
    if (ship.size === "XXL") {

    }
});