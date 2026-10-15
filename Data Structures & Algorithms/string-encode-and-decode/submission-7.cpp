#include <string>
class Solution {
public:

    string encode(vector<string>& strs) {
        string s = "";
        for(string c :strs){
            s+= to_string(c.length());
            s+="=";
            s+=c;
        }
        return s;
    }

    vector<string> decode(string s) {
        vector <string> ans = {};
        int j = 0;
        int i = 0;
        while (i < s.length()){

            if(s[j]=='='){
                string sLen = s.substr(i,j);
                int length = stoi(sLen);
                ans.push_back(s.substr(j+1,length));
                i = j+1+length;
                j = i;
            }
            else{
                j++;
            }
        }
        return ans;
    }
};
