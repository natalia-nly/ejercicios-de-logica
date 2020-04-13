// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
function greatestElement(numbers) {
  let greatest = 0;
  numbers.map(function(num){
    if (num > greatest){
      greatest = num;
    }
  });

  return greatest;
}
let numeros = [10,9,5,20,15];
console.log("el elemento mas grande es: " + greatestElement(numeros));

            
// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
function suma(numbers) {
  return numbers.reduce((acc,num) => acc + num);
}

console.log("la suma es: " + suma(numeros));
            
            
// 3 - Escriba una función que retorne true si una String es un palíndromo
function palindromo(frase){

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
  
  frase = removeAccents(frase);

  let fraseNormal = frase.split(" ").join("").toLowerCase();
  let fraseReves1 = frase.split("").reverse().join("");
  let fraseReves = fraseReves1.split(" ").join("").toLowerCase();

  return fraseNormal == fraseReves;
};

console.log(palindromo("Amo la pacífica Paloma"));


// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function combinarArrays(array1, array2) {
  let newArray = [];

  array1.forEach(element => {
        array2.forEach(element => {
          newArray.push(array1[element]);
          newArray.push(array2[element]);
    });
  });

  return newArray;
};

console.log(combinarArrays(["a","b","c"], [1,2,3]));

// 5 - Escribe una función que calcule la lista de los primeros 100 números Fibonacci 
// Los primeros números Fibonacci son 1 y 1. 
// El enésimo numero Fibonacci se calcula agregando el enésimo-1 con el enésimo-2
//  1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

let fibonacci1 = 1;
let fibonacci2 = fibonacci1 + 1; 

let fibonacciArray = [];

while(fibonacciArray.length < 101){
  let result = fibonacci1 + fibonacci2;
  fibonacciArray.push(result);
  fibonacci1 = fibonacci2;
  fibonacci2 = result;
}


console.log(fibonacciArray);

// 6 - Escribir función para tomar un array de Strings e imprimir, cada palabra en una línes
// dentro de un cuadro retangular. 
// Por ejemplo la lista ["Hello", "World", "in", "a", "frame"] debería salir así:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function arrayFrame (array) {
  let greatest = 0;
  array.map(function(word){
    if (word.length > greatest){
      greatest = word.length;
    }
  });

  let asterisco = "*";
  let espacio = " ";
  let franja = asterisco.repeat(greatest + 4);

  console.log(franja);

  array.forEach(element => {
    let espacios = "";
    if(element.length < greatest){
      espacios = espacio.repeat(greatest - element.length);
    } 
    console.log(`* ${element}${espacios} *`);
  });

  console.log(franja);

}

console.log(arrayFrame(["Hello", "World", "in", "a", "frame"]));


// 7 - Escribir función para converter un texto en código-morse y vice-versa
// ej: toMorseCode("SOS") debería ser retornar "...---..."

function toMorseCode(string){
  const morse = ["· —", "— · · ·", "— · — ·", "— · ·", "·", "· · — ·", "— — ·", "· · · ·", "· ·", "· — — —", "— · —", "· — · ·", "— —", "— ·", "— — —", "· — — ·", "— — · —", "· — ·", "· · ·", "—", "· · —", "· · · —", "· — —", "— · · —", "— · — —", "	— — · ·"];
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const morseArray = [];

  let arrayString = string.toLowerCase().split("");

  arrayString.forEach(letter => morseArray.push(morse[alphabet.indexOf(letter)]));

  const morseString = morseArray.join("  ");

  return morseString;
}

console.log(toMorseCode("SOS"));


// 8 - A partir de 2 Strings, escribir un programa que encuentre la sequencia comun de caracteres más grande
// ej: subsequence("Hola soy una String", "Hola soy una otra String")
// debería retornr "Hola soy una "
// ojo que la palabra "String" también es una sequencia comun, bien como "una", "soy", la letra "a"...
// pero hay que retornar la string comun más grande posible


// 9 - If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
const oneToNine = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const decenas = ["twenty", "thirty", "fourty", "fivety", "sixty", "seventy", "eighty", "ninety"];

//Variables que agrupan números
const oneToNineteen = [];
const oneToNinetynine = []
const allNumbers = [];

//del 1 al 19
oneToNine.forEach(number => oneToNineteen.push(number));
teens.forEach(number => oneToNineteen.push(number));

//del 1 al 99
oneToNineteen.forEach(number => oneToNinetynine.push(number));
decenas.forEach(function(number){
  oneToNine.forEach(number2 => oneToNinetynine.push(number + number2));
});

//del 1 al 1000
oneToNinetynine.forEach(number => allNumbers.push(number));
oneToNine.forEach(function(number){
  allNumbers.push(number + "hundred");
  oneToNinetynine.forEach(number2 => allNumbers.push(number + "hundredand" + number2));
});
allNumbers.push("Onethousand");

function countLetters(array) {
  const result = array.join("");

  return result.length;
}

console.log(countLetters(allNumbers));


// 10 - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const resultNumbers = [];

for (let i = 0; i < 1001; i++){
  if (i % 3 === 0 || i % 5 === 0){
    resultNumbers.push(i);
  }
}

console.log(resultNumbers);
