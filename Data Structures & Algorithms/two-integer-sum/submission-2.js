class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        let i =0
        for(i = 0;i<nums.length;i++){
            if(nums[i] in obj) break
            let num = target - nums[i]
            obj[num] = i

        }
       
        let j = Object.keys(obj).find((key)=>key==nums[i])
        return [obj[j],i]
    }
}
