class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = []
        let n = nums.length
        for(let i = 0;i<n;i++){
           ans.push(nums[i])
        }
        for(let i = n;i<n*2;i++){
            ans.push(nums[i-n])
        }
        return ans
    }
}
