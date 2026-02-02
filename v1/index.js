function calculer(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Erreur: division par zéro';
        default:
            return 'Opération non reconnue';
    }
}

// Exemples d'utilisation
console.log(calculer(10, 5, '+'));  // 15
console.log(calculer(10, 5, '-'));  // 5
console.log(calculer(10, 5, '*'));  // 50
console.log(calculer(10, 5, '/'));  // 2