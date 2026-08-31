class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let sumMap = {}
    function findHappy(n){
        let sum = 0
        for(let c of n){
            sum = sum + +c*+c
        }
        if(sum===1){
            return true
        }
        else {
            if(sumMap[sum]){
                return false
            }
            sumMap = {
                ...sumMap,
                [sum]: true
            }
            return findHappy(sum+"");
        }
        
    }
    return findHappy(n+"")
    }
}
