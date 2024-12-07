const car = {
    brand: 'Toyota',
    showBrand: function () {
        console.log(this.brand);
    }
};

var laptop = { brand: 'Apple' };
var bike = { name: 'Honda', brand: 'YIIEEUE' };

function display(fn) {
    // this.brand = 'Honda';
    fn();
}

// [1]
// display(car.showBrand); // undefined

// [2]
var boundShowBrand = car.showBrand.bind(bike);
display(boundShowBrand); // Apple
