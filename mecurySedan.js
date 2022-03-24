const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    start(){
        if (this.fuel > 0) {
            console.log('The engine started')
            return this.started == true
        } else {
            console.log('The engine has no fuel')
            return this.started == false
        }
    }

    checkService(mileage){
        if (this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num
                return this.passenger
            } else {
                console.log(`${this.model} ${this.make} does not have enough space for all passengers.`)
            }
        } else {
            console.log(`${this.model} ${this.make} is full.`)
        }
    }
}

let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)