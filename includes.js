// Definimos un array de números
const numbers = [2, 4, 6, 8, 10];

// Pedimos al usuario que introduzca un número
const userNumber = parseInt(prompt("Introduce un número:"));

// Usamos el operador exponencial para calcular el cuadrado del número introducido por el usuario

const squaredNumber = userNumber ** 2;

// Comprobamos si el cuadrado del número está incluido en el array de números

if (numbers.includes(squaredNumber)) {
  console.log(`El número ${userNumber} tiene un cuadrado en el array : ${squaredNumber}`);
} else {
  console.log(`El número ${userNumber} no tiene un cuadrado en el array`);
}

