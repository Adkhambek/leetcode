//14. Longest Common Prefix
//https://leetcode.com/problems/longest-common-prefix/

// const longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return prefix;
//     let prefix = strs[0];
//     console.log(strs[1].indexOf("fl"));
//     for (let i = 0; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             console.log(prefix);
//             prefix = prefix.substring(0, prefix.length - 1);
//             if (!prefix) return "";
//         }
//     }
//     return prefix;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
