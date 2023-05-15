// Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.
function join(array) {
    let cadena2 = ""
    for (let i = 0; i < array.length; i++){
        cadena2 = cadena2.concat(array[i]) + " "
    }
    return cadena2
}

