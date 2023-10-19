"use strict"

function showMultiplicationTable(num){
    for (let i = 1 ; i < 10; i++){
        console.log( num ,  ' x ' + i + ' = ' + num * i)

    }
}
console.log(showMultiplicationTable(7))



// const random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

function randomEvenOrOdd(random) {
     let number = (random % 2 === 0)
         if (number === true){
             return "Even"
         } else {
             return "Odd"
         }

}

for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    console.log(random + " is " + randomEvenOrOdd(random))

}

for (let i = 1; i <= 9; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}

for (let i = 100; i >= 5; i -= 5) {
      console.log(i)

}




