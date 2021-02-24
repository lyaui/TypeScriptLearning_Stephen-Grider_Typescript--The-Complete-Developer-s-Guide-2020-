class Vehicle {
  constructor(public color: string) {}
}

const vehicle = new Vehicle('pink');
console.log(vehicle.color); // 'red

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}
const car = new Car(4, 'red');
console.log(car);
