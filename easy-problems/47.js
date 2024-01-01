// 1678. Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/
// G -> G
// () -> o
// (al) -> al
// const interpret = function (command) {
//     let str = "";
//     for (let i = 0; i < command.length; i++) {
//         if (command[i] === "(" && command[i + 1] === ")") str += "o";
//         if (command[i] === "(" && command[i + 1] === "a") str += "al";
//         if (command[i] === "G") str += "G";
//     }
//     return str;
// };

// const interpret = function (command) {
//     let str = "";
//     for (let i = 0; i < command.length; i++) {
//         if (command[i] === "(") {
//             if (command[i + 1] === ")") str += "o";
//             else str += "al";
//         }
//         if (command[i] === "G") str += "G";
//     }
//     return str;
// };

const interpret = function (command) {
    return command.replaceAll("(al)", "al").replaceAll("()", "o");
};

console.log(interpret("(al)G(al)()()G"));
