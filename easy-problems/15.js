// 258. Add Digits
// https://leetcode.com/problems/add-digits/
//1.
const addDigits = num => {
    if(num === 0) return 0;
    if(num < 10) return num;
    while(num >= 10) {
        let total = 0;
        while(num > 0) {
            total += num % 10;
            num = num / 10 | 0;
        }
        num = total
    }
    return num
};

//2.
// const addDigits = num => {
//     if(num === 0) return 0;
//     if(num < 10) return num;
//     return num / 9 === 0 ? 9 : num % 9
// };

//3.


console.log(addDigits(38));