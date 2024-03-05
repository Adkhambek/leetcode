// https://leetcode.com/problems/max-points-on-a-line/solutions/3337644/javascript-149-max-points-on-a-line/?envType=study-plan-v2&envId=top-interview-150
var maxPoints = function (ps) {
  function areSameLine([x1, y1], [x2, y2], [x3, y3]) {
    if (
      (x1 == x2 && x2 == x3) || //
      (y1 == y2 && y2 == y3)
    )
      return true;

    if (
      x1 == x2 || //
      x2 == x3 ||
      y1 == y2 ||
      y2 == y3
    )
      return false;

    const s1 = (y1 - y2) / (x1 - x2);
    const s2 = (y2 - y3) / (x2 - x3);
    return s1 === s2;
  }

  let max = 1;
  for (let i = 0; i < ps.length; i++)
    for (let j = i + 1; j < ps.length; j++) {
      let count = 2;
      for (let k = j + 1; k < ps.length; k++)
        if (areSameLine(ps[i], ps[j], ps[k])) {
          count++;
        }
      max = Math.max(max, count);
    }
  return max;
};
