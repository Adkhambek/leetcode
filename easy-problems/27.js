// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

//1.
// const reverseWords = (s) => {
//     const arr = s.split(" ");
//     let str = "";
//     for(let value of arr) {
//         str += value.split("").reverse().join("") + " ";
//     }
//     return str.slice(0, str.length -1);
// };

//2.
// const reverseWords = (s) => {
//     const arr = [];
//     for(let value of s.split(" ")) {
//         arr.push(value.split("").reverse().join(""));
//     }
//     return arr.join(" ");
// };

// 3.
// const reverseWords = (s) => {
//     const arr = [];
//     let str = "";

//     for(let char of s + " ") {
//         if(char === " ") {
//             arr.push(str);
//             str = "";
//         } else {
//             str += char;
//         }
//     }
//     return arr.map(value => value.split("").reverse().join("")).join(" ");
// };

//4.
const reverseWords = (s) => {
    return s.split(" ").map(value => value.split("").reverse().join("")).join(" ");
}


console.log(reverseWords("Let's take LeetCode contest"));
