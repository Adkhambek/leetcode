// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

// const firstUniqChar = s => {
//     let freq = {};
//     for(char of s) {
//         if(char in freq) freq[char]++;
//         else freq[char] = 1; 
//     }
//     for(char in freq) {
//         if(freq[char] === 1) return s.indexOf(char);
//     }
//     return -1
// };

// 2. Bad solution
// const firstUniqChar = s => {
//     let freq = {};
//     for(char of s) {
//         if(char in freq) freq[char]++;
//         else freq[char] = 1; 
//     }
//     for(let i = 0; i < s.length; i++) {
//         if(freq[s[i]] === 1) return i;
//     }
//     return -1
// }

// 3.
// const firstUniqChar = s => {
//     for(let index in s)
//     if(s.indexOf(s[index]) === s.lastIndexOf(s[index])) return index;
//     return -1;
// }

// console.log(firstUniqChar("loveleetcode"));