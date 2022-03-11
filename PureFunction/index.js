/**
 * 纯函数通常有以下两个特征：
 * 1. 当输入相同时，总是返回相同的输出。
 * 2. 函数作用域外没有副作用
 */

// Pure Function
// const add = (x, y) => x + y;
// const concat = (arr, value) => [...arr, value];
// const order = arr => [...arr].sort((a, b) => a - b);


// Impure Function
const add = (x) => x + Math.random();
const concat = (arr, value) => { arr.push(value); return arr }; // arr 被改变，即作用域外的变量被影响
const order = arr => arr.sort((a, b) => a - b); // arr 被改变