/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    // Function to map a number according to the given mapping
    const mapNumber = (num) => {
        if (num === 0) return mapping[0];
        let mapped = 0;
        let power = 1;
        while (num > 0) {
            let digit = num % 10;
            mapped += mapping[digit] * power;
            power *= 10;
            num = Math.floor(num / 10);
        }
        return mapped;
    };

    // Create an array of objects with original number, mapped number, and index
    const mappedNums = nums.map((num, index) => ({
        original: num,
        mapped: mapNumber(num),
        index: index
    }));

    // Sort based on mapped value and original index
    mappedNums.sort((a, b) => {
        if (a.mapped !== b.mapped) {
            return a.mapped - b.mapped;
        }
        return a.index - b.index;
    });

    // Return the sorted original numbers
    return mappedNums.map(item => item.original);
};