/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
       let a = "";
       if (s.length > 0) {
           a = "" + s[0];
       }
       for (let i = 1; i < s.length; i++) {
           if (!a.includes(s[i])) {
               a += s[i];
           } else {
               if (ans < a.length) {
                   ans = a.length;
               }
               a = a.slice(a.indexOf(s[i]) + 1) + s[i];
           }
       }
       if (ans < a.length) {
           ans = a.length;
       }
       return ans;
}