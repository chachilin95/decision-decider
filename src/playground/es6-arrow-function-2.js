// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1))


// this keyword - no longer bound

const user = {
    name: 'Alex',
    cities: ['Dallas', 'Wilmington', 'Orlando'],
    printPlacesLived() {

        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city)

        return cityMessages
    }
}
console.log(user.printPlacesLived())

// Challenge

const multiplier = {
    numbers: [2,4,6,8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}
console.log(multiplier.multiply())