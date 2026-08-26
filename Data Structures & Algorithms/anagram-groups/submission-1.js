class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {}
        strs.forEach((v,i)=>{
            
            let srted= v.split('').sort((a,b)=>{return a>b ? 1:-1 }).join('');
            
                group[srted] = group[srted] ? [...group[srted], v]: [v];
        })
        return Object.values(group);

    }
}
