// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


var twoSum = function(nums, target) {
    // Create an object to store numbers we've seen and their indices
    const numIndices = {};
    
    // Iterate through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const neededNum = target - currentNum;
        
        // Check if the needed number is already in the object
        if (neededNum in numIndices) {
            // If found, return the indices of the current number and the needed number
            return [numIndices[neededNum], i];
        }
        
        // If not found, add the current number and its index to the object
        numIndices[currentNum] = i;
    }
    
    // Return an empty array if no solution is found
    return [];
};
