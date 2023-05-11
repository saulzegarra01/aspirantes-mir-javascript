// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona. El BMI se calcula con la siguiente fórmula: peso / altura^2.
// escribe la función bmi acá

function bmi(peso, altura) { //definimos la función bmi con los parámetros peso y altura
    let imc = peso / altura ** 2 //asignamos a la variable imc el resultado de peso/altura**2
    return imc 
}

// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) // 16.979591836734695
