// Escribe una función llamada suma que reciba un número positivo y retorne la suma de todos los números desde 1 hasta ese número.

// escribe la función suma acá
function suma(num) { //función suma con el parámetro num
    let total = (num * (num + 1)) / 2 //creamos la variable total que va a representar la suma de los números naturales desde el 1 hasta el número num.
    return total    
}
// código de prueba
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120