/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var n=needle.length;
    for(var i=0, j=i+n;i<haystack.length-n+1;i++,j++)
    {
        var need=""+haystack.slice(i,j);
        if(need===needle)
        {
            return i;
        }
    }
    return -1;
};