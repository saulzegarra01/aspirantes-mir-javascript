// Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
let receta = {
    
}

// Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre = "Sandwich"

// Agrégale una propiedad ingredientes con un arreglo vacío. Agrega un objeto al arreglo ingredientes con las siguientes propiedades: nombre: “Pan” y cantidad: 2
//Agrega otro ingrediente al arreglo con las siguientes propiedades: nombre: “Queso” y cantidad: 1

receta.ingredientes = [
    { nombre: "Pan", cantidad: 2 },
    { nombre: "Queso", cantidad: 1 }
]

// Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer “Pan”.
console.log(receta.ingredientes[0].nombre);

// Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let total = 0;
for (let i = 0; i < receta.ingredientes.length; i++){
    total = total + receta.ingredientes[i].cantidad;
}
console.log("La cantidad de ingredientes en total es " + total)
