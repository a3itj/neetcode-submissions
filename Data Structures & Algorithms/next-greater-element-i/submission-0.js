class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        return nums1.map(v => {
        // 1. Find where the element lives in nums2
        const startIdx = nums2.indexOf(v);
        
        // 2. Look forward from that index to find the first greater element
        for (let j = startIdx + 1; j < nums2.length; j++) {
            if (nums2[j] > v) {
                return nums2[j]; // Return immediately if found
            }
        }
        
        return -1; // Default to -1 if no greater element exists
    });
    }
}
