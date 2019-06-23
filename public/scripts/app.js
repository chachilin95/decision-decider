'use strict';

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'Alex',
    cities: ['Dallas', 'Wilmington', 'Orlando'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        return cityMessages;
    }
};
console.log(user.printPlacesLived());

// Challenge

var multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
