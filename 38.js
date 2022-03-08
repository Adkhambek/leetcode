// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

// const defangIPaddr = function (address) {
//     return address.split(".").join("[.]");
// };

// Runtime: 60 ms, faster than 92.76% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 41.8 MB, less than 40.19% of JavaScript online submissions for Defanging an IP Address.

const defangIPaddr = function (address) {
    const arr = [...address];
    let result = "";
    for (const num of arr) {
        if (num === ".") result += "[.]";
        else result += num;
    }
    return result;
};

console.log(defangIPaddr("255.100.50.0"));
