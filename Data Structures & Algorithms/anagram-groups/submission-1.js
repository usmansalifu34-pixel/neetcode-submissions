class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let i = 0;i<strs.length; i++){
            
            if(strs[i].split('').sort() in obj) obj[strs[i].split('').sort()].push(strs[i])
            else{
                obj[strs[i].split('').sort()] = [strs[i]]
            }
        }
        // let ans = []
        // Object.keys(obj).forEach((key)=>{
        //     let temp = obj[key].map((i)=>strs[i])
        //     ans.push(temp)
        // })
        return Object.values(obj)
    }
}
