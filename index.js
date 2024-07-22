import { Car } from "./js/Car.js";

const auto = new Car('Audi', 80, 'red');

auto.engineStatus = 0;
console.log(auto.engineOn(0));
console.log(auto.engineOff(1));

auto.usage = 2;
console.log(auto.start(2));

console.log(auto.driving(2));

auto.speed = 20;
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());
console.log(auto.stop());


auto.gasTank = 50;
console.log(auto.gasRemainder(7.5));

console.log(auto.topUpGas(7.5));