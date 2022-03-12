// 1436. Destination City
// https://leetcode.com/problems/destination-city/

// const destCity = function (paths) {
//     let arr = [];
//     for (const path of paths) {
//         arr.push(path[0]);
//     }
//     for (const path of paths) {
//         if (!arr.includes(path[1])) return path[1];
//     }
// };

const destCity = function (paths) {
    const map = new Map(paths);
    for (const val of map.values()) {
        if (!map.has(val)) return val;
    }
};

console.log(
    destCity([
        ["B", "C"],
        ["D", "B"],
        ["C", "A"],
    ])
);

console.log(
    destCity([
        ["qMTSlfgZlC", "ePvzZaqLXj"],
        ["xKhZXfuBeC", "TtnllZpKKg"],
        ["ePvzZaqLXj", "sxrvXFcqgG"],
        ["sxrvXFcqgG", "xKhZXfuBeC"],
        ["TtnllZpKKg", "OAxMijOZgW"],
    ])
);
