// Crea una variable llamada pedro de tipo objeto literal.
let pedro = {
nombre:"Pedro Perez",
edad: 30,
activo: true,
hobbies: ["programar", "squash", "piano"],
saluda: function () {
        let a = "Hola, me llamo " + pedro.nombre + "."
        return a
        }
}

// Imprime en la consola el valor de la llave edad.
console.log(pedro.edad);

// Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
console.log(pedro.estatura);

// Elimina la propiedad con llave activo.
delete pedro.activo;
console.log(pedro.activo);

// Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
let llaves = Object.keys(pedro);
for (let i=0 ; i < llaves.length; i++) {
    console.log(llaves[i] + ":" + pedro[llaves[i]]);
        }
// Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
console.log(pedro.saluda());
 
