// 202. Happy Number
// https://leetcode.com/problems/happy-number/

const isHappy = n => {
   const obj = {}; 
   while(n !== 1) {
        if(!obj[n]) obj[n] = 0;
        obj[n]++;
        if(obj[n] !== 2) {
            let total = 0;
            for(let num of n.toString()) {
                total += num ** 2
            }
            n = total;
        } else {
            return false;
        }
    }
   return true;
};

console.log(isHappy(7));