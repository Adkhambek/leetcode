// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/

//1.
// const strStr = (haystack, needle) => {
//     return haystack.indexOf(needle);
// };

//2.
const strStr = (haystack, needle) => {
    if (needle === "") return 0;
    let arr = haystack.match(new RegExp(".{1," + needle.length + "}", "g"));
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === needle) {
            return i * needle.length;
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"));
