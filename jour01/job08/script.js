function estNombrePremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemples de test
console.log(sommeNombresPremiers(3, 7));  // 10 (3 et 7 sont premiers)
console.log(sommeNombresPremiers(4, 7));  // false (4 n'est pas premier)
console.log(sommeNombresPremiers(11, 13)); // 24 (11 et 13 sont premiers)
console.log(sommeNombresPremiers(9, 13));  // false (9 n'est pas premier)
