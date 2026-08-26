class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let str = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
        let half = str.length/2;
        let isPal = true;
        let i = 0;
        while(i<= half){
            
           if(str[i] !== str[str.length-i-1]) {
            isPal =  false;
           }
           i++
        }
        return isPal
    }
}
