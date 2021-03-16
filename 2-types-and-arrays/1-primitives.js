// // 类型推断
// let a = 1;
// console.log(typeof a)
// a = "Jack";
// console.log(typeof a)

// // JavaScript 字符串
// // 字符串是存储字符的变量。
// // 字符串可以是引号中的任意文本。您可以使用单引号或双引号或反引号
// let name = 'Jack';
// let age = 18;
// let reminder1 = `${name} is ${age}`;
// let reminder2 = name + ' is ' + age;
// console.log(reminder1)
// console.log(reminder2)

// console.log(reminder1.charAt(1)); // a
// console.log(reminder1.indexOf('a')); // 1
// console.log(reminder1.indexOf('b')); // -1
// console.log(reminder1.replace('Jack', 'Tom')); // Tom is 18 不改之前的，返回新的字符串
// console.log(reminder1.substring(0, 4)); // Jack 不包括end index 不改之前的，返回新的字符串
// console.log(reminder1.toLowerCase()); // jack is 18   不改之前的，返回新的字符串
// console.log(reminder1.toUpperCase()); // JACK IS 18  不改之前的，返回新的字符串
// console.log('   Jack is 18   '.trim()); // Jack is 18   不改之前的，返回新的字符串


// // JavaScript 数字
// // JavaScript 只有一种数字类型。数字可以带小数点，也可以不带：
// let x1=34.01;      //使用小数点来写
// console.log(x1);
// let x2=34;         //不使用小数点来写
// console.log(x2);
// // 极大或极小的数字可以通过科学（指数）计数法来书写：
// let y=123e5;      // 12300000
// console.log(y);
// let z=123e-5;     // 0.00123
// console.log(z);
// // 数字类型的是有上限的
// // -2^53  ------  2^53   (包含边界)；
// console.log(Number.MAX_VALUE)

// // JavaScript 布尔
// // 布尔（逻辑）只能有两个值：true 或 false。
// let x=true;
// let y=false;
// console.log(typeof x);
// // 布尔常用在逻辑判断

// // Undefined 这个值表示变量不含有值。
// let age;
// console.log(age); // undefined
// console.log(Number(age)); // NaN
// console.log(+age); // NaN
// // null表示这个变量含有值但值是null
// age = null;
// console.log(age); // null
// console.log(Number(age)); // 0
