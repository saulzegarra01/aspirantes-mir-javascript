// Crea un objeto literal llamado "persona" con las siguientes propiedades: nombre, edad, ciudad y profesión.
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Lima",
    profesion: "Doctor"
}
// Imprime en la consola el objeto "persona" completo.
console.log(persona)

// Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
function presentacion() {
    cadena = persona.nombre + " " + persona.edad + " " + persona.ciudad
    return cadena
}

//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
mensaje = presentacion()
console.log(mensaje)

//Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
persona.hobbies = ["Futbol","Ajedrez", "Leer"]

//Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log(persona.hobbies)

//Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.

for (let i=0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}