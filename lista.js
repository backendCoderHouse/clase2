const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4
  }
];

// Obtener todos los tipos de productos
const allProducts = [];
objetos.forEach(objeto => {
  Object.keys(objeto).forEach(producto => {
    if (!allProducts.includes(producto)) {
      allProducts.push(producto);
    }
  });
});
console.log(allProducts); // Output: ['manzanas', 'peras', 'carne', 'jugos', 'dulces', 'sandias', 'huevos', 'panes']

// Obtener el total de productos de todos los objetos
const totalProducts = objetos.reduce((total, objeto) => {
  const values = Object.values(objeto);
  return total + values.reduce((subtotal, value) => subtotal + value, 0);
}, 0);
console.log(totalProducts); // Output: 25
