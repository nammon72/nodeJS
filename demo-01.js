/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// Bài giải
function longSort() {
  let nums = [3, 7, 2, 5, 8, 4, 6, 0, 11, 1];
  // if (nums.length >= 0 && nums.length <= 105)
  let middle,
    newNums = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        middle = nums[i];
        nums[i] = nums[j];
        nums[j] = middle;
      }
      if (nums[i] == nums[j] + 1) {
        newNums += 1;
      } else {
        newNums += 1;
      }
    }
  }
  console.log(nums);
  console.log(newNums);
}
longSort();

// https://dev.to/seanpgallivan/solution-longest-consecutive-sequence-27ni?signin=true
