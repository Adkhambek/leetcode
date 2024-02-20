// https://leetcode.com/problems/simplify-path/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const result = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir === "" || dir === ".") continue;
    else if (dir === "..") result.pop();
    else result.push(dir);
  }

  return "/" + result.join("/");
};

console.log(simplifyPath("/home/"));
/* 
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
*/
console.log(simplifyPath("/../"));
/* 
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
*/
console.log(simplifyPath("/home//foo/"));
/* 
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
*/

/* 
Constraints:

1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.
*/
