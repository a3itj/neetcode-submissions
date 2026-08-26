class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sumArray = [];
        // 1. Sort the array in ascending order
        nums.sort((a, b) => a - b);
        
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate values for the first element 'i'
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            let left = i + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                const currentSum = nums[i] + nums[left] + nums[right];
                
                if (currentSum === 0) {
                    sumArray.push([nums[i], nums[left], nums[right]]);
                    
                    // Skip duplicate values for the second element 'left'
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicate values for the third element 'right'
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    // Move both pointers inward
                    left++;
                    right--;
                } else if (currentSum < 0) {
                    left++; // Sum is too small, make it bigger by moving left pointer right
                } else {
                    right--; // Sum is too big, make it smaller by moving right pointer left
                }
            }
        }
        return sumArray;
    }
}
