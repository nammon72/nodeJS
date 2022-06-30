/* 
Given an unsorted array of integersarr, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input:arr = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input:arr = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <=arr.length <= 105
-109 <=arr[i] <= 109

*/

// Bài giải
const nums = [
  0, 1, 2, 2, 3, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 9, 10, 15, 0,
  17,
];
const getNum = (nums) => {
  let middle;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        middle = nums[i];
        nums[i] = nums[j];
        nums[j] = middle;
      }
    }
  }
  let current = 1,
    longest = 1;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        current += 1;
      } else {
        longest = Math.max(longest, current);
        current = 1;
      }
    }
    // console.log(longest);
    // console.log(current);
  }
  return console.log(Math.max(longest, current));
};
getNum(nums);
