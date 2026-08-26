class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let totalCount = {}
        nums.forEach((v,i)=>{
            if(!totalCount[v]){
                totalCount[v] = 0;
            }
            totalCount[v] = totalCount[v] +1;
        })
        
        let sortedKey = [];
        for(let [key,value] of Object.entries(totalCount)){
            sortedKey.push([key,value]);
        }
        sortedKey.sort((a,b)=>{
            return a[1] > b[1] ? -1: 1
        })
        return sortedKey.slice(0,k).map((v,i)=>{
            return v[0];
        })

    }
}
