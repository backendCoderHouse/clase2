//DECLARAMOS EL OBJETO
const person = {
    name: 'Juan',
    age: 30,
    city: 'Madrid',
    country: 'Spain'
};

// DESTRUCTURAMOS EL OBJETO Y UTILIZAMOS EL OPERADOR REST
const { name, age, ...address } = person;
console.log(name);
console.log(age);
console.log(address);

// OPERADOR SPREAD ( DESCOMENTAR Y COMENTAR LO ANTERIOR)


/*
const updatedPerson = {
    ...person,
    age: 31
};

console.log(updatedPerson); // Output: {name: 'Juan', age: 31, city: 'Madrid'}*/