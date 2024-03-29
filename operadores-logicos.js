function isDivisibleByThreeAndFive (number) {
    return number % 3 === 0 && number % 5 === 0;
}

console.log(isDivisibleByThreeAndFive (15));
console.log(isDivisibleByThreeAndFive (9));
console.log(isDivisibleByThreeAndFive (25));