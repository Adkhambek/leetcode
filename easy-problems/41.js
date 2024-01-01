// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// const kidsWithCandies = function (candies, extraCandies) {
//     const max = Math.max(...candies);
//     const result = [];
//     for (const val of candies) {
//         if (val + extraCandies < max) result.push(false);
//         else result.push(true);
//     }
//     return result;
// };

const kidsWithCandies = function (candies, extraCandies) {
    return candies.map((val) =>
        val + extraCandies < Math.max(...candies) ? false : true
    );
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
