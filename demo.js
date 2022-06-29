/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


Constraints:

1 <= n <= 104

RAW Paste Data
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


Constraints:

1 <= n <= 104

create new paste  /  syntax languages  /  archive  /  faq  /  tools  /  night mode  /  api  /  scraping api  /  news  /  pro
privacy statement  /  cookies policy  /  terms of serviceupdated  /  security disclosure  /  dmca  /  report abuse  /  contact

*/
// Bài giải:
function numberN(n) {
  if (typeof n === "string" || n < 1 || n > 104) {
    console.log(
      "Bạn nhập sai điều kiện! \nP/s: Điều kiện: typeof n === 'number'  và 1 <= n <= 104"
    );
  } else {
    const numbArray = [];
    let text;
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        text = "FizzBuzz";
      } else if (i % 3 === 0 && i % 5 !== 0) {
        text = "Fizz";
      } else if (i % 3 !== 0 && i % 5 === 0) {
        text = "Buzz";
      } else {
        text = i.toString();
      }
      numbArray.push(text);
    }
    return numbArray;
  }
}
numberN(15);
