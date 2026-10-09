#include <unordered_map>
#include <algorithm>
#include <vector>
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map <string,vector<string>> myMap;
        vector<vector<string>> ans = {};
        for(string word:strs){
            string key = word;
            sort(key.begin(),key.end());
            myMap[key].push_back(word);
        }
        for(auto &[key,val]: myMap){
            ans.push_back(val);
        }
        return ans;
    }
};
