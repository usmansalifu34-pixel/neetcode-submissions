class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let num of nums){
            if(map.has(num)){
               let temp = map.get(num) + 1
               map.set(num,temp)
            }
            else{
                 map.set(num,1)
            }
           
        }
        let tempArr = Array.from(map.entries())
        tempArr = tempArr.sort((a,b)=>b[1]-a[1])
        let ans = []
        for(let i = 0;i<k;i++){
            ans.push(tempArr[i][0])
        }
        return ans
    }
}
