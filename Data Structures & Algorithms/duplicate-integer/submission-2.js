class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numTrack = {}
        for(let num of nums){
            if(num in numTrack) return true
            numTrack[num] = 1
        }
        return false
    }
}
