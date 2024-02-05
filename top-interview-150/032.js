// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (s.length === 0 || words.length === 0) return [];
  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;
  const wordMap = new Map();
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  const result = [];
  for (let i = 0; i < wordLength; i++) {
    let start = i;
    let seen = new Map();
    for (let j = i; j <= s.length - wordLength; j += wordLength) {
      const word = s.substring(j, j + wordLength);
      if (wordMap.has(word)) {
        seen.set(word, (seen.get(word) || 0) + 1);
        while (seen.get(word) > wordMap.get(word)) {
          const leftWord = s.substring(start, start + wordLength);
          seen.set(leftWord, seen.get(leftWord) - 1);
          start += wordLength;
        }
        if (j - start + wordLength === totalLength) {
          result.push(start);
        }
      } else {
        seen.clear();
        start = j + wordLength;
      }
    }
  }
  return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
/* 
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
*/
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);
/* 
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
We return an empty array.
*/
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
/* 
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.
*/

/* 
Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
*/
