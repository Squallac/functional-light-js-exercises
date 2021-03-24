"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}
function pickNumber(num, numbers) {
  const existInLotteryNums = numbers.indexOf(num) !== -1;

  if (!existInLotteryNums) {
    // numbers = numbers.slice();
    // numbers.push(num);
    numbers = [...numbers, num];

    numbers.sort(function byAscNum(s1, s2) {
      console.log(s1);
      console.log(s2);
      return s1 - s2;
    });
  }
  return numbers;
}

var luckyLotteryNumbers = [];

function getOrderedLotteryNumbers() {
  luckyLotteryNumbers = luckyLotteryNumbers.slice();
  return sortLotteryNumbers();

  function sortLotteryNumbers() {
    luckyLotteryNumbers.sort(function byNum(s1, s2) {
      console.log("prro");
      console.log(s1);
      console.log(s2);
      return s1 < s2;
    });
    return luckyLotteryNumbers;
  }
}

while (luckyLotteryNumbers.length < 6) {
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  );
}

console.log(getOrderedLotteryNumbers());
