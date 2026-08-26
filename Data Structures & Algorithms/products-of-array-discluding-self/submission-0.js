class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length);
        let leftProdcut = 1;
        let rightProduct= 1;
        nums.forEach((v,i)=>{
            result[i] = leftProdcut;
            leftProdcut = leftProdcut *v
        })
        for(let i = nums.length-1; i>=0; i--){
            result[i] = result[i] * rightProduct;
            rightProduct = rightProduct * nums[i]
        }
        return result;
    }
}
