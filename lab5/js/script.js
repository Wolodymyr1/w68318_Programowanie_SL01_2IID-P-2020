// let age = prompt("Years old")
// let messange = (age < 18) ? 'You are young': 'You are enoght old';
// alert(messange)
// let temp_cel =Number(prompt("Give a temperature in cel"))
// farengeit = temp_cel * 1.8 +32
// console.log(farengeit)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const summa = array.reduce((a, b) => (a + b));

const even = array.filter(x=> x % 2 == 0);

const new_array = array.map(x=> x * 3);

const avg = summa / array.length;

const max = Math.max(...array);

const index = array.findIndex(x => x== max);

function Fibonacci(n) {
    if(n < 2) return n;
    return (Fibonacci(n - 1) + Fibonacci(n - 2));
}

for(i = 0; i < 100; i++) console.log(Fibonacci(i));