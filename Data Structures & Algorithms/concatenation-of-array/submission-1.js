class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = []
        let n = nums.length
        for(let i = 0;i<n;i++){
           ans[i] = nums[i]
        }
        for(let i = n;i<n*2;i++){
            ans[i] = nums[i-n]
        }
        return ans
    }
}
