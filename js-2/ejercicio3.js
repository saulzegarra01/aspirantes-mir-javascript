// Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.
function maxIndex(array) {
    let indice=0
    if (array.length === 0) {
        return indice-1
    } else {
        let mayor = array[0]
        for (let i = 0; i < array.length-1; i++){
            if (mayor >= array[i + 1]) {
            }else{
                mayor = array[i + 1]
            }
        }
        return indice = array.indexOf(mayor)
        }
    }
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1