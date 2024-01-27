// https://leetcode.com/problems/text-justification/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

function fullJustify(words, maxWidth) {
  let res = [],
    str = "",
    i = 0,
    n = words.length,
    x = 0;

  while (i < n) {
    if ((str + words[i]).length === maxWidth) {
      str += words[i++];
      res.push(str);
      str = "";
      x = i;
    } else if ((str + words[i]).length > maxWidth) {
      let j = x,
        cnt = maxWidth - (str.length - 1);
      while (cnt > 0 && j < i - 1) {
        words[j++] += " ";
        cnt--;
        if (j === i - 1 && cnt > 0) j = x;
      }
      let tempStr = "";
      j = x;
      while (j < i) tempStr += j < i - 1 ? words[j++] + " " : words[j++];
      while (tempStr.length < maxWidth) tempStr += " ";
      res.push(tempStr);
      str = "";
      x = i;
    } else str += words[i++] + " ";
  }
  if (str.length > 0) {
    let cnt = maxWidth - str.length;
    while (cnt > 0) {
      str += " ";
      cnt--;
    }
    res.push(str);
  }
  return res;
}

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
/* 
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
*/
/* console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
); */
/* 
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
*/
/* console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
); */
/*
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
*/

/* 
Constraints:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth
*/
