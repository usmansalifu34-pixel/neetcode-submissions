class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        int i = 0;
        int j = 1;
        while(i<nums.size()){
            if(j>=nums.size()){
                if(i+2>=nums.size()) return false;
                i++;
                j = i+1;

            }
            if(nums[i]==nums[j]) return true;
            else{
                j++;
            }
        }
        return false;
    }
};