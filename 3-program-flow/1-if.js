// // if - number
// if (5 === 5) { 	// true 
//     console.log('Yes');
// }
// if (5 > 10) { 	// false 
//     console.log('No');
// }
// if (5 >= 5) { 	// true 
//     console.log('Yes');
// }
// if ("" === 0) {
//     console.log('"" === 0');
// } else {
//     console.log('"" !== 0');
// }
// if ("" == 0) {
//     console.log('"" == 0');
// } else {
//     console.log('"" != 0');
// }


// // if - string ===
// let name = 'Jack';
// let weight = 130;
// if (name === 'Jack') {
//     weight = 180;
// }
// console.log(weight); // ? Edward?


// // if !==
// let name = 'Jack';
// let weight = 180;
// if (name !== 'Jack') {
//     weight = 130;
// }
// console.log(weight); // ? Edward?


// // if else
// let name = 'Jack';
// let weight;
// if (name === 'Jack') {
//     weight = 180;
// } else {
//     weight = 130;
// }
// console.log(weight); // ? Edward?


// // if ... else if ... else ...
// let name = 'Jack';
// let weight;
// if (name === 'Jack') {
//     weight = 180;
// } else if (name === 'Tom') {
//     weight = 200;
// } else {
//     weight = 130;
// }
// console.log(weight); // ? Edward?

// // 使用switch
// // case1
// let name = 'Tom';
// let weight;
// switch (name) {
//     case 'Jack':
//         weight = 180;
//         console.log(`${name}'s weight is ${weight}`);
//         break;
//     case 'Tom':
//         weight = 200;
//         console.log(`${name}'s weight is ${weight}`);
//         break;
//     default:
//         weight = 130;
//         console.log(`${name}'s weight is ${weight}`);
//         break;
// }

// // case2
// let name = 'Tom';
// let weight;
// switch (name) {
//     case 'Jack':
//         weight = 180;
//         console.log(`${name}'s weight is ${weight}`);
//     //     break;
//     case 'Tom':
//         weight = 200;
//         console.log(`${name}'s weight is ${weight}`);
//     //     break;
//     default:
//         weight = 130;
//         console.log(`${name}'s weight is ${weight}`);
//     //     break;
// }
// // "Tom's weight is 200"
// // "Tom's weight is 130"


// // Looping with for
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }


// // Looping with while
// let count = 0;
// while (count < 3) {
//     console.log(count);
//     count++;
// }