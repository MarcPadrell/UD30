// Obtenemos el numero del DNI por pantalla
let num_factorial = prompt('Introduce un numero para hacer el factorial: ');

function factorial(n) {

    let suma_fact = 1

    for (let index = 1; index <= n; index++) {

        suma_fact = suma_fact * index;

    }

    return suma_fact;

}

console.log('Factorial de ' + num_factorial + ' és: ' + factorial(num_factorial));




