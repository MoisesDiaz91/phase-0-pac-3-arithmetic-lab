function add(a, b){
    return a + b;
}

number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}

function makeInt (string) {
 return parseFloat(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string, 7.8)
}

function subtract (a, b){
 return (a - b)
}

function Add (a, b){
    return (a + b)
   }

function divide (a, b){
    return (a / b)
   }

function multiply (a, b){
    return (a * b)
   }