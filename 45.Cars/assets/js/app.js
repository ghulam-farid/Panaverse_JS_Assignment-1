function storeCarInfo(manufacturer, model,color, year, price) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        year: year,
        price: price
    };
    return car;
}
console.log(storeCarInfo("Toyota", "Corolla", "Black", 2019, 20000));