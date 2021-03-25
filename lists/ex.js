"use strict";

function getNumber() {
  return 2;
}

function getSecondNumber() {
  return 5;
}

function getFuncFromValue(value) {
  // this is called constant in some libraries
  const func = () => value;
  return func;
}

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

// function addn(...fns) {
//   let acc = 0;
//   for (let fn of fns) {
//     const prevFn = getFuncFromValue(acc);
//     acc = add2(fn, prevFn);
//   }

//   return acc;
// }

function addn(...fns) {
  const reduceFn = (acc, currentFn) => {
    const prevFn = getFuncFromValue(acc);
    return add2(currentFn, prevFn);
  };

  return fns.reduce(reduceFn, 0);
}

console.log(add(1, 1)); // 2

console.log(addn(getNumber, getSecondNumber)); // 7
console.log(addn(getNumber, getSecondNumber, getFuncFromValue(3))); // 10
// Put your code here! :)

var nums = [1, 5, 5, 2, 3, 4, 6, 8, 8, 10, 12, 12, 0, 99, 99, 3];
nums = nums
  .reduce(function unique(newList, currentNum) {
    if (!newList.includes(currentNum)) return [...newList, currentNum];

    return newList;
  }, [])
  .filter(function isEven(v) {
    return v % 2 === 0;
  })
  .map(getFuncFromValue);

console.log(nums);

nums = addn(...nums);

console.log(nums);
