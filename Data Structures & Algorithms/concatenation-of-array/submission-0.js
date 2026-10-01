class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = []
        for(let i = 0;i<nums.length*2;i++){
            if(i<nums.length){
                ans[i] = nums[i]
            }
            else{
                ans[i]=nums[i-nums.length]
            }
        }
        return ans
    }
    
}
