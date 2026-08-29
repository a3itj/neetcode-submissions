class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        //let maxIndex = []
        let len = prices.length;
        for(let i=0; i<len; i++){
            for(let j=i+1; j<len; j++){
                if(prices[j] - prices[i]> maxProfit){
                    maxProfit = prices[j] - prices[i];
                }
             }
        }
        return maxProfit;
    }
}
