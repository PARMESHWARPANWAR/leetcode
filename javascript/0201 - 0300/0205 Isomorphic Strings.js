/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
       return false;
   }

   const sToT = {};
   const tToS = {};

   for (let i = 0; i < s.length; i++) {
       const charS = s[i];
       const charT = t[i];

       if ((sToT[charS] && sToT[charS] !== charT) || 
           (tToS[charT] && tToS[charT] !== charS)) {
           return false;
       }

       sToT[charS] = charT;
       tToS[charT] = charS;
   }

   return true;
};