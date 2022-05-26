// Obtenemos el numero del DNI por pantalla
let string_introducida = prompt('Introduce una cadena de texto: ');

function mayuscula(letra) {

    if (letra === letra.toUpperCase()) {
        return true;
    } else {
        return false;
    }

}

function minuscula(letra) {

    if (letra === letra.toLowerCase()) {
        return true;
    } else {
        return false;
    }

}

function min_o_mayus(cadena) {

    var mayus = false;
    var minus = false;

    for (let index = 0; index < cadena.length; index++) {

        if (!mayus) {
            mayus = mayuscula(cadena.charAt(index));
        }
        if (!minus) {
            minus = minuscula(cadena.charAt(index));
        }
        
    }

    if (mayus && minus) {

        console.log("Contiene Mayusculas y Minusculas");

    } else if (mayus) {

        console.log("Contiene solo Mayusculas");

    } else if (minus) {

        console.log("Contiene solo Minusculas");

    }

}

min_o_mayus(string_introducida);



