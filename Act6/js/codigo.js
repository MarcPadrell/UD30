var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Obtenemos el numero del DNI por pantalla
let numDni = prompt('Introduce el numero del DNI: ');

let letra_usuario_dni = prompt('Introduce la letra del DNI: ');

if (numDni > 0 && numDni < 99999999) {

    // Obtenemos el resto de la división
    let resultado = numDni % 23;

    let letraDni = letras[resultado];

    console.log('Letra del DNI: '+letraDni);

    if (letra_usuario_dni.toUpperCase != letraDni.toUpperCase) {
        alert('La letra indicada no es correcta!!');
    }else{
        alert('El número y la letra indicada son correctas!!');
    }

} else {
    alert('El número proporcionado no es válido!!')
}



