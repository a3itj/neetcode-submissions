class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         if (strs.length === 0) return '';
        let encodetSTR = strs.reduce((acc, next)=>{
            return `${acc}#${next.length}#${next}` 
        }, '')
        return encodetSTR;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //#5#Hello#5#World
    decode(str) {
        if (str.length === 0) return [];
        let i = 0;
        let decodedArr = str.split(/#\d+#/).slice(1);
    
        return decodedArr;
    }
}
