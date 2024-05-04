// Comentario de linea

/**
 * Comentario multilinea
 */

// javaScript -> camelCase

// otra_variable -> snake_case

// MiClase -> PasqalCase


// VARIABLES Y CONSTANTES

// let miPrimerVariable;

// const MI_CONSTANTE = 10;

// let a = 5

// let A = 10


// TIPOS DE DATOS

let numero1 = 10

let numero2 = 20


let cadena = "Esto es una cadena de caracteres"

let str = 'Esto también'

let templateString = `Comilla invertida`


let booleano1 = true

let booleano2 = false

let indefinido

let nulo = null


// OPERACIONES BÁSICAS MATEMÁTICAS

let suma = 10 + 2

let resta = 40 - 20

let var1 = 100

let var2 = 200

let multiplicacion = var1 * var2

let divisiona = var1 / var2

let restoModulo = numero1 % numero2


// OPERACIONES CON STRINGS 

// Manera poco correcta

let texto = 'texto'

let concatenado = 'String1' + texto

// Manera correcta

let concatenadoCorrecto = `String1 ${texto}`


// CONSOLE
// console.log(concatenadoCorrecto)
// console.error('Esto es un error')
// console.warn('Advertencia')

// PROMPT

// let input = prompt('Ingrese un nombre')

// console.log(input)

// EJERCICIO 1

// let nombre = prompt('Ingresá tu nombre')
// let apellido = prompt('Ingresá tu apellido')

// let resultado = `${nombre} ${apellido}`
// console.log(resultado)


// OBJETOS

const curso = {
    nombre: 'JavaScript',
    duracion: '18 meses',
    nivel: 'básico',
    cuotas: null
}
// console.log(curso)

curso.costo = 100
curso.duracion = '10 meses'

delete curso.costo

// console.log(curso['cuotas'])


// ARRAY

const frutas = ['manzana', 'naranja', 'banana', 'kiwi']

console.log(frutas)

frutas.push('mandarina')

console.log(frutas)

frutas.pop()

console.log(frutas)

frutas.shift()

console.log(frutas)

frutas.unshift('limón')

console.log(frutas)

let cadenaFrutas = frutas.join('-')
console.log(cadenaFrutas)


let verduras = ['papa', 'cebolla']

console.log(frutas.concat(verduras))

// ********************************
let vocales = 'ae-iou'
let arrayVocales = vocales.split('-')
console.log(arrayVocales)
// ********************************



