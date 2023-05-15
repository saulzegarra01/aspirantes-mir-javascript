// Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined
function max(array) {
    if (array === []) {
        return undefined
    } else {
        let mayor = array[0]
        for (let i = 0; i < array.length-1; i++){
            if (mayor >= array[i+1]) {
            }else{
                mayor = array[i+1]
            }
        }
        return mayor
        }
    }
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
