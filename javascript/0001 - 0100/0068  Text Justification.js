/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
   let currentLine = [];
   let currentLength = 0;

   for (const word of words) {
       if (currentLength + word.length + currentLine.length > maxWidth) {
           // Justify current line
           const spaces = maxWidth - currentLength;
           const gaps = currentLine.length - 1;
           if (gaps === 0) {
               result.push(currentLine[0] + ' '.repeat(spaces));
           } else {
               const spacePerGap = Math.floor(spaces / gaps);
               const extraSpaces = spaces % gaps;
               let line = '';
               for (let i = 0; i < currentLine.length; i++) {
                   line += currentLine[i];
                   if (i < gaps) {
                       line += ' '.repeat(spacePerGap + (i < extraSpaces ? 1 : 0));
                   }
               }
               result.push(line);
           }
           // Reset for next line
           currentLine = [word];
           currentLength = word.length;
       } else {
           currentLine.push(word);
           currentLength += word.length;
       }
   }

   // Handle last line (left-justified)
   let lastLine = currentLine.join(' ');
   lastLine += ' '.repeat(maxWidth - lastLine.length);
   result.push(lastLine);

   return result;
};