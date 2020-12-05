'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }else{
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value
}
}



const length = 1000;
for (let i = 0; i <= length; i++) {
    console.log(`${i}のフィボナッチ数列は${fib(i)}です`);
}

//fib(4)のとき、fib(3) + fib(2)
//fib(3)のときの数字とfib(2)のときの数字を足すということ