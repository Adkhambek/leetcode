// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/

const maximumWealth = function (accounts) {
    accounts = accounts.map((e) => e.reduce((p, c) => p + c, 0));
    return Math.max(...accounts);
};

console.log(
    maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
    ])
);
