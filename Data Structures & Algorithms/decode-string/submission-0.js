class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];        // holds [suspendedString, repeatCount] pairs
        let current = '';
        let num = 0;
        for(let c of s){
            if(c>='0' && c<='9'){
                num = num*10 + +c;
            } else if(c=== '['){
                stack.push([current, num]);
                current = '';
                num = 0;
            }else if(c=== ']'){
                const [suspended, k] = stack.pop();
                current = suspended + current.repeat(k);
            } else {
                current = current + c;
            }
        }
        return current;
    }
}
