// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
    let i = 0, j = 0;
    while( j < t.length) {
        if(s[i] === t[j]) i++;
        j++;        
    }
    return i === s.length ? true: false;
};

console.log(isSubsequence("abc", "ahbgdc"));