// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

const isAnagram = (s, t) => {
    if(s === "" || t === "") return true;
    if(s.length !== t.length) return false;
    const map = {};
    for(let i = 0; i < s.length; i++) {
        if(!map[s[i]]) map[s[i]] = 0;
        map[s[i]]++
    }
    for(let i = 0; i < t.length; i++) {
        if(map[t[i]]) {
            map[t[i]]--
            if(map[t[i]] === 0) {
                delete map[t[i]]
            }  
        }
    }
    return Object.keys(map).length === 0
};

console.log(isAnagram("anagras", "nagaram"));