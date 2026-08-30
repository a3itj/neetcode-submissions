class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        let feqMap = new Map()
    nums.forEach((v,i)=>{
        feqMap.set(v, (feqMap.get(v) || 0) + 1 )
    })
    let sorted = [...nums].sort((a,b)=>{
        let dif = feqMap.get(a)-feqMap.get(b);
        if(dif==0){
            return a-b > 0 ? -1:1;
        }
        return feqMap.get(a)-feqMap.get(b) > 0 ? 1:-1
    })
    return sorted;
    }
}
