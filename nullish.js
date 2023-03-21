class Person {
  #fullName = null; // Variable privada inicializada a null

  constructor(fullNameValue) {
    // Utiliza el operador nullish para asignar el valor de la variable privada sólo si no es null o undefined
    this.#fullName ??= fullNameValue;
  }

  getFullName() {
    return this.#fullName;
  }
}

const person1 = new Person("John Doe");
const person2 = new Person(null);

console.log(person1.getFullName()); // Salida: "John Doe"
console.log(person2.getFullName()); // Salida: null
