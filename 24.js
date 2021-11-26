// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

// const reverseString = s => {
//     return s.reverse();    
// };

const reverseString = s => {
    let arr = [];
    let end = s.length - 1;

    while(end >= 0) {
        arr.push(s[end])
        end--;
    }

    return arr
};


console.log(reverseString(["h","e","l","l","o"]));