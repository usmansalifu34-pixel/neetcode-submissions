class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i =0;i<nums.length;i++){
            let val = nums[i]
            for(let j=i+1;j<nums.length;j++){
                if(val+nums[j]===target){
                    return [i,j]
                }
            }
        }
    }
}
