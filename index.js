// 1. Imprime por consola el string 'Hello World'.
console.log('hello world');

// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let x = 'manuel';
const z = 'alfredo';
console.log(x, z);
// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.
x = 'antonio';
console.log(x);
// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
let number = 2;
let number1 = 2;
console.log(number + number1);
// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
let a = 'hola';
let b = 'mundo';
console.log(a + ' ' + b);

// 6. Crea una función que imprima por consola el string 'Hello World'.
function greet() {
  console.log('Hello world');
}
const greet2 = function greet() {
  console.log('Hello world');
};
const greet3 = () => {
  console.log('hello world');
};
greet();
greet2();
greet3();

// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
const multi = (x, z) => {
  console.log(x * z);
};
multi(5, 4);

// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
const cubo = (x) => {
  console.log(x ** 3);
};
cubo(5);

// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro.
function rect() {
  console.log(x * x, 'm2');
}
rect(3, 4);

// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
const random = () => {
  const n = Math.random();
  const result = Math.trunc(n * 11);
  console.log(result);
};
for (let i = 0; i < 10; i++) {
  random();
}
// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
// const numberrandom = () => {
//   const randomNumber = Math.trunc(Math.random() * 10 + 1);
//   let num = prompt('introduce un numero del 1 al 10');
//   console.log(randomNumber);
//   if (num === randomNumber) {
//     return 'felicidades acertastes';
//   }
//   return 'no has acertado';
// };
// numberrandom();

// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
const oddOrven = (num) => {
  if (num % 2) {
    console.log(`el numero ${num} es impar`);
    return;
  }
  console.log(`el numero ${num} es par`);
};
oddOrven(3);
oddOrven(6);
// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
const reverseString = (word) => {
  const changedString = word.split('').reverse().join('');
  return changedString;
};
console.log(reverseString('casa'));
// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola
const multiplication = (num) => {
  for (let i = 0; i <= 10; i++) {
    console.log(num * i);
    // console.log(`${num} x ${i} = ${num * i}`);
  }
};
multiplication(5);
// preguntar como poner el return y meter la llamada dentro del console log

// 15. Crea una función que reciba un número por parámetros y retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % 1 === 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime);
