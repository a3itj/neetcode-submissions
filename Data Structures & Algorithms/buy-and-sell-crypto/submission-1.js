class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // maxProfit(prices) {
    //     let maxProfit = 0;
    //     //let maxIndex = []
    //     let len = prices.length;
    //     for(let i=0; i<len; i++){
    //         for(let j=i+1; j<len; j++){
    //             if(prices[j] - prices[i]> maxProfit){
    //                 maxProfit = prices[j] - prices[i];
    //             }
    //          }
    //     }
    //     return maxProfit;
    // }
    maxProfit(prices) {
        // two pointer
        let maxProfit = 0;
        let l = 0;
        let r = 1;

        let len = prices.length;
        while(r < len){
           if(prices[r]>prices[l]){
                maxProfit = Math.max(maxProfit, prices[r] - prices[l])
           } else {
                l = r ;
           }
           r++
        }
        return maxProfit;
    }
}
