#include <unordered_set>
class Solution {
public:
    
    string encode(vector<string>& strs) {
        string s = "";
        for(string str:strs){
            int length = str.length();
            string sLength = to_string(length);
            s+=sLength;
            s+="=";
            s+=str;
    
        }
        return s;
    }

    vector<string> decode(string s) {
        vector<string> strs = {};
       
        string str = "";
        int i = 0;
        int j = 0;
        while(i<s.length()){
            if(s[j]!='='){
                j++;
            }
            else{
                string temp = s.substr(i,j);
                int length = stoi(temp);
                strs.push_back(s.substr(j+1,length));
                i = j+1+length;
                j = i;
            }
        }
       return strs;
    }
};
