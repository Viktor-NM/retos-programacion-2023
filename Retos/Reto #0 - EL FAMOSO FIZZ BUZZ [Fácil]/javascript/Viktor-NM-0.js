/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const numbers = Array.from({length: 100}, (x, i) => {
    if ((i+1) % 3 === 0 ) return 'fizz'
    if ((i+1) % 5 === 0 ) return 'buzz'
    if ((i+1) % 3 === 0 && (i+1) % 5 === 0) return 'fizzbuzz'
    return (i+1)
})

numbers.map(number => console.log(number))
