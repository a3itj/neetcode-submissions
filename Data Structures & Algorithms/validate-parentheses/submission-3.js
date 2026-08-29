class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bracketMap = new Map();
        bracketMap.set( "}", "{");
        bracketMap.set(")", "(")
        bracketMap.set("]", "[");

        let stack = [];


       for (let c of s) {
            if(bracketMap.get(c)){
                if( stack.length > 0 && stack[stack.length - 1]=== bracketMap.get(c))
                stack.pop()
                else {
                return false
                }
            } else {
                 stack.push(c)
            }
            
        }
        return stack.length ===0;


    }
}
