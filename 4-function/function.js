// 函数声明
function showMessage1() {
    console.log('in a function');
}
// 函数表达式
let showMessage2_1 = function () {
    console.log('in a function');
};
let showMessage2_2 = () => {
    console.log('in a function');
};


// Passing information to Function
function showMessage(message) {
    console.log(message);
}
showMessage('First Message');
showMessage('Second Message');
// 默认参数
function defaultFun(name = 'Jack') {
    console.log(`detail name is ${name}`);
}
defaultFun(); // "detail name is Jack"
defaultFun('Tom'); // "detail name is Tom"
// 不定参数 - 允许将一个不定数量的参数表示为一个数组
function sumArgs(...numbers) {
    console.log(numbers);
}
sumArgs(1, 2, 3, 4); // [1, 2, 3, 4]
// 解构函数
function greet({ name }) {
    console.log(`name is ${name}`)
}
greet({
    name: 'Jack',
    age: 180
}); // "name is Jack"



// Function Return Values
function triplePlus(value) {
    let newValue = value + value + value;
    return newValue;
}
console.log(triplePlus(3)); // 9
console.log(triplePlus('3')); // 333


// Function Scope
function triplePlus(value) {
    let newValue = value + value + value;
    return newValue;
}
triplePlus(3);
console.log(newValue); // Reference Error: newValue is undefined
