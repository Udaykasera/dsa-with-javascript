/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp=new Map();
    for(let i=0; i<nums.length; i++){

        let rem=target-nums[i];
        if(mp.has(rem)){
            return [mp.get(rem),i];

        }
        else 
        mp.set(nums[i],i);
    }
};
// --- Test Cases ---
console.log("Test Case 1:", twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log("Test Case 2:", twoSum([3, 2, 4], 6));      // Expected: [1, 2]
console.log("Test Case 3:", twoSum([3, 3], 6));         // Expected: [0, 1]