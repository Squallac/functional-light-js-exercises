"use strict";

// abba

// abccba
// bccb
// cc
// ''

function isPalindrome(str) {
  // invalid cases, base condition
  if (!str && str != "") {
    return;
  }

  // special conditions
  if (str.length === 1 || str === "") {
    return true;
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  if (firstChar !== lastChar) {
    return false;
  }

  const substring = str.slice(1, str.length - 1);
  console.log("substring", substring);

  return isPalindrome(substring);
}

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
