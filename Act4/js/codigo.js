var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3].length > valores[4].length) {
    console.log("El texto más largo: "+valores[3])
}else{
    console.log("El texto más largo: "+valores[4])
}

// Operadores necesarios para obtener true y false
console.log("Operando \'+\' true: "+(valores[0]+valores[2]));

console.log("Operando \'*\' false: "+(valores[0]*valores[2]));

// Operaciones matemáticas
console.log("Suma: "+(valores[1]+valores[5]));
console.log("Resta: "+(valores[1]-valores[5]));
console.log("División: "+(valores[1]/valores[5]));
console.log("Multiplicación: "+(valores[1]*valores[5]));
console.log("Potenciación: "+(Math.pow(valores[1], valores[5])));

