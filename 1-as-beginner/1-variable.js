// var变量提升
(function test() {
    var x = 1;
    {
        var x = 2;
        console.log(x);
    }
    console.log(x);
})();


// var变量不提升
(function test() {
    let x = 1;
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
})();



// 改变值 - 报错
// const name = "Jack";
// name = "Tom";

// 改变引用的属性值 - 不报错
// const obj = {
//     name: "Jack"
// };
// obj.name = "Tom";
// console.log(obj);