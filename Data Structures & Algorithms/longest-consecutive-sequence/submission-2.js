class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums || nums.length === 0) return 0;

        // 1. Sort numbers numerically
        nums.sort((a, b) => a - b);

        let longestArr = [nums[0]];
        let currentArr = [nums[0]];

        for (let i = 1; i < nums.length; i++) {
            // Skip duplicates safely
            if (nums[i] === nums[i - 1]) {
                continue;
            }

            // Check if consecutive
            if (nums[i] === nums[i - 1] + 1) {
                currentArr.push(nums[i]);
            } else {
                // Sequence broke, compare lengths and save the winner
                if (currentArr.length > longestArr.length) {
                    longestArr = [...currentArr];
                }
                // Reset tracking array with the current element
                currentArr = [nums[i]];
            }
        }

        // Final check for the last tracking sequence
        if (currentArr.length > longestArr.length) {
            longestArr = currentArr;
        }

        return longestArr.length;
       
    }
}
