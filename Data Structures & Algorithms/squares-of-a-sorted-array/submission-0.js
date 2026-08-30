class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        return nums.map((v)=> v*v).sort((a,b)=>{ return a-b > 0 ? 1:-1})
    }
}
