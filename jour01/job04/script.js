function bisextile(année) {
    return (année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0);
}

// Test dans la console
console.log(bisextile(2024)); // true
console.log(bisextile(2023)); // false
console.log(bisextile(2000)); // true
console.log(bisextile(1900)); // false
