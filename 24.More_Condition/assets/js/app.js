let vehicle_manufacturer = "BMV";
let vehicle_name = "X5";
let vehicle_model = "2019";
let vehicle_color = "Black";
let vehicle_price = 50000;
let vehicle_mileage = 10000;
let vehicle_engine = "V8";
let vehicle_fuel = "Diesel";
let vehicle_transmission = "Automatic";
let vehicle_body = "SUV";
let vehicle_doors = 5;

console.log('is vehicle_manufacturer == "BMV"? Predict true : false');
console.log(vehicle_manufacturer === "BMV");

console.log('is vehicle_name == "X5"? Predict true');
console.log(vehicle_name === "X5");

console.log('is vehicle_model == "2019"? Predict true');
console.log(vehicle_model === "2019");

console.log('is vehicle_color == "Black"? Predict true');
console.log(vehicle_color === "Black");

console.log('is vehicle_price == 50000? Predict true');
console.log(vehicle_price === 50000);




console.log('is vehicle_manufacturer == "Honda"? Predict true : false');
console.log(vehicle_manufacturer === "Honda");

console.log('is vehicle_name == "X2"? Predict true : false');
console.log(vehicle_name === "X2");

console.log('is vehicle_model == 2019? Predict true : false');
console.log(vehicle_model === 2019);

console.log('is vehicle_color == "Grey"? Predict true : false');
console.log(vehicle_color === "Grey");

console.log('is vehicle_price == 50000? Predict true');
console.log(vehicle_price === '50000');



console.log('is vehicle_manufacturer !== "Honda"? Predict true : false');
console.log(vehicle_manufacturer !== "Honda");

console.log('is vehicle_transmission == "automatic"? Predict true : false');
console.log(vehicle_transmission.toLocaleLowerCase() === "automatic");

console.log('is vehicle_price <= 30000 ? Predict false : true');
console.log(vehicle_price <= 30000);

console.log('is vehicle_mileage <= 15000 ? Predict true : false');
console.log(vehicle_mileage <= 15000);


console.log('is vehicle_mileage <= 15000 && vehicle_price <= 30000 ? Predict true : false');
console.log(vehicle_mileage <= 15000 && vehicle_price <= 300000);

