// 205. Isomorphic Strings
//  https://leetcode.com/problems/isomorphic-strings/

const isIsomorphic = (s, t) => {
    if(s === "" && t === "") return true;
    if(s.length !== t.length) return false;
    let map = {};
    let map2 = {};
    for(let index in s) {
        const l = s[index]
        if(l in map) {
            map[l] = [map[l]]
            map[l].push(index * 1);
        }
        else map[l] = index * 1;
    }
    for(let index in t) {
        const l = t[index] 
        if(l in map2) {
            map2[l] = [map2[l]]
            map2[l].push(index * 1);
        }
        else map2[l] = index * 1;
    }
    console.log(map, map2);
    
     s = Object.values(map);
     t = Object.values(map2);
     return JSON.stringify(s) === JSON.stringify(t)
};

console.log(isIsomorphic("13", "43"));

