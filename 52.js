// 2108. Find First Palindromic String in the Array
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

const firstPalindrome = function (words) {
    const result = words.find(
        (val) => val === val.split("").reverse().join("")
    );
    return result ? result : "";
};

console.log(firstPalindrome(["abc", "car", "ad", "raceca", "cool"]));
